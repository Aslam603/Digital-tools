


const FooterSecondary = () => {
  return (
    <footer className="bg-blue-950 pt-10 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Logo & Description - FIXED SECTION */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-4">
              DigiTools
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Quick Links */}
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

          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white">
          <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">Privacy policy</a>
            <a href="#" className="hover:text-red-400 transition">Terms of service</a>
            <a href="#" className="hover:text-red-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSecondary;