const Steps = () => {

    return (

<section className="py-12">


<div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2.5">Get Started in 3 Steps</h1>
        <p className="opacity-55 mb-16">Start using premium digital tools in minutes, not hours.</p>
      </div>


<div className="grid grid-cols-3 gap-2 justify-items-center mx-auto max-w-6xl">

<div className="card bg-white text-black border border-white shadow-2xl  w-80 h-72">

    <button className="rounded-full bg-linear-to-r from-blue-700 to-purple-700 text-white h-6 w-8 justify-end">01</button>


  <div className="card-body items-center text-center">

    <img className="w-16 bg-gray-200 rounded-full p-3" src="user.png"></img> 

    
    <h2 className="card-title font-bold text-2xl">Create Account</h2>
    <p  className="opacity-50">Sign up for free in seconds. No credit card  <br /> required to get started.</p>
  </div>


</div>
  


<div className="card bg-white text-black border border-white shadow-2xl  w-80 h-72">


    <button className="rounded-full bg-linear-to-r from-blue-700 to-purple-700 text-white h-6 w-8 justify-end">02</button>


  <div className="card-body items-center text-center">

    <img className="w-16 bg-gray-200 rounded-full p-3" src="package.png"></img> 

    
    <h2 className="card-title font-bold text-2xl">Choose Products</h2>
    <p  className="opacity-50">Browse our catalog and select the tools <br /> that fit your needs.</p>
  </div>


</div>


<div className="card bg-white text-black border border-white shadow-2xl  w-80 h-72">

    <button className="rounded-full bg-linear-to-r from-blue-700 to-purple-700 text-white h-6 w-8   justify-end">03</button>


  <div className="card-body items-center text-center">

    <img className="w-16 bg-gray-200 rounded-full p-3" src="rocket.png"></img> 

    
    <h2 className="card-title font-bold text-2xl">Start Creating</h2>
    <p  className="opacity-50">Download and start using your premium tools immediately.</p>
  </div>


</div>


</div>


</section>

    );



};

export default Steps;
