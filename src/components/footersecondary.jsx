const FooterSecondary = () => {
  return (
    <footer className="bg-blue-950 pt-20 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 text-center md:text-left">
          
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <img className="w-36 mb-4" src="DigiTools (1).png" alt="Logo" />
            <p className="text-zinc-400 text-sm max-w-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">Models</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">API</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Socials</h3>
            <div className="flex flex-row items-center justify-center md:justify-start gap-4">
              <img className="w-8 cursor-pointer" src="Facebook (1).png" alt="Facebook" />
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1.5 cursor-pointer">
                <img 
                  className="w-full h-full object-contain" 
                  src="fi_5968958 (1).png" 
                  alt="X" 
                />
              </div>
              <img className="w-8 cursor-pointer" src="Instagram (1).png" alt="Instagram" />
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white text-center md:text-left">
          <div className="order-2 md:order-1 opacity-70">
            © {new Date().getFullYear()} DigiTools. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
            <a href="#" className="hover:text-blue-400 transition">Privacy policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of service</a>
            <a href="#" className="hover:text-blue-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSecondary;