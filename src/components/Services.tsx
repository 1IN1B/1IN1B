import { motion } from 'motion/react';
import { MonitorSmartphone, LayoutDashboard, Database, Workflow, AppWindow, Cpu } from 'lucide-react';

const services = [
  {
    icon: <LayoutDashboard className="text-orange-600 dark:text-orange-500" size={24} />,
    title: 'Intuitive SaaS & Dashboards',
    description: 'We develop minimalist, highly-functional SaaS platforms and specialized dashboards designed for user retention and frictionless experiences.',
  },
  {
    icon: <Database className="text-orange-600 dark:text-orange-500" size={24} />,
    title: 'Core Business Systems',
    description: 'Scalable Point of Sale (POS), CRMs, Applicant Tracking Systems (ATS), and Ticketing software perfectly tailored to your operations.',
  },
  {
    icon: <Workflow className="text-orange-600 dark:text-orange-500" size={24} />,
    title: 'Complex Workflows',
    description: 'We architect and implement powerful enterprise automation and integrations using platforms like n8n and custom API layers.',
  },
  {
    icon: <MonitorSmartphone className="text-orange-600 dark:text-orange-500" size={24} />,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android, focusing on performance, fluid interfaces, and battery efficiency.',
  },
  {
    icon: <AppWindow className="text-orange-600 dark:text-orange-500" size={24} />,
    title: 'Desktop Software',
    description: 'Heavy-duty desktop applications built for deep system integration, local processing power, and offline-first capabilities.',
  },
  {
    icon: <Cpu className="text-orange-600 dark:text-orange-500" size={24} />,
    title: 'System Architecture',
    description: 'From database design to cloud infrastructure deployment, we ensure your tech stack is secure, scalable, and cost-effective.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-50 dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24 border-l-2 border-orange-600 dark:border-orange-500 pl-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-600 font-bold mb-4">Our Architecture</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-zinc-900 dark:text-white">Our Expertise</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl italic">
            We don't just write code. We deliver complete, scalable solutions that power the core operations of modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-none bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors group flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-none bg-zinc-50 dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-orange-600 dark:text-orange-500 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <div className="text-orange-600 dark:text-orange-500 font-mono text-xs mb-1">/{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="font-bold text-sm uppercase text-zinc-900 dark:text-white">{service.title}</h3>
                </div>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-500 leading-normal mt-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
