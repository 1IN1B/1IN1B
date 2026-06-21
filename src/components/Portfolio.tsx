import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "UfdLoader",
    category: "Terminal Application",
    description: "Terminal-based download accelerator built with multi-connection technology. Features parallel segmented downloads, resume support, cross-platform native binaries, real-time terminal UI with per-connection progress bars, and an interactive folder picker.",
    image: "https://bbs-kappa.vercel.app/assets/ufdloader.png",
    links: [
      "https://github.com/1IN1B/ufd",
      "https://1in1b.github.io/ufd/"
    ]
  },
  {
    title: "Xplore",
    category: "Web Application",
    description: "Minimalist anonymous video and text chat application — an Omegle-inspired clone built with Next.js, WebRTC, and Socket.io. Features peer-to-peer video/audio streaming, real-time messaging, skip-to-next-partner, and dark/light theme support.",
    image: "https://bbs-kappa.vercel.app/assets/xplore.png",
    links: [
      "https://github.com/1IN1B/xplore",
      "https://xplore-production.up.railway.app/"
    ]
  },
  {
    title: "TicketGo",
    category: "SaaS Platform",
    description: "Modern ticket management system with authentication, role-based access, form validation, and database integration. Built with Next.js, TypeScript, MySQL, NextAuth, Radix UI, and Zustand for state management.",
    image: "https://bbs-kappa.vercel.app/assets/ticketgo.png",
    links: [
      "https://github.com/1IN1B/ticketgo",
      "https://ticketgo-wine.vercel.app/"
    ]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-zinc-50 dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="border-l-2 border-orange-600 dark:border-orange-500 pl-6">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-zinc-900 dark:text-white">Featured Work</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl italic">
              We specialize in crafting systems that handle complexity elegantly. Explore some of the core platforms we've architected.
            </p>
          </div>
          <a
            href="https://bbs-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-orange-600 dark:hover:text-orange-500 transition-colors pb-1 border-b border-zinc-300 dark:border-zinc-700 hover:border-orange-600 dark:hover:border-orange-500 text-xs font-bold uppercase tracking-widest whitespace-nowrap text-zinc-900 dark:text-white"
          >
            View Full Portfolio <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <a href={project.links[1] || project.links[0]} target="_blank" rel="noopener noreferrer" className="block w-full aspect-[16/9] rounded-none mb-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </a>
              
              <div className="space-y-3 flex flex-col grow">
                <div className="text-[10px] text-orange-600 dark:text-orange-500 tracking-widest font-mono uppercase flex items-center gap-2">
                  <span>#{String(index + 1).padStart(2, '0')}</span>
                  <span className="w-4 h-px bg-zinc-300 dark:bg-zinc-800"></span>
                  <span>{project.category}</span>
                </div>
                <a href={project.links[1] || project.links[0]} target="_blank" rel="noopener noreferrer" className="inline-block group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                  <h3 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2 text-zinc-900 dark:text-white group-hover:text-inherit">
                    {project.title}
                    <ArrowUpRight size={20} className="text-zinc-400 dark:text-zinc-500 transition-all duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-500" />
                  </h3>
                </a>
                <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-2">
                   {project.links.map((link, i) => (
                     <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="text-xs uppercase font-bold tracking-widest text-zinc-500 hover:text-orange-600 transition-colors border-b border-transparent hover:border-orange-600">
                       {link.includes('github.com') ? 'Source' : 'Live Demo'}
                     </a>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
