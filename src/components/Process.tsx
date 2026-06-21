import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    description: "We don't dive blindly into code. We map your ideas, understand the constraints, and architect a minimal, scalable foundation. Tech stack, database schema, and core UI paths are defined here.",
  },
  {
    number: '02',
    title: 'Intuitive UI/UX Prototyping',
    description: 'For SaaS tools and dashboards, usability is everything. We design high-fidelity, frictionless interfaces that focus strictly on utility, stripping away unnecessary visual noise.',
  },
  {
    number: '03',
    title: 'Agile Engineering',
    description: "We build in iterative cycles, sharing progress frequently. Whether it's a robust n8n workflow or a real-time POS system, we ensure the code is modular, type-safe, and thoroughly tested.",
  },
  {
    number: '04',
    title: 'Deployment & Scale',
    description: 'We set up secure infrastructure and CI/CD pipelines. After launch, we monitor performance and ensure your application scales smoothly as your user base and data volume grow.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 text-zinc-900 dark:text-white">How we develop intuitive & minimal SaaS</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed italic border-l-2 border-orange-600 dark:border-orange-500 pl-6">
              Building complex systems like Applicant Tracking Systems or CRMs requires an obsession with simplicity. We follow a rigorous engineering methodology to turn complicated business rules into effortless user experiences.
            </p>
            <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-8" />
            <p className="text-[10px] uppercase tracking-widest text-orange-600 dark:text-orange-500 font-bold">Efficient. Predictable. Scalable.</p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12 border-l border-zinc-200 dark:border-zinc-800"
              >
                <div className="absolute top-0 -left-[17px] w-8 h-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-xs font-mono text-orange-600 dark:text-orange-500">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 text-zinc-900 dark:text-white">{step.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
