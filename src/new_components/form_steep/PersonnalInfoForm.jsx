"use client"
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PersonalInfoForm({ formData, handleChange, nextStep, errors }) {
    // On initialise l'état local pour la date à partir de formData.birthDate
    const [startDate, setStartDate] = useState(
        formData.birthDate ? new Date(formData.birthDate) : null
    );

    // Quand la date change, on met à jour l'état local et le formData via handleChange
    const handleDateChange = (date) => {
        setStartDate(date);
        const formattedDate = date ? date.toISOString().split('T')[0] : "";
        // Simuler un événement pour mettre à jour le formData
        handleChange({ target: { name: "birthDate", value: formattedDate } });
    };

    // Synchroniser l'état local si formData.birthDate change en dehors de ce composant
    useEffect(() => {
        if(formData.birthDate) {
            setStartDate(new Date(formData.birthDate));
        }
    }, [formData.birthDate]);

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
                    <DatePicker
                        id="birthDate"
                        name="birthDate"
                        selected={startDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        className={`w-full px-4 py-2 border ${errors.birthDate ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholderText="JJ/MM/AAAA"
                        // Ces options permettent d'ouvrir le calendrier et aussi de saisir la date manuellement
                        showPopperArrow={false}
                        autoComplete="off"
                    />
                    {errors.birthDate && <p className="mt-1 text-sm text-red-600">{errors.birthDate}</p>}
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
