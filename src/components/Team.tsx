import { motion } from 'motion/react';
import { Globe, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Bibhuti',
    role: 'fullstack developer',
    initial: 'B',
    description: 'An agency of one, delivering the power of ten. Specialized in crafting scalable architectures, intuitive SaaS interfaces, and complex data workflows.',
    linkUrl: 'https://bbs-kappa.vercel.app/',
    icon: <Globe size={18} />,
    linkLabel: 'View Personal Site',
  },
  {
    name: 'Harsh Gupta',
    role: 'Backend Developer',
    initial: 'H',
    description: 'Exceptional backend developer working at TCS. Specialized in architecting robust server-side logic, APIs, and scalable data pipelines.',
    linkUrl: 'https://www.linkedin.com/in/harsh-gupta-01103820a/',
    icon: <Linkedin size={18} />,
    linkLabel: 'View LinkedIn',
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-600 font-bold mb-4">Leadership</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-zinc-900 dark:text-white">The Engineering Force</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg italic">
            1IN1B operates as a highly specialized, agile studio led by robust full-stack engineering.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch cursor-pointer">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-md bg-orange-500 text-black rounded-none p-8 relative overflow-hidden group border border-orange-400 flex flex-col"
            >
              <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className="w-20 h-20 rounded-none bg-zinc-50 dark:bg-black flex items-center justify-center text-3xl font-black text-orange-600 dark:text-orange-500 overflow-hidden shadow-inner shrink-0">
                   <div className="w-full h-full bg-gradient-to-br from-white dark:from-black to-zinc-200 dark:to-zinc-900 flex items-center justify-center text-orange-600 dark:text-orange-500 italic">
                      {member.initial}
                   </div>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-80 text-black">{member.role}</p>
                  <h3 className="text-2xl font-black tracking-tight uppercase text-black">{member.name}</h3>
                </div>
              </div>
              
              <p className="text-black/80 font-medium leading-relaxed mb-8 relative z-10 text-sm grow">
                {member.description}
              </p>
              
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-black/10 mt-auto">
                <a href={member.linkUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-none bg-zinc-50 dark:bg-black flex items-center justify-center text-orange-600 dark:text-orange-500 hover:bg-white dark:hover:bg-black/80 transition-colors border border-black/10 dark:border-none">
                  {member.icon}
                </a>
                <a href={member.linkUrl} target="_blank" rel="noopener noreferrer" className="ml-auto text-xs font-bold uppercase tracking-widest text-black hover:opacity-70 transition-colors flex items-center gap-2">
                  {member.linkLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
