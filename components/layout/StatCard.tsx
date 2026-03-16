import React from 'react';

const StatCard = ({ stat, label }: { stat: string; label: string }) => {
  return (
    <div className="group hover:border-primary-300 border-primary-100 rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <p className="text-primary-600 group-hover:text-primary-700 mb-4 text-5xl font-bold transition-all duration-300 group-hover:scale-105">
        {stat}
      </p>
      <p className="text-lg font-medium text-gray-700 transition-colors group-hover:text-gray-900">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
