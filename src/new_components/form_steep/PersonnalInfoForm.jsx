"use client"
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PersonalInfoForm({ formData, handleChange, nextStep, errors }) {
    // On initialise l'état local pour la date à partir de formData.birthDate
    const [startDate, setStartDate] = useState(formData.birthDate ? new Date(formData.birthDate) : null);
    const [inputValue, setInputValue] = useState(formData.birthDate ? moment(formData.birthDate).format('DD/MM/YYYY') : '');
    const [dateError, setDateError] = useState('');

    const formats = [
        'DDMMYYYY', 'DDMMYY',
        'DD/MM/YYYY', 'D/M/YYYY', 
        'DD-MM-YYYY', 'D-M-YYYY',
        'DD.MM.YYYY', 'D.M.YYYY',
        'YYYY-MM-DD'
    ];

    const autoFormatDate = (value) => {
        // Nettoyage des caractères non numériques
        const cleaned = value.replace(/\D/g, '');
        
        // Formatage automatique pendant la saisie
        if (cleaned.length <= 2) {
            return cleaned;
        } else if (cleaned.length <= 4) {
            return `${cleaned.slice(0,2)}/${cleaned.slice(2)}`;
        } else if (cleaned.length <= 6) {
            return `${cleaned.slice(0,2)}/${cleaned.slice(2,4)}/${cleaned.slice(4)}`;
        } else {
            return `${cleaned.slice(0,2)}/${cleaned.slice(2,4)}/${cleaned.slice(4,8)}`;
        }
    };
    const handleTextChange = (e) => {
        const rawValue = e.target.value;
        const formattedValue = autoFormatDate(rawValue);
        setInputValue(formattedValue);

 

        const parsedDate = moment(formattedValue, formats, true);
        if (parsedDate.isValid()) {
            const date = parsedDate.toDate();
            setStartDate(date);
            handleChange({
                target: {
                    name: "birthDate",
                    value: parsedDate.format('YYYY-MM-DD')
                }
            });
            setDateError('');
        } else {
            handleChange({ target: { name: "birthDate", value: '' } });
            setDateError(rawValue.length >= 2 ? 'Format de date invalide' : '');
            setStartDate(null);
        }
    };

    // Quand la date change, on met à jour l'état local et le formData via handleChange
    const handleDateChange = (date) => {
        setStartDate(date);
        const formattedDate = date ? moment(date).format('DD/MM/YYYY') : '';
        setInputValue(formattedDate);
        handleChange({
            target: {
                name: "birthDate",
                value: date ? moment(date).format('YYYY-MM-DD') : ''
            }
        });
        setDateError('');
    };

    // Synchroniser l'état local si formData.birthDate change en dehors de ce composant
    useEffect(() => {
        if (formData.birthDate) {
            const date = new Date(formData.birthDate);
            setStartDate(date);
            setInputValue(moment(date).format('DD/MM/YYYY'));
        }
    }, [formData.birthDate]);

       // Configuration avancée du DatePicker
       const CustomDatePicker = ({ value, onClick }) => (
        <button
            type="button"
            onClick={onClick}
            className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-indigo-500"
            aria-label="Ouvrir le calendrier"
        >
            ⌄
        </button>
    );

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
                <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Date de Naissance
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="birthDate"
                            name="birthDate"
                            value={inputValue}
                            onChange={handleTextChange}
                            className={`w-full px-4 py-2 border ${dateError || errors.birthDate ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                            placeholder="JJ/MM/AAAA, JJ-MM-AAAA..."
                            autoComplete="off"
                        />
                        <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            customInput={
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 px-3 text-gray-400 hover:text-indigo-500"
                                    aria-label="Ouvrir le calendrier"
                                >
                                    ⌄
                                </button>
                            }
                            popperClassName="z-50"
                            calendarClassName="bg-white p-4 shadow-lg rounded-lg"
                        />
                    </div>
                    {(dateError || errors.birthDate) && (
                        <p className="mt-1 text-sm text-red-600">{dateError || errors.birthDate}</p>
                    )}
                    <div className="mt-1 text-xs text-gray-500">
                        Formats acceptés : JJ/MM/AAAA, JJ-MM-AAAA, JJ.MM.AAAA
                    </div>
                </div>
                <div>
                    <label htmlFor="birthPlace" className="block text-sm font-medium text-gray-700 mb-1">
                        Lieu de Naissance
                    </label>
                    <input
                        type="text"
                        id="birthPlace"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.birthPlace ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.birthPlace && <p className="mt-1 text-sm text-red-600">{errors.birthPlace}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Numéro de Téléphone
                    </label>
                    <div className="flex">
                        <select className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Cameroun (+237)</option>
                            <option>France (+33)</option>
                            <option>Canada (+1)</option>
                            <option>Belgique (+32)</option>
                            <option>Suisse (+41)</option>
                            <option>Maroc (+212)</option>
                            <option>Sénégal (+221)</option>
                        </select>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`flex-1 px-4 py-2 border-y border-r ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom du Parent
                    </label>
                    <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.parentName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.parentName && <p className="mt-1 text-sm text-red-600">{errors.parentName}</p>}
                </div>

                <div>
                    <label htmlFor="parentContact" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact du Parent
                    </label>
                    <input
                        type="text"
                        id="parentContact"
                        name="parentContact"
                        value={formData.parentContact}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${errors.parentContact ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.parentContact && <p className="mt-1 text-sm text-red-600">{errors.parentContact}</p>}
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Suivant
                </button>
            </div>
        </div>
    );
}
