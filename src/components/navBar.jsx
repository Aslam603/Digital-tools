import React from 'react';

const NavBar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 py-4">
      <div className="navbar-start">
        <div className="flex items-center gap-1 w-10/12 mx-auto font-bold text-xl">
          <img 
            className="w-52 mb-4 rotate-180" 
            src="DigiTools (2).png" 
            alt="DigiTools Logo" 
          />
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-8 px-1 text-lg">
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Products</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Features</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Pricing</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Testimonials</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">FAQ</li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-5">
        {/* Cart Icon with Red Badge */}
        <div className="relative cursor-pointer p-2">
          <img className="w-6" src="shopping-cart.png" alt="Cart" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>

        <p className="cursor-pointer font-medium">Login</p>

        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-3xl font-semibold hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;