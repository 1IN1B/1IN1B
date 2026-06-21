import { ThemeProvider } from './components/ThemeProvider';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'react-hot-toast';
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
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="app-theme">
      <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-[#f8fafc] font-sans selection:bg-orange-500/30 selection:text-orange-900 dark:selection:text-orange-200">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#09090b',
              color: '#f8fafc',
              border: '1px solid #27272a',
              fontSize: '14px',
            },
            success: {
              iconTheme: { primary: '#f97316', secondary: '#09090b' },
            },
            error: {
              iconTheme: { primary: '#ef4444', secondary: '#09090b' },
            },
          }}
        />
        <BrowserRouter>
          <ScrollToTop />
          <RouterConfig />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
