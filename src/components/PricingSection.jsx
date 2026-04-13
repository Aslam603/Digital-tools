import React from 'react';

import pricingData from "../data/pricingData.json";

import PricingCard from './PricingCard';     

const PricingSection = () => {
  return (
    <section className="min-h-screen bg-base-200 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-base-content/60">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {pricingData.map((plan) => (
          <PricingCard 
            key={plan.id} 
            {...plan} 
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;