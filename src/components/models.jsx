import React, { useState } from 'react';
import modelsData from '../data/models.json';
import ModelsCard from './modelsCard';
import { ShoppingCart } from 'lucide-react';

const Models = () => {
  const [activeTab, setActiveTab] = useState('product');

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header is now first */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black mb-2">
            {activeTab === 'product' ? 'Premium Digital Tools' : 'Your Shopping Cart'}
          </h1>
          <p className="opacity-60">
            {activeTab === 'product' 
              ? 'Choose from our curated collection of premium digital products.' 
              : 'Review your selected items before checkout.'}
          </p>
        </header>

        {/* 2. Tabs are now between Header and Cards */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('product')}
            className={`btn px-8 ${activeTab === 'product' ? 'btn-primary' : 'btn-outline'}`}
          >
            Product
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={`btn px-8 ${activeTab === 'cart' ? 'btn-primary' : 'btn-outline'}`}
          >
            Cart
          </button>
        </div>

        {/* 3. Main Content Area */}
        {activeTab === 'product' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {modelsData.map((item) => (
              <ModelsCard key={item.id} data={item} />
            ))}
          </div>
        ) : (
          /* Added flex flex-col and items-center to center the icon and text */
          <div className="flex flex-col items-center text-center py-20 bg-base-100 rounded-2xl shadow-sm border border-base-300">
            <div className="mb-4">
               <ShoppingCart size={64} className="opacity-20" />
            </div>
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="opacity-60 mt-2">Looks like you haven't added any tools to your cart yet.</p>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Models;