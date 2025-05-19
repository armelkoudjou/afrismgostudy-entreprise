import React, { useState, useEffect } from 'react';
import { useLocalDatabase } from '../utils/database';
import CostVisualization from './CostVisualization';

/**
 * Tableau de bord administrateur pour gérer les inscriptions
 */

export default function AdminDashboard() {
  const { db, isLoading } = useLocalDatabase();
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
    byUniversity: {},
    byCountry: {},
  });
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [mockData, setMockData] = useState(null);

  // Authentification simulée
  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
      localStorage.setItem('admin_authenticated', 'true');
    } else {
      setError('Identifiants incorrects');
    }
  };

  // Vérifier si l'admin est déjà authentifié
  useEffect(() => {
    const isAuth = localStorage.getItem('admin_authenticated') === 'true';
    setIsAuthenticated(isAuth);
    
    // Charger les données mock pour l'affichage des coûts
    async function loadMockData() {
      try {
        // Dans une vraie application, cela viendrait d'une API
        const { mockData } = await import('../new_components/lib/data');
        setMockData(mockData);
      } catch (error) {
        console.error('Erreur lors du chargement des données mock:', error);
      }
    }
    
    loadMockData();
  }, []);

  // Charger les inscriptions
  useEffect(() => {
    if (!isAuthenticated || isLoading) return;

    async function loadRegistrations() {
      setLoading(true);
      try {
        // Dans une application réelle, cela viendrait d'une API
        // Pour cette démo, nous utilisons les données du cache local
        const forms = await db.getAllSavedForms();
        
        // Transformer les données pour le tableau de bord
        const registrationData = forms.map(form => ({
          id: form.id,
          student: {
            name: `${form.data.firstName || ''} ${form.data.lastName || ''}`,
            email: form.data.email || '',
            phone: form.data.phone || '',
          },
          program: {
            university: form.data.university || 'Non spécifié',
            field: form.data.field || 'Non spécifié',
            level: form.data.level || 'Non spécifié',
            country: form.data.country || 'Non spécifié',
          },
          accommodation: form.data.accommodation ? form.data.accommodation.type : 'Non spécifié',
          services: form.data.selectedServices || [],
          status: 'pending', // Par défaut
          submittedAt: form.lastUpdated,
          updatedAt: form.lastUpdated,
          notes: '',
          paymentStatus: 'unpaid',
          documents: [],
          // Ajouter les données complètes pour l'affichage détaillé
          formData: form.data,
        }));
        
        setRegistrations(registrationData);
        setLoading(false);
        
        // Générer les statistiques
        calculateStats(registrationData);
      } catch (error) {
        console.error('Erreur lors du chargement des inscriptions:', error);
        setLoading(false);
      }
    }
    
    loadRegistrations();
  }, [isAuthenticated, isLoading, db]);

  // Calculer les statistiques
  const calculateStats = (data) => {
    const statData = {
      total: data.length,
      pending: 0,
      approved: 0,
      rejected: 0,
      byUniversity: {},
      byCountry: {},
    };
    
    data.forEach(reg => {
      // Compteur par statut
      statData[reg.status] = (statData[reg.status] || 0) + 1;
      
      // Compteur par université
      const university = reg.program.university || 'Non spécifié';
      statData.byUniversity[university] = (statData.byUniversity[university] || 0) + 1;
      
      // Compteur par pays
      const country = reg.program.country || 'Non spécifié';
      statData.byCountry[country] = (statData.byCountry[country] || 0) + 1;
    });
    
    setStats(statData);
  };

  // Filtrer et trier les inscriptions
  const filteredRegistrations = registrations
    .filter(reg => {
      // Appliquer le filtre de statut
      if (filterStatus !== 'all' && reg.status !== filterStatus) return false;
      
      // Appliquer la recherche
      if (searchQuery.trim() === '') return true;
      
      const query = searchQuery.toLowerCase();
      return (
        reg.student.name.toLowerCase().includes(query) ||
        reg.student.email.toLowerCase().includes(query) ||
        reg.program.university.toLowerCase().includes(query) ||
        reg.program.field.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      // Appliquer le tri
      let comparison = 0;
      
      switch (sortBy) {
        case 'name':
          comparison = a.student.name.localeCompare(b.student.name);
          break;
        case 'university':
          comparison = a.program.university.localeCompare(b.program.university);
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
        case 'date':
        default:
          comparison = new Date(a.submittedAt) - new Date(b.submittedAt);
          break;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });

  // Mettre à jour le statut d'une inscription
  const updateRegistrationStatus = (id, status) => {
    setRegistrations(prevState =>
      prevState.map(reg => {
        if (reg.id === id) {
          const updated = { 
            ...reg, 
            status, 
            updatedAt: new Date().toISOString() 
          };
          // Si c'est l'inscription sélectionnée, mettre à jour la sélection
          if (selectedRegistration && selectedRegistration.id === id) {
            setSelectedRegistration(updated);
          }
          return updated;
        }
        return reg;
      })
    );
    
    // Mettre à jour les statistiques
    calculateStats(registrations.map(reg => reg.id === id ? {...reg, status} : reg));
  };

  // Ajouter une note à une inscription
  const addNote = (id, note) => {
    if (!note.trim()) return;
    
    setRegistrations(prevState =>
      prevState.map(reg => {
        if (reg.id === id) {
          const updatedNotes = reg.notes ? `${reg.notes}\n${note}` : note;
          const updated = { 
            ...reg, 
            notes: updatedNotes, 
            updatedAt: new Date().toISOString() 
          };
          
          if (selectedRegistration && selectedRegistration.id === id) {
            setSelectedRegistration(updated);
          }
          return updated;
        }
        return reg;
      })
    );
    
    setNoteText('');
    setShowAddNoteModal(false);
  };

  // Formater la date
  const formatDate = (dateString) => {
    if (!dateString) return 'Date inconnue';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Obtenir la classe CSS pour le badge de statut
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  // Afficher le statut en français
  const getStatusText = (status) => {
    switch (status) {
      case 'approved':
        return 'Approuvé';
      case 'rejected':
        return 'Rejeté';
      case 'pending':
      default:
        return 'En attente';
    }
  };

  // Si l'administrateur n'est pas authentifié, afficher le formulaire de connexion
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Administration
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Connectez-vous pour accéder au tableau de bord
            </p>
          </div>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">Nom d'utilisateur</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nom d'utilisateur"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Mot de passe</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Mot de passe"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Se connecter
              </button>
            </div>
            
            <div className="text-sm text-center">
              <p className="text-gray-600">
                Pour cette démo: utilisateur <strong>admin</strong>, mot de passe <strong>admin123</strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                Tableau de Bord Administrateur
              </h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  localStorage.removeItem('admin_authenticated');
                  setIsAuthenticated(false);
                }}
                className="ml-4 px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Statistiques */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total d'inscriptions
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stats.total}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      En attente
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stats.pending}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Approuvées
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stats.approved}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Rejetées
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stats.rejected}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recherche et filtres */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700">Rechercher</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 py-2 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Nom, email, université..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Statut</label>
                  <select
                    id="status"
                    name="status"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">Tous</option>
                    <option value="pending">En attente</option>
                    <option value="approved">Approuvés</option>
                    <option value="rejected">Rejetés</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="sort" className="block text-sm font-medium text-gray-700">Trier par</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <select
                      id="sort"
                      name="sort"
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-l-md"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="date">Date</option>
                      <option value="name">Nom</option>
                      <option value="university">Université</option>
                      <option value="status">Statut</option>
                    </select>
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                    >
                      {sortDirection === 'asc' ? (
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des inscriptions */}
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  {loading ? (
                    <div className="bg-white p-8 text-center">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"></div>
                      <p className="mt-2 text-gray-600">Chargement des inscriptions...</p>
                    </div>
                  ) : filteredRegistrations.length === 0 ? (
                    <div className="bg-white p-8 text-center">
                      <p className="text-gray-500">Aucune inscription trouvée</p>
                    </div>
                  ) : (
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Étudiant
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Programme
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Statut
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date de soumission
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredRegistrations.map((registration) => (
                          <tr 
                            key={registration.id} 
                            className={`hover:bg-gray-50 ${selectedRegistration && selectedRegistration.id === registration.id ? 'bg-indigo-50' : ''}`}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {registration.student.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {registration.student.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {registration.program.university}
                              </div>
                              <div className="text-sm text-gray-500">
                                {registration.program.level} en {registration.program.field}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(registration.status)}`}>
                                {getStatusText(registration.status)}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(registration.submittedAt)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => setSelectedRegistration(registration)}
                                className="text-indigo-600 hover:text-indigo-900 mr-3"
                              >
                                Détails
                              </button>
                            </td>
                            </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panneau de détails d'inscription */}
      {selectedRegistration && (
        <div className="fixed inset-0 overflow-hidden z-40">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSelectedRegistration(null)}></div>
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-auto">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Détails de l'inscription
                      </h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          onClick={() => setSelectedRegistration(null)}
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Fermer</span>
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="space-y-6">
                      {/* Informations étudiant */}
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-2">Informations de l'étudiant</h3>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Nom:</span> {selectedRegistration.student.name}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            <span className="font-medium">Email:</span> {selectedRegistration.student.email}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            <span className="font-medium">Téléphone:</span> {selectedRegistration.student.phone}
                          </p>
                        </div>
                      </div>

                      {/* Programme d'études */}
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-2">Programme d'études</h3>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Université:</span> {selectedRegistration.program.university}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            <span className="font-medium">Niveau:</span> {selectedRegistration.program.level}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            <span className="font-medium">Filière:</span> {selectedRegistration.program.field}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            <span className="font-medium">Pays:</span> {selectedRegistration.program.country}
                          </p>
                        </div>
                      </div>

                      {/* Hébergement */}
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-2">Hébergement</h3>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Type:</span> {selectedRegistration.accommodation}
                          </p>
                          {selectedRegistration.formData.accommodation && (
                            <p className="text-sm text-gray-700 mt-1">
                              <span className="font-medium">Coût mensuel:</span> {selectedRegistration.formData.accommodation.price.toLocaleString()} FCFA
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Services complémentaires */}
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-2">Services complémentaires</h3>
                        <div className="bg-gray-50 p-4 rounded-md">
                          {selectedRegistration.services && selectedRegistration.services.length > 0 ? (
                            <ul className="space-y-1">
                              {selectedRegistration.services.map((serviceId, index) => {
                                const service = mockData?.additionalServices?.find(s => s.id === serviceId);
                                return service ? (
                                  <li key={index} className="text-sm text-gray-700">
                                    {service.name} - {service.price.toLocaleString()} FCFA
                                  </li>
                                ) : null;
                              })}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500 italic">Aucun service sélectionné</p>
                          )}
                        </div>
                      </div>

                      {/* Visualisation des coûts */}
                      {mockData && (
                        <div>
                          <h3 className="text-md font-medium text-gray-900 mb-2">Analyse des coûts</h3>
                          <div className="bg-gray-50 p-4 rounded-md">
                            <CostVisualization 
                              formData={selectedRegistration.formData} 
                              mockData={mockData}
                              height={200}
                              showDetails={false} 
                            />
                          </div>
                        </div>
                      )}

                      {/* Statut de l'inscription */}
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-2">Statut actuel</h3>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <div className="flex justify-between items-center">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(selectedRegistration.status)}`}>
                              {getStatusText(selectedRegistration.status)}
                            </span>
                            <div>
                              <span className="text-xs text-gray-500">Dernière mise à jour: </span>
                              <span className="text-xs font-medium">{formatDate(selectedRegistration.updatedAt)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Changer le statut */}
                      <div>
                        <h3 className="text-md font-medium text-gray-900 mb-2">Changer le statut</h3>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateRegistrationStatus(selectedRegistration.id, 'approved')}
                            className={`flex-1 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                              selectedRegistration.status === 'approved'
                                ? 'bg-green-100 text-green-800 border border-green-300'
                                : 'bg-white text-green-700 border border-green-300 hover:bg-green-50'
                            }`}
                          >
                            Approuver
                          </button>
                          <button
                            onClick={() => updateRegistrationStatus(selectedRegistration.id, 'pending')}
                            className={`flex-1 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
                              selectedRegistration.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                                : 'bg-white text-yellow-700 border border-yellow-300 hover:bg-yellow-50'
                            }`}
                          >
                            En attente
                          </button>
                          <button
                            onClick={() => updateRegistrationStatus(selectedRegistration.id, 'rejected')}
                            className={`flex-1 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                              selectedRegistration.status === 'rejected'
                                ? 'bg-red-100 text-red-800 border border-red-300'
                                : 'bg-white text-red-700 border border-red-300 hover:bg-red-50'
                            }`}
                          >
                            Rejeter
                          </button>
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-md font-medium text-gray-900">Notes</h3>
                          <button
                            onClick={() => setShowAddNoteModal(true)}
                            className="px-2 py-1 text-xs bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Ajouter une note
                          </button>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md">
                          {selectedRegistration.notes ? (
                            <div className="whitespace-pre-line text-sm text-gray-700">
                              {selectedRegistration.notes}
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500 italic">Aucune note pour le moment</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Modal pour ajouter une note */}
      {showAddNoteModal && selectedRegistration && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowAddNoteModal(false)}></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Ajouter une note
                    </h3>
                    <div className="mt-2">
                      <textarea
                        rows={4}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Écrivez votre note ici..."
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => addNote(selectedRegistration.id, noteText)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Ajouter
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddNoteModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}