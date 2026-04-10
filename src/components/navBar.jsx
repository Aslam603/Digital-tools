const NavBar = () => {

return (

<div className="navbar">

    <div className="navbar-start">
<div className="flex items-center gap-1 font-bold text-xl">
<p className="text-4xl text-blue-800">DigiTools</p>
</div>
    </div>

    <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-8 px-1 text-lg">

<li>
    Products
</li>

<li>Features</li>
<li>Pricing</li>
<li>Testimonials</li>
<li>FAQ</li>

        </ul>
    </div>

<div className=" navbar-end    flex items-center gap-5">
    <img className="w-5" src="shopping-cart.png"></img> 

    <p>Login</p>

<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-3xl">Get Started</button>

</div>




</div>

);


};

export default NavBar;