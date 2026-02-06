import React from 'react';

const StatCard = ({ stat, label }: { stat: string; label: string }) => {
  return (
    <div className="group hover:border-primary-300 rounded-2xl border border-blue-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-primary-600 group-hover:text-primary-700 mb-4 text-5xl font-bold transition-all duration-300 group-hover:scale-110">
        {stat}
      </h3>
      <p className="text-lg font-medium text-gray-700 transition-colors group-hover:text-gray-900">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
