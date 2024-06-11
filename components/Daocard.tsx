// src/components/DaoCard.js
import React from 'react';

export const DaoCard = ({ logo, name, members }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 flex flex-col items-center space-y-2 shadow-lg">
      <img src={logo} alt={`${name} logo`} className="w-16 h-16" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-400">{members} members</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Join
      </button>
    </div>
  );
};


