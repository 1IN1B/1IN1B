import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-100 dark:bg-[#09090b] py-12 md:py-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="font-black italic tracking-tighter leading-none text-4xl inline-block mb-6 text-zinc-900 dark:text-white">
              1IN1B
            </a>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-8 leading-relaxed italic border-l-2 border-orange-600 dark:border-orange-500 pl-4">
              We turn ideas into code. Elevating businesses through robust SaaS platforms, core systems, and custom automation workflows.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-xs uppercase tracking-widest font-bold rounded-none hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-6">Expertise</h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
              <li>SaaS Development</li>
              <li>Point of Sale (POS)</li>
              <li>CRMs & Dashboards</li>
              <li>Automation (n8n)</li>
              <li>Mobile & Desktop Apps</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
              <li><a href="#services" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Process</a></li>
              <li><a href="#portfolio" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Portfolio</a></li>
              <li><a href="#team" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Team</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
            © {currentYear} 1IN1B. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
            <a href="#" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
