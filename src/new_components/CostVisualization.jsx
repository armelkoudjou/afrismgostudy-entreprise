import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';

/**
 * Composant de visualisation des coûts pour le récapitulatif
 * Permet de visualiser la répartition des frais avec un graphique
 */
export default function CostVisualization({ 
  formData,
  mockData,
  showDetails = true,
  height = 300,
}) {
  const [chartData, setChartData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [currency, setCurrency] = useState('FCFA');
  
  // Couleurs pour les différentes catégories
  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
  
  // Formater les nombres
  const formatNumber = (number) => {
    return new Intl.NumberFormat('fr-FR').format(number);
  };
  
  // Préparer les données pour le graphique
  useEffect(() => {
    if (!formData) return;
    
    const data = [];
    let total = 0;
    
    // Ajouter les frais de scolarité
    if (formData.tuitionFee) {
      data.push({
        name: 'Frais de scolarité',
        value: formData.tuitionFee,
        color: COLORS[0],
      });
      total += formData.tuitionFee;
    }
    
    // Ajouter les frais de logement
    if (formData.accommodation && formData.accommodation.price) {
      // Calculer pour une année académique (10 mois)
      const accommodationYearlyCost = formData.accommodation.price * 10;
      
      data.push({
        name: 'Logement (10 mois)',
        value: accommodationYearlyCost,
        color: COLORS[1],
      });
      total += accommodationYearlyCost;
    }
    
    // Ajouter les services additionnels
    if (formData.selectedServices && formData.selectedServices.length > 0 && mockData) {
      let servicesTotal = 0;
      
      formData.selectedServices.forEach(serviceId => {
        const service = mockData.additionalServices.find(s => s.id === serviceId);
        if (service) {
          servicesTotal += service.price;
        }
      });
      
      if (servicesTotal > 0) {
        data.push({
          name: 'Services complémentaires',
          value: servicesTotal,
          color: COLORS[2],
        });
        total += servicesTotal;
      }
    }
    
    // Ajouter les frais d'assurance (fixe)
    const insuranceFee = 50000;
    data.push({
      name: 'Assurance étudiante',
      value: insuranceFee,
      color: COLORS[3],
    });
    total += insuranceFee;
    
    // Ajouter les frais de subsistance estimés (fixe)
    const livingExpenses = 100000 * 10; // 100,000 FCFA par mois sur 10 mois
    data.push({
      name: 'Frais de subsistance estimés',
      value: livingExpenses,
      color: COLORS[4],
    });
    total += livingExpenses;
    
    setChartData(data);
    setTotalCost(total);
  }, [formData, mockData]);
  
  // Personnaliser le format du tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-md shadow-md">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-indigo-600 font-bold">{formatNumber(data.value)} {currency}</p>
          <p className="text-gray-500 text-sm">
            {Math.round((data.value / totalCost) * 100)}% du total
          </p>
        </div>
      );
    }
    return null;
  };
  
  // Personnaliser les libellés de légende
  const renderLegendText = (value, entry) => {
    const { color, payload } = entry;
    const percentage = Math.round((payload.value / totalCost) * 100);
    
    return (
      <span className="text-sm">
        <span style={{ color }}>{payload.name}</span>
        <span className="text-gray-500 ml-2">{percentage}%</span>
      </span>
    );
  };
  
  if (chartData.length === 0) {
    return (
      <div className="p-4 bg-gray-50 rounded-md text-center text-gray-500">
        Veuillez compléter le formulaire pour visualiser les coûts
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Répartition des Coûts</h3>
        <p className="text-sm text-gray-600">
          Aperçu des différentes dépenses pour votre projet d'études
        </p>
      </div>
      
      <div className="p-4">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500">Coût total estimé</p>
          <p className="text-2xl font-bold text-indigo-600">
            {formatNumber(totalCost)} {currency}
          </p>
        </div>
        
        <div style={{ height: `${height}px` }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                dataKey="value"
                paddingAngle={2}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
                  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
                  return (
                    <text 
                      x={x} 
                      y={y} 
                      fill="#4B5563" 
                      textAnchor={x > cx ? 'start' : 'end'} 
                      dominantBaseline="central"
                      className="text-xs"
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                ))}
                <Label 
                  value="Coûts" 
                  position="center" 
                  fill="#4B5563"
                  className="text-lg font-medium"
                />
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend formatter={renderLegendText} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {showDetails && (
          <div className="mt-6 border-t border-gray-100 pt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Détail des coûts</h4>
            <ul className="space-y-2">
              {chartData.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {formatNumber(item.value)} {currency}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <span className="font-medium text-gray-900">Total</span>
              <span className="font-bold text-indigo-600">
                {formatNumber(totalCost)} {currency}
              </span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-gray-50 text-xs text-gray-500">
        * Ces estimations sont données à titre indicatif et peuvent varier selon votre situation personnelle.
      </div>
    </div>
  );
}