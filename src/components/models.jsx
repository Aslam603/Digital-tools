import React, { useState } from 'react';
import modelsData from '../data/models.json';
import ModelsCard from './modelsCard';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

const Models = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState('product');

  const addToCart = (item) => {
    // Only add if not already in cart to prevent duplicates
    const exists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!exists) {
      setCartItems((prev) => [...prev, { ...item, cartId: Date.now() + Math.random() }]);
    }
  };

  const removeFromCart = (cartId) => {
    toast.success("Deleted succesfully!")
    setCartItems((prev) => prev.filter(item => item.cartId !== cartId));
  };

  const handleCheckout = () => {
toast.success("purchased successfully")

    setCartItems([]);

  };

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
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
            {cartItems.length > 0 && (
              <span className='ml-2 text-md font-medium px-2 py-1 rounded-md inline-flex items-center justify-center'>
               ({cartItems.length})
              </span>
            )}
          </button>
        </div>

        {activeTab === 'product' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {modelsData.map((item) => {
              // Check if this item is already in the cart
              const isAdded = cartItems.some(cartItem => cartItem.id === item.id);
              return (
                <ModelsCard 
                  key={item.id} 
                  data={item} 
                  onBuy={addToCart} 
                  isAdded={isAdded} 
                />
              );
            })}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center text-center py-20 bg-base-100 rounded-2xl shadow-sm border border-base-300">
                <div className="mb-4">
                   <ShoppingCart size={64} className="opacity-20" />
                </div>
                <h2 className="text-2xl font-bold">Your cart is empty</h2>
                <p className="opacity-60 mt-2">Looks like you haven't added any tools to your cart yet.</p>
              </div>
            ) : (
              <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300">
                {cartItems.map((item) => (
                  <div key={item.cartId} className='flex items-center justify-between gap-3 p-4 bg-base-200 rounded-xl mb-3'>
                    <div className="flex items-center gap-4">
                        <img src={item.icon} alt={item.name} className='w-12 h-12 object-contain' />
                        <div>
                          <p className='font-bold'>{item.name}</p>
                          <p className='text-lg opacity-70'>${item.price}</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="btn btn-circle btn-ghost text-error hover:bg-error/10"
                    >
                        <Trash2 size={20} />
                    </button>
                  </div>
                ))}

                <div className='flex justify-between items-center py-6 border-t border-base-300 mt-6'>
                  <span className='font-bold text-2xl'>Total</span>
                  <span className='font-bold text-2xl text-primary'>
                    ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                  </span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="btn bg-gradient-to-r from-blue-900 to-purple-900 border-none text-white btn-block text-lg h-16 rounded-xl shadow-lg"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Models;