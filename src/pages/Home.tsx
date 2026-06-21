import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90, z: -500, scale: 0.9 }}
      animate={{ opacity: 1, rotateY: 0, z: 0, scale: 1 }}
      exit={{ opacity: 0, rotateY: 90, z: -500, scale: 0.9 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Team />
      </main>
      <Footer />
    </motion.div>
  );
}
