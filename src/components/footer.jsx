const Footer = () => {
  return (
    <footer className=" w-full  mt-8   footer footer-horizontal footer-center bg-linear-to-r from-blue-700 to bg-purple-700 text-primary-content p-10">
      <aside className="flex flex-col items-center gap-6">
        
        <div className="text-center">
          <p className="font-bold text-4xl">
            Ready to Transform Your Workflow?
            <br />
            <span className="text-sm font-normal">
              Join thousands of professionals who are already using Digitools to work smarter.
            </span>
          </p>
          <p className="mt-4 text-lg font-medium">Start your free trial today</p>
        </div>

        <div className="flex gap-3.5">
          <button className="bg-white rounded-3xl text-blue-600 px-6 py-2 font-semibold hover:bg-gray-100 transition-colors">
            Explore products
          </button>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl px-6 py-2 border border-white hover:opacity-90 transition-opacity">
            View Pricing
          </button>
        </div>

        <div className="flex gap-4 text-sm opacity-90">
          <p>14 days free trial</p>
          <p>• No credit card required</p>
          <p>• Cancel anytime</p>
        </div>
        
      </aside>
    </footer>
  );
};

export default Footer;