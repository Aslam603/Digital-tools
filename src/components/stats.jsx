const Stats = () => {
  return (
    <div className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-8 mb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-36">
        
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">50K+</h2>
          <p className="text-sm opacity-90  ">Active Users</p>
        </div>

        <div className="hidden md:block h-12 w-px bg-white/30"></div>
        <div className="block md:hidden w-16 h-px bg-white/30"></div>

        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">200+</h2>
          <p className="text-sm opacity-90  ">Premium Tools</p>
        </div>

        <div className="hidden md:block h-12 w-px bg-white/30"></div>
        <div className="block md:hidden w-16 h-px bg-white/30"></div>

        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">4.9</h2>
          <p className="text-sm opacity-90 ">Ratings</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;