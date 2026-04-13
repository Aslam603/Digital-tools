import { CircleDot, Play, PlayIcon } from "lucide-react";
import BannerImage from "../assets/banner.png";


const Banner = () => {
  return (
    <div className="relative   w-10/12 mx-auto min-h-162.5 flex items-center overflow-hidden">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Content */}
<div className="flex flex-col items-start space-y-6 text-left">

          <div className="inline-flex items-center gap-2 bg-blue-300 text-blue-600 text-sm font-medium px-5 py-2 rounded-full">
          <CircleDot></CircleDot>  New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-black">
            Supercharge Your 
            <br />
            <span>Digital Workflow</span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-3xl">
              Explore Products
            </button>
            <button className="border border-blue-600 text-blue-600 rounded-2xl flex gap-1 px-3.5 py-2">
          <PlayIcon></PlayIcon>   Watch Demo
            </button>
          </div>

          <div className="h-12 w-px bg-white"></div>
        </div> {/* End Left Content */}

        {/* Right Content / Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
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