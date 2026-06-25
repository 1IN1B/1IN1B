import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Send, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RATE_LIMIT_COOKIE = 'contact_submitted';

function setRateLimitCookie() {
  const expires = new Date(Date.now() + 5 * 60 * 1000).toUTCString();
  document.cookie = `${RATE_LIMIT_COOKIE}=1; expires=${expires}; path=/; SameSite=Strict`;
}

function isRateLimited() {
  return document.cookie.split(';').some(c => c.trim().startsWith(`${RATE_LIMIT_COOKIE}=`));
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const submittingRef = useRef(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submittingRef.current) return;
    submittingRef.current = true;

    const form = e.currentTarget;

    if (isRateLimited()) {
      toast.error('Please wait 5 minutes before sending another message.', { id: 'contact-error', duration: 5000 });
      submittingRef.current = false;
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('Email service is not configured. Please set up EmailJS credentials.', { duration: 5000 });
      submittingRef.current = false;
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setRateLimitCookie();
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.', { id: 'contact-success', duration: 4000 });
      form.reset();
    } catch {
      toast.error('Failed to send message. Please try again or email us directly.', { id: 'contact-error', duration: 5000 });
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90, z: -500, scale: 0.9 }}
      animate={{ opacity: 1, rotateY: 0, z: 0, scale: 1 }}
      exit={{ opacity: 0, rotateY: 90, z: -500, scale: 0.9 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className="flex flex-col min-h-screen"
    >
      <Header />
      <main className="flex-grow pt-32 pb-24 md:pt-48 md:pb-32 px-6 max-w-3xl mx-auto w-full">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-500 mb-8 transition-colors border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-none hover:bg-zinc-100 dark:hover:bg-zinc-800 bg-white dark:bg-zinc-900"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mb-12 border-l-2 border-orange-600 dark:border-orange-500 pl-6">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-zinc-900 dark:text-white">Let's Build It.</h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg italic">
            Describe your project, timeline, and goals. We'll get back to you within 24 hours.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="user_email" className="block text-xs uppercase tracking-widest font-bold text-zinc-900 dark:text-white">
              Email Address
            </label>
            <input 
              type="email" 
              id="user_email" 
              name="user_email"
              placeholder="you@company.com" 
              className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 p-4 font-medium focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-zinc-900 dark:text-white"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-xs uppercase tracking-widest font-bold text-zinc-900 dark:text-white">
              Subject
            </label>
            <input 
              type="text" 
              id="subject" 
              name="subject"
              placeholder="Project Inquiry" 
              className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 p-4 font-medium focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-zinc-900 dark:text-white"
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-zinc-900 dark:text-white">
              Tell us what you want to build
            </label>
            <textarea 
              id="message" 
              name="message"
              rows={6}
              placeholder="We are looking to develop..." 
              className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 p-4 font-medium focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none text-zinc-900 dark:text-white"
              required
              disabled={loading}
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 dark:bg-orange-500 text-white dark:text-black text-xs uppercase tracking-widest font-bold rounded-none hover:bg-orange-700 dark:hover:bg-orange-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                Sending...
                <Loader2 size={18} className="animate-spin" />
              </>
            ) : (
              <>
                Send Inquiry
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </main>
      <Footer />
    </motion.div>
  );
}
