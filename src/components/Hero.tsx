import { motion } from 'motion/react';
import { ArrowRight, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-500/5 dark:from-orange-900/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 dark:bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          
          <h1 className="text-5xl md:text-7xl lg:text-[110px] uppercase font-bold tracking-tighter text-zinc-900 dark:text-white mb-8 leading-[0.85]">
            We turn ideas into <span className="text-orange-600 dark:text-orange-500 italic">code.</span>
            <span className="block mt-4 text-3xl md:text-5xl lg:text-6xl text-orange-600 dark:text-orange-500 tracking-tight normal-case">Bibhuti Hai to munkin Hai</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed border-l-2 border-orange-600 dark:border-orange-500 pl-6 italic">
            We build scalable systems like POS, CRMs, ATS, Ticketing, and specialized dashboard solutions, alongside robust desktop and mobile apps. We are the engineering layer for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 dark:bg-orange-500 text-white dark:text-black text-xs uppercase tracking-widest font-bold rounded-none hover:bg-orange-700 dark:hover:bg-orange-400 transition-colors"
            >
              Start Building
              <ArrowRight size={18} />
            </Link>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white text-xs uppercase tracking-widest font-bold rounded-none hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
