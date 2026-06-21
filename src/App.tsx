import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function RouterConfig() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-[#f8fafc] font-sans selection:bg-orange-500/30 selection:text-orange-900 dark:selection:text-orange-200">
        <BrowserRouter>
          <ScrollToTop />
          <RouterConfig />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
