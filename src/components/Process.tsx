import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';
import ProcessSprites from './ProcessSprites';

const steps = [
  {
    number: '01',
    title: 'Discovery & Architecture',
    description: "We don't dive blindly into code. We map your ideas, understand the constraints, and architect a minimal, scalable foundation. Tech stack, database schema, and core UI paths are defined here.",
    formation: 'Plane',
  },
  {
    number: '02',
    title: 'Intuitive UI/UX Prototyping',
    description: 'For SaaS tools and dashboards, usability is everything. We design high-fidelity, frictionless interfaces that focus strictly on utility, stripping away unnecessary visual noise.',
    formation: 'Sphere',
  },
  {
    number: '03',
    title: 'Agile Engineering',
    description: "We build in iterative cycles, sharing progress frequently. Whether it's a robust n8n workflow or a real-time POS system, we ensure the code is modular, type-safe, and thoroughly tested.",
    formation: 'Cube',
  },
  {
    number: '04',
    title: 'Deployment & Scale',
    description: 'We set up secure infrastructure and CI/CD pipelines. After launch, we monitor performance and ensure your application scales smoothly as your user base and data volume grow.',
    formation: 'Helix',
  },
];

function useResolvedTheme() {
  const { theme } = useTheme();
  const [resolved, setResolved] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      setResolved(mq.matches ? 'dark' : 'light');
      const handler = (e: MediaQueryListEvent) => setResolved(e.matches ? 'dark' : 'light');
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    } else {
      setResolved(theme as 'dark' | 'light');
    }
  }, [theme]);

  return resolved;
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const resolvedTheme = useResolvedTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const containerHeight = containerRef.current.offsetHeight;

    const scrolled = -rect.top;
    const scrollableDistance = containerHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

    const stepIndex = Math.min(3, Math.floor(progress * 4));
    if (stepIndex !== activeStep) {
      setActiveStep(stepIndex);
    }
  }, [activeStep]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToStep = useCallback((stepIndex: number) => {
    if (!containerRef.current) return;
    const viewportHeight = window.innerHeight;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollableDistance = containerHeight - viewportHeight;
    const targetProgress = stepIndex / 4;
    const targetScroll = containerRef.current.offsetTop + targetProgress * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, []);

  return (
    <div
      id="process"
      ref={containerRef}
      className={`relative h-[500vh] ${isDark ? 'bg-black' : 'bg-zinc-50'}`}
    >
      <section className={`sticky top-0 h-screen overflow-hidden border-y ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 1.5, 1500], fov: 75, near: 1, far: 5000 }}
              dpr={[1, isMobile ? 1.5 : 2]}
              frameloop="always"
              gl={{ antialias: true, alpha: true }}
              style={{ background: 'transparent' }}
            >
              <ProcessSprites activeStep={activeStep} isMobile={isMobile} isDark={isDark} />
            </Canvas>
          </Suspense>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col h-screen">
          <div className="flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className={`text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                How we develop intuitive & minimal SaaS
              </h2>
              <p className={`text-lg leading-relaxed italic border-l-2 pl-6 max-w-xl ${isDark ? 'text-zinc-400 border-orange-500' : 'text-zinc-600 border-orange-600'}`}>
                Building complex systems like Applicant Tracking Systems or CRMs requires an obsession with simplicity. We follow a rigorous engineering methodology to turn complicated business rules into effortless user experiences.
              </p>
            </motion.div>

            <div className={`relative min-h-[200px] max-w-lg backdrop-blur-sm rounded-none border ${isDark ? 'bg-black/40 border-zinc-800/50' : 'bg-white/60 border-zinc-200/80'}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className={`border-l-2 pl-6 md:pl-8 p-4 ${isDark ? 'border-orange-500' : 'border-orange-600'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 flex items-center justify-center text-sm font-mono ${isDark ? 'bg-orange-500/10 border border-orange-500 text-orange-500' : 'bg-orange-600/10 border border-orange-600 text-orange-600'}`}>
                        {steps[activeStep].number}
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                          {steps[activeStep].title}
                        </h3>
                        <p className={`text-[10px] uppercase tracking-widest font-mono ${isDark ? 'text-orange-500' : 'text-orange-600'}`}>
                          Formation: {steps[activeStep].formation}
                        </p>
                      </div>
                    </div>
                    <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {steps[activeStep].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-between pb-8">
            <div className="flex gap-3">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => scrollToStep(i)}
                  className={`w-10 h-10 flex items-center justify-center text-xs font-mono transition-all duration-300 ${
                    i === activeStep
                      ? isDark
                        ? 'bg-orange-500 text-black border-orange-500'
                        : 'bg-orange-600 text-white border-orange-600'
                      : i < activeStep
                        ? isDark
                          ? 'bg-orange-500/10 border border-orange-500/40 text-orange-500'
                          : 'bg-orange-600/10 border border-orange-600/40 text-orange-600'
                        : isDark
                          ? 'bg-zinc-900 border border-zinc-700 text-zinc-500 hover:border-zinc-500'
                          : 'bg-zinc-100 border border-zinc-300 text-zinc-500 hover:border-zinc-400'
                  }`}
                >
                  {step.number}
                </button>
              ))}
            </div>
            <p className={`text-[10px] uppercase tracking-widest font-bold hidden md:block ${isDark ? 'text-orange-500' : 'text-orange-600'}`}>
              Scroll to advance
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
