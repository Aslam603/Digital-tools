import { CircleDot, PlayIcon } from "lucide-react";
import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[500px] lg:min-h-[650px] flex items-center overflow-hidden py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm font-medium px-5 py-2 rounded-full">
            <CircleDot size={16} /> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-black">
            Supercharge Your <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Workflow</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition shadow-lg">
              Explore Products
            </button>
            <button className="border border-blue-600 text-blue-600 rounded-full flex items-center gap-2 px-6 py-3 hover:bg-blue-50 transition">
              <PlayIcon size={18} /> Watch Demo
            </button>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end w-full">
          <div className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-full">
            <img
              className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse-slow"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>

      </div> 
    </div> 
  );
};

export default Banner;