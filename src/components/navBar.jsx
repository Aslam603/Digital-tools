import React from 'react';

const NavBar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 py-4 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Mobile Menu & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        
        <div className="flex items-center">
          <img 
            className="w-32 md:w-44 rotate-180 object-contain" 
            src="DigiTools (2).png" 
            alt="DigiTools Logo" 
          />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 xl:gap-8 px-1 text-base xl:text-lg font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Products</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Features</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Pricing</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Testimonials</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">FAQ</li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3 md:gap-5">
        {/* Cart Icon */}
        <div className="relative cursor-pointer p-2">
          <img className="w-6" src="shopping-cart.png" alt="Cart" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>

        <p className="cursor-pointer font-medium hidden sm:block">Login</p>

        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-3xl font-semibold text-sm md:text-base hover:opacity-90 transition-opacity whitespace-nowrap">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;