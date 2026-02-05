import React from 'react';

const StatCard = ({ stat, label }: { stat: string; label: string }) => {
  return (
   <div className="bg-white group rounded-2xl border border-blue-100 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary-300">
  <h3 className="mb-4 text-5xl font-bold text-primary-600 transition-all duration-300 group-hover:scale-110 group-hover:text-primary-700">
    {stat}
  </h3>
  <p className="text-lg font-medium text-gray-700 transition-colors group-hover:text-gray-900">{label}</p>
</div>
  );
};

export default StatCard;
