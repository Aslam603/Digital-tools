const Steps = () => {
  return (
    <section className="py-16 px-6 w-full bg-transparent">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Get Started in 3 Steps
        </h1>
        <p className="opacity-60 max-w-md">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto justify-center place-items-center">
        
        <div className="group bg-white text-black border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-8 relative w-full max-w-[350px] min-h-[320px] flex flex-col items-center justify-center">
          <span className="absolute top-6 left-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1">
            01
          </span>

          <div className="bg-gray-100 rounded-full p-5 mb-6 group-hover:scale-110 transition-transform">
            <img className="w-12 h-12 object-contain" src="user.png" alt="User" />
          </div>

          <h2 className="font-bold text-2xl mb-3">Create Account</h2>
          <p className="opacity-50 text-center text-sm leading-relaxed">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="group bg-white text-black border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-8 relative w-full max-w-[350px] min-h-[320px] flex flex-col items-center justify-center">
          <span className="absolute top-6 left-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1">
            02
          </span>

          <div className="bg-gray-100 rounded-full p-5 mb-6 group-hover:scale-110 transition-transform">
            <img className="w-12 h-12 object-contain" src="package.png" alt="Package" />
          </div>

          <h2 className="font-bold text-2xl mb-3">Choose Products</h2>
          <p className="opacity-50 text-center text-sm leading-relaxed">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="group bg-white text-black border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-3xl p-8 relative w-full max-w-[350px] min-h-[320px] flex flex-col items-center justify-center">
          <span className="absolute top-6 left-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1">
            03
          </span>

          <div className="bg-gray-100 rounded-full p-5 mb-6 group-hover:scale-110 transition-transform">
            <img className="w-12 h-12 object-contain" src="rocket.png" alt="Rocket" />
          </div>

          <h2 className="font-bold text-2xl mb-3">Start Creating</h2>
          <p className="opacity-50 text-center text-sm leading-relaxed">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Steps;