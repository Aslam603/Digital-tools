import React from 'react';

const PricingCard = ({ name, description, price, features, buttonText, isPopular }) => {
  return (
    <div 
      className={`card w-96 shadow-2xl border mt-10 relative 
        ${isPopular ? 'bg-linear-to-r from-blue-800 to-purple-900 text-white border-blue-700' : 'bg-white text-base-content border-base-200'}
      `}
    >
      
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="badge badge-warning font-bold px-4 py-3 shadow-md border-none">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="card-body">
        <div className="flex flex-col  items-start mt-2">
          <div>
            <h2 className="text-3xl  font-bold">{name}</h2>
            <p className={`text-xs mt-1 ${isPopular ? 'text-blue-100' : 'text-base-content/70'}`}>
              {description}
            </p>
          </div>
          <span className="text-2xl mt-5    font-semibold">${price}/mo</span>
        </div>

        <ul className="mt-6 flex flex-col gap-3 text-xs">
          {features.map((feature, idx) => (
            <li key={idx} className={`flex items-center ${!feature.available ? 'opacity-50' : ''}`}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`size-4 me-2 inline-block ${
                  feature.available 
                    ? (isPopular ? 'text-yellow-400' : 'text-success') 
                    : (isPopular ? 'text-blue-300' : 'text-base-content/50')
                }`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className={!feature.available ? 'line-through' : ''}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button 
            className={`btn btn-block border-none font-bold
              ${isPopular 
                ? 'bg-white text-blue-600 hover:bg-blue-50' 
                : 'bg-linear-to-r from-blue-800 to-purple-900 text-white hover:bg-blue-700'}
            `}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;