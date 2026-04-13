import React from 'react';
import modelsData from '../data/models.json';
import ModelsCard from './modelsCard';

const Models = () => {
  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-black mb-2">Our Models</h1>
          <p className="opacity-60">Ready-to-use career tools</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {modelsData.map((item) => (
            <ModelsCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;