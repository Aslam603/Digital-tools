import React from 'react';
import { toast } from 'react-toastify';

const ModelsCard = ({ data, onBuy, isAdded }) => {
  const getTagStyles = (tag) => {
    const tagName = tag?.toLowerCase();
    if (tagName === 'popular') return 'bg-purple-100 text-purple-700 border-purple-200';
    if (tagName === 'new') return 'bg-green-100 text-green-700 border-green-200';
    if (tagName === 'best popular') return 'bg-red-100 text-red-700 border-red-200';
    return 'bg-yellow-100 text-red-700 border-gray-200';
  };

  return (
    <div className="card w-full max-w-96 shadow-sm border border-base-200 relative bg-base-100">
      {data.tag && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getTagStyles(data.tag)}`}>
            {data.tag}
          </span>
        </div>
      )}

      <div className="card-body items-start text-left">
        <div className="flex flex-col items-start mt-2">
          <div className="flex flex-col gap-3">
            <img src={data.icon} alt="" className="size-10 object-contain" />
            <h2 className="text-2xl font-bold">{data.name}</h2>
          </div>
          <div className="flex flex-row items-baseline gap-1 mt-1">
            <span className="text-xl font-bold">${data.price}</span>
            <p className="opacity-80 text-sm">/{data.period}</p>
          </div>
        </div>

        <p className="text-sm mt-3 text-base-content/70 min-h-[3rem]">
          {data.description}
        </p>

        <ul className="mt-6 flex flex-col gap-3 text-xs flex-grow">
          {data.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="card-actions mt-8 w-full">
          <button 
            onClick={() => {
              onBuy(data);
              toast.success("Item added to cart");
            }}
            disabled={isAdded}
            className={`btn py-5 px-32 whitespace-nowrap border-none text-white btn-block transition-all duration-300 ${
              isAdded 
                ? 'bg-green-600 hover:bg-green-600 cursor-default' 
                : 'bg-gradient-to-r from-blue-900 to-purple-900'
            }`}
          >
            {isAdded ? 'Added to Cart' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelsCard;