'use client';

import React from 'react';
import Link from 'next/link';
import { Mic, Play, CalendarCheck, BrainCircuit, CheckCircle2, Menu, ChevronDown, Check, Zap, Smartphone, Globe, Shield, Clock, Instagram, Phone, Mail } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const testimonials = [
    { quote: "It's so much faster than Siri or Google Assistant for just setting a quick reminder. Absolute gold.", author: "Sarah J.", role: "Product Manager", avatar: "https://i.pravatar.cc/150?u=sarah" },
    { quote: "The Hindi voice recognition is surprisingly good. Truly understands the Indian context.", author: "Rahul K.", role: "Software Engineer", avatar: "https://i.pravatar.cc/150?u=rahul" },
    { quote: "Total game changer for my productivity. My hands are usually busy, so this is perfect.", author: "Mike T.", role: "Content Creator", avatar: "https://i.pravatar.cc/150?u=mike" },
    { quote: "I've tried every app, but the voice-first approach here is what finally stuck.", author: "Elena R.", role: "Founder", avatar: "https://i.pravatar.cc/150?u=elena" },
    { quote: "Brilliant UI. It feels like the app is listening to my soul, not just my words.", author: "David W.", role: "Designer", avatar: "https://i.pravatar.cc/150?u=david" },
    { quote: "Finally an app that works as fast as I think. Voice transcription is flawless.", author: "Sonia P.", role: "CEO", avatar: "https://i.pravatar.cc/150?u=sonia" }
  ];

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        const limit = window.innerWidth < 1024 ? 6 : 6; // Go up to 6 then snap
        if (next > limit) return 0;
        return next;
      });
    }, 8000);

    // Special logic for first slide pause (stop some second)
    if (activeIndex === 0) {
      clearInterval(interval);
      setTimeout(() => {
        setActiveIndex(1);
      }, 10000); // 10 seconds for the first slide start
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0E061B] text-slate-50 relative font-sans selection:bg-purple-500/30 overflow-x-hidden">

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(138, 92, 245, 0.3) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      {/* Background Orbs & Effects */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[#663CE6]/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="fixed top-[30%] right-[-5%] w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-[#7C3AED]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMenuOpen ? 'bg-[#0E061B]' : 'bg-[#0E061B]/60 backdrop-blur-xl'} border-b border-white/5`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform shadow-lg shadow-purple-500/10">
              <img src="/logo.jpg" alt="Remind Voice Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-lg sm:text-2xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">Remind Voice</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['How It Works', 'Features', 'Contact'].map((link) => (
              link === 'Contact' ? (
                <Link
                  key={link}
                  href="/contact"
                  className="hover:text-white transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                </Link>
              ) : (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-white transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.rv.remindvoice&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-linear-to-r from-purple-600 to-blue-600 hover:scale-105 active:scale-95 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-purple-500/20"
            >
              <Smartphone className="w-4 h-4" />
              Download App
            </Link>
            <button
              className="md:hidden text-slate-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <Mic className="w-6 h-6 rotate-45" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-[#0E061B] border-b border-white/5 px-6 py-8 flex flex-col gap-6"
            >
              {['How It Works', 'Features', 'Contact'].map((link) => (
                link === 'Contact' ? (
                  <Link
                    key={link}
                    href="/contact"
                    className="text-lg font-semibold text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </Link>
                ) : (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lg font-semibold text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </Link>
                )
              ))}
              <Link
                href="https://play.google.com/store/apps/details?id=com.rv.remindvoice&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-linear-to-r from-purple-600 to-blue-600 py-4 rounded-2xl font-bold text-white mt-4 text-center flex items-center justify-center gap-3"
              >
                <Smartphone className="w-5 h-5" />
                Download on Play Store
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10 pt-32 pb-20">

        {/* Floating Icons Decor */}
        <div className="absolute top-40 left-10 animate-bounce-slow opacity-20 hidden lg:block">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center -rotate-12">
            <Smartphone className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <div className="absolute top-120 left-30 animate-bounce-slow opacity-20 hidden lg:block">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center -rotate-12">
            <Clock className="w-6 h-6 text-orange-400" />
          </div>
        </div>
        <div className="absolute top-60 right-20 animate-bounce-slow delay-700 opacity-20 hidden lg:block">
          <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center rotate-12">
            <CalendarCheck className="w-8 h-8 text-purple-400" />
          </div>
        </div>
        <div className="absolute top-150 right-80 animate-bounce-slow delay-700 opacity-20 hidden lg:block">
          <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center rotate-12">
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col md:flex-row items-center justify-between gap-16"
        >
          <div className="flex-1 text-center md:text-left z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-200 text-xs font-bold mb-8"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>AI VOICE TECHNOLOGY 2024</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] bg-clip-text text-transparent bg-linear-to-b from-white via-white to-slate-400">
              Your voice is <br /> the <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-400 font-extrabold">new keyboard.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              Revolutionizing how you stay organized. No typing required—just speak your mind and we'll remember the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button className="w-full sm:w-auto flex items-center gap-4 bg-black/40 border border-white/10 hover:border-purple-500/50 backdrop-blur-2xl px-4 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 group shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Smartphone className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase font-black text-slate-500 tracking-tighter">Download on the</p>
                  <p className="text-xl text-white tracking-tighter font-medium">App Store</p>
                </div>
              </button>
              <button className="w-full sm:w-auto flex items-center gap-4 bg-black/40 border border-white/10 hover:border-blue-500/50 backdrop-blur-2xl px-4 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 group shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Play className="w-6 h-6 text-white fill-white group-hover:text-blue-400 group-hover:fill-blue-400 transition-colors" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase font-black text-slate-500 tracking-tighter">Get it on</p>
                  <p className="text-xl text-white tracking-tighter font-medium">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center relative scale-90 md:scale-110 lg:scale-125">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] flex items-center justify-center group">
              {/* Animated Rings */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-white/5 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border border-white/10 rounded-full border-dashed"
              />

              {/* Mic Visualizer Base */}
              <div className="relative w-48 h-64 bg-linear-to-b from-blue-400/20 to-purple-600/20 rounded-full p-[2px] backdrop-blur-xl shadow-[0_0_80px_-20px_rgba(138,92,245,0.4)]">
                <div className="w-full h-full bg-[#11092a] rounded-full flex items-center justify-center relative overflow-hidden group-hover:bg-[#1a0e3d] transition-colors">
                  <div className="absolute inset-0 bg-linear-to-t from-purple-500/10 to-transparent" />
                  <Mic className="w-24 h-24 text-blue-400 filter drop-shadow-[0_0_20px_rgba(96,165,250,0.8)] relative z-10 group-hover:scale-110 transition-transform" />

                  {/* Animated visualizer lines */}
                  <div className="absolute bottom-12 flex items-end gap-1 px-4 h-12">
                    {[0.4, 1, 0.7, 1.2, 0.5, 0.9, 0.6].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [h * 24, h * 48, h * 24] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                        className="w-1.5 bg-blue-400/40 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* App Showcase Banner Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 py-20"
        >
          <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-[0_0_80px_-10px_rgba(138,92,245,0.3)] hover:shadow-[0_0_100px_-20px_rgba(138,92,245,0.5)] transition-all duration-700 min-h-[350px] md:min-h-0">
            <div className="absolute inset-0 bg-linear-to-t from-[#0E061B] via-transparent to-transparent z-10 opacity-60" />
            <img
              src="/screenshots/APP-SS_BANNER.jpg"
              alt="App Interface Overview"
              className="w-full h-full md:h-auto object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out absolute inset-0 md:relative"
            />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 space-y-2 pr-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                <Smartphone className="w-3 h-3" />
                Unified Interface
              </div>
              <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">The most intuitive <br className="md:hidden" /> <span className="text-purple-400">reminder experience</span> ever.</h3>
            </div>
          </div>
        </motion.section>

        {/* Integration / Ecosystem Section (NEW IMAGE-ISH SECTION) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-32 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
            {/* Image/Visual moved to first position */}
            <div className="flex-1 relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
              {/* Central AI Hub Visual */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-[3rem] rotate-45 border border-white/10 backdrop-blur-2xl" />
                <div className="absolute inset-8 bg-linear-to-tr from-purple-500/40 to-blue-500/10 rounded-[2.5rem] -rotate-12 border border-white/20 animate-pulse" />

                {/* Icons Floating Around - Enhanced Visibility & Quantity */}
                {[
                  { icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />, pos: "top-[-10%] left-[-5%] lg:top-[-30%] lg:left-[-15%]" },
                  { icon: <Shield className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />, pos: "top-[-5%] right-[-10%] lg:top-[-20%] lg:right-[-25%]" },
                  { icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />, pos: "bottom-[-10%] right-[10%] lg:bottom-[-20%] lg:right-[10%]" },
                  { icon: <CalendarCheck className="w-5 h-5 md:w-6 md:h-6 text-green-400" />, pos: "bottom-[5%] left-[-15%] lg:bottom-[10%] lg:left-[-30%]" },
                  { icon: <Mic className="w-5 h-5 md:w-6 md:h-6 text-red-400" />, pos: "bottom-[30%] right-[-15%] lg:bottom-[40%] lg:right-[-35%]" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, i % 2 === 0 ? 5 : -5, 0]
                    }}
                    transition={{
                      duration: 4 + i % 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`absolute ${item.pos} w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(138,92,245,0.2)] z-20 hover:scale-110 transition-transform cursor-default group`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </motion.div>
                ))}

                {/* Central Graphic (Representing the Image requested) */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative w-48 h-48 rounded-full bg-linear-to-r from-purple-500 to-blue-600 p-1 animate-pulse shadow-[0_0_50px_rgba(138,92,245,0.5)]">
                    <div className="w-full h-full bg-[#0E061B] rounded-full flex items-center justify-center">
                      <BrainCircuit className="w-20 h-20 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Connection Lines */}
              <div className="absolute w-full h-1 bg-linear-to-r from-transparent via-purple-500/20 to-transparent top-1/2 -rotate-45" />
              <div className="absolute w-full h-1 bg-linear-to-r from-transparent via-blue-500/20 to-transparent top-1/2 rotate-45" />
            </div>

            {/* Text Content moved to second position */}
            <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Seamless <span className="text-purple-400">Ecosystem</span> <br />
                for your life.
              </h2>
              <p className="text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 font-medium">
                Remind Voice connects directly with your existing tools. No complicated setup, just instant productivity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg"><Globe className="w-5 h-5 text-blue-400" /></div>
                  <span className="font-semibold text-sm">Cloud Sync</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg"><Shield className="w-5 h-5 text-green-400" /></div>
                  <span className="font-semibold text-sm">Secure</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-lg"><Zap className="w-5 h-5 text-orange-400" /></div>
                  <span className="font-semibold text-sm">Instant</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg"><Clock className="w-5 h-5 text-purple-400" /></div>
                  <span className="font-semibold text-sm">Always On</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          id="how-it-works" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative scroll-mt-24"
        >
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple as <span className="text-purple-500 underline decoration-purple-500/30 underline-offset-8">1-2-3</span></h2>
            <p className="text-slate-400 text-lg">Getting organized has never been this effortless.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white/2 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md flex flex-col items-center text-center relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                <Mic className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase text-white/90">1. Speak</h3>
              <p className="text-slate-400 mb-8 font-medium leading-relaxed flex-1">Use your natural voice. No need for specific keywords or robot-talk.</p>
              <div className="bg-black/40 rounded-2xl py-4 px-6 text-sm font-bold border border-white/10 w-full text-blue-200 tracking-tight">
                &quot;Call mom tomorrow 5pm&quot;
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/2 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md flex flex-col items-center text-center relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                <BrainCircuit className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase text-white/90">2. Understand</h3>
              <p className="text-slate-400 mb-8 font-medium leading-relaxed flex-1">Our AI extracts the core intent, date, and priority in real-time.</p>
              <div className="flex items-center gap-3 bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-2xl py-4 px-6 text-sm font-bold border border-purple-500/30 w-full justify-center text-purple-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
                ANALYZING INTENT...
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white/2 bg-linear-to-br from-white/5 to-transparent border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md flex flex-col items-center text-center relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors" />
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-2xl">
                <CalendarCheck className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase text-white/90">3. Ready</h3>
              <p className="text-slate-400 mb-8 font-medium leading-relaxed flex-1">Your reminder is set and ready to alert you across all devices.</p>
              <div className="flex items-center justify-center gap-3 bg-green-500/10 rounded-2xl py-4 px-6 text-sm font-bold border border-green-500/30 w-full text-green-400 uppercase tracking-widest">
                <CheckCircle2 className="w-6 h-6" />
                SCHEDULED
              </div>
            </div>
          </div>
        </motion.section>

        {/* Feature Highlights with Phones */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          id="features" className="max-w-7xl mx-auto px-6 py-32 flex flex-col xl:flex-row items-center gap-24 scroll-mt-24"
        >
          <div className="flex-1 space-y-10 lg:max-w-md xl:flex-shrink-0 z-10 text-center xl:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              BEYOND <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">TYPING.</span>
            </h2>
            <div className="space-y-6 pt-4">
              <p className="text-4xl font-black text-slate-100 italic opacity-80 uppercase tracking-widest">बस बोलिए:</p>
              <div className="p-1 rounded-[2.5rem] bg-linear-to-r from-blue-500/50 to-purple-500/50">
                <p className="text-2xl md:text-3xl font-black p-8 bg-[#0E061B] rounded-[2.4rem] inline-block text-white leading-snug shadow-2xl w-full">
                  &quot;Kal 5 baje mom <br className="hidden md:block" /> ko call karna&quot;
                </p>
              </div>
              <p className="text-xl text-slate-400 pt-4 font-bold max-w-sm mx-auto xl:mx-0">Multi-lingual AI that understands your context and language nuances.</p>
            </div>
          </div>

          <div className="flex-1 w-full relative h-[500px] md:h-[600px] flex items-center justify-center">
            <div className="flex justify-center items-end gap-2 sm:gap-6 relative z-20 scale-75 sm:scale-90 md:scale-100">

              {/* Left Phone */}
              <div className="hidden sm:block w-48 md:w-56 h-[400px] md:h-[440px] rounded-[2.5rem] shadow-2xl relative overflow-hidden translate-y-12 opacity-80 z-10 transition-all duration-500 hover:-translate-y-4 hover:rotate-0 transform -rotate-12 group">
                <img
                  src="/screenshots/screenshot_1.jpg"
                  alt="Reminders Timeline"
                  className="w-full h-full object-cover object-[50%_95%] scale-[1] transition-transform duration-500 group-hover:scale-[1.2]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0E061B]/40 to-transparent pointer-events-none" />
              </div>

              {/* Main Center Phone */}
              <div className="w-[280px] md:w-[320px] h-[580px] md:h-[620px] bg-[#0A0512] rounded-[3rem] border-8 border-[#3C2E6A] shadow-[0_0_100px_rgba(90,74,244,0.3)] relative overflow-hidden z-20 hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 w-full h-8 bg-black flex justify-center items-end pb-1 z-30">
                  <div className="w-28 h-5 bg-[#0A0512] rounded-full" />
                </div>

                <div className="relative h-full flex flex-col pt-12 pb-8 px-6 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-b from-[#150a36] to-[#0E061B] -z-10" />

                  <div className="flex-1 flex flex-col items-center justify-center mb-24">
                    <div className="w-32 h-32 rounded-full border-4 border-blue-500 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.6)] relative">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 scale-[1.3] animate-ping-slow" />
                      <Mic className="w-14 h-14 text-blue-400" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-4 right-4 bg-white rounded-[2rem] p-6 text-black shadow-2xl scale-100">
                    <div className="flex gap-2 mb-4 items-center text-blue-600 font-black uppercase text-[10px] tracking-widest">
                      <CalendarCheck className="w-4 h-4" />
                      <span>Tomorrow</span>
                    </div>
                    <div className="font-black text-4xl mb-1 text-center tracking-tighter">5:00 PM</div>
                    <div className="text-center font-bold text-xl mb-6 text-slate-700 uppercase">Call Mom</div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-4 bg-slate-100 rounded-2xl text-xs font-black uppercase hover:bg-slate-200 transition-colors">Edit</button>
                      <button className="flex-1 py-4 bg-blue-600 text-white rounded-2xl text-xs font-black uppercase hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 active:scale-95">Confirm</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="hidden sm:block w-48 md:w-56 h-[400px] md:h-[440px] rounded-[2.5rem] shadow-2xl relative overflow-hidden translate-y-12 opacity-80 z-10 transition-all duration-500 hover:-translate-y-4 hover:rotate-0 transform rotate-12 group">
                <img
                  src="/screenshots/ANDROID_05.jpg"
                  alt="Control and Settings"
                  className="w-full h-full object-cover object-[50%_95%] scale-[1] transition-transform duration-500 group-hover:scale-[1.2]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0E061B]/40 to-transparent pointer-events-none" />
              </div>

            </div>
          </div>
        </motion.section>

        {/* Testimonials 3-Item Autoplay Carousel Section */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-32 border-t border-white/5 relative z-10 bg-linear-to-b from-transparent to-black/20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight">Loved by <span className="text-blue-500 underline decoration-purple-500/40 underline-offset-8">Achievers</span></h2>

            <div className="relative group overflow-hidden overflow-x-hidden">
              <motion.div
                className="flex gap-10"
                animate={{
                  x: isMobile
                    ? `calc(-${activeIndex * 100}% - ${activeIndex * 40}px)`
                    : `calc(-${activeIndex * 33.333}% - ${activeIndex * 13.333}px)`
                }}
                transition={{
                  type: activeIndex === 0 ? "tween" : "spring",
                  duration: activeIndex === 0 ? 0 : 0.8,
                  damping: 30,
                  stiffness: 100
                }}
              >
                {[...testimonials, ...testimonials.slice(0, 3)].map((testimonial, i) => (
                  <div
                    key={i}
                    className="w-full md:w-[calc(33.333%-27px)] shrink-0 bg-white/2 bg-linear-to-tr from-white/10 to-transparent border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden ring-1 ring-white/10"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[60px]" />
                    <div className="flex gap-1.5 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle2 key={i} className="w-4 h-4 text-purple-400 fill-purple-400/20" />
                      ))}
                    </div>
                    <p className="text-lg text-slate-200 mb-10 font-bold leading-relaxed italic opacity-95 tracking-tight">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl shrink-0 shadow-lg relative overflow-hidden bg-linear-to-br from-purple-500/20 to-blue-500/20 p-[1px]">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                      <div>
                        <p className="font-extrabold text-sm text-white uppercase tracking-tight">{testimonial.author}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Navigation Indicators */}
              <div className="flex justify-center gap-3 mt-16">
                {(isMobile ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3]).map((i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-12 bg-purple-500 shadow-[0_0_20px_#a855f7]' : 'w-2 bg-white/10 hover:bg-white/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* AI Processing Hub Section (Replaces Video) */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-32 border-t border-white/5 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <BrainCircuit className="w-4 h-4" />
                Neural Processing Engine
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Intelligence</span> behind the voice.</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Remind Voice doesn't just record; it understands context, priority, and emotion to organize your life perfectly.</p>
            </div>

            <div className="relative max-w-5xl mx-auto aspect-[3/4] sm:aspect-video md:aspect-21/9 bg-white/2 rounded-[2rem] md:rounded-[3.5rem] border border-white/10 overflow-hidden flex items-center justify-center group shadow-2xl">
              {/* Background Grid for Dashboard Look */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

              {/* Animated Processing Waves */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end gap-1 px-10 opacity-20">
                {[...Array(40)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [20, Math.random() * 100 + 40, 20] }}
                    transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.05 }}
                    className="flex-1 bg-linear-to-t from-blue-500 to-purple-600 rounded-t-full"
                  />
                ))}
              </div>

              {/* Central AI Brain/Hub */}
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24 p-8">
                {/* Left Stats */}
                <div className="space-y-4 md:space-y-6">
                  <div className="p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 transition-all cursor-default">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Latency</p>
                    <p className="text-2xl md:text-3xl font-black text-white">42<span className="text-xs text-blue-400 ml-1">ms</span></p>
                  </div>
                  <div className="p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 transition-all cursor-default translate-x-2 md:translate-x-4">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Accuracy</p>
                    <p className="text-2xl md:text-3xl font-black text-white">99.9<span className="text-xs text-purple-400 ml-1">%</span></p>
                  </div>
                </div>

                {/* Central Animated Logo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px] animate-pulse" />
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center animate-spin-slow">
                    <div className="w-full h-full border-t-2 border-blue-500 rounded-full" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                      <Mic className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </div>
                  </div>
                </div>

                {/* Right Info Cards */}
                <div className="space-y-4 md:space-y-6">
                  <div className="p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 transition-all cursor-default -translate-x-2 md:-translate-x-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Active Sync</p>
                    </div>
                    <p className="text-xs md:text-sm font-bold text-white/80">Cross-Platform Ready</p>
                  </div>
                  <div className="p-4 md:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl hover:bg-white/10 transition-all cursor-default">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Languages</p>
                    <p className="text-lg md:text-xl font-black text-white uppercase italic">40+ Supported</p>
                  </div>
                </div>
              </div>

              {/* Corner Decorative Tags */}
              <div className="absolute top-8 left-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="absolute top-8 right-8 text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                System v4.0.2
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer / CTA Section */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative bg-[#080312] border-t border-white/10 pt-48 pb-16 overflow-hidden"
      >
        {/* Animated Background Elements for CTA */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Creative Floating Shapes */}
        <motion.div
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 left-[15%] w-12 h-12 border border-purple-500/20 rounded-xl opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360, x: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-60 right-[15%] w-16 h-16 border border-blue-500/20 rounded-full opacity-20 hidden lg:block"
        />

        <div className="max-w-6xl mx-auto px-6 text-center z-10 relative">

          {/* Animated Voice Sphere Visual */}
          <div className="mb-16 relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-32 h-32 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center relative z-10 border border-white/10 backdrop-blur-3xl"
            >
              <div className="w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-blue-600 flex items-center justify-center shadow-[0_0_40px_rgba(138,92,245,0.4)]">
                <Mic className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            {/* Orbital Rings */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ rotate: i * 120 + 360 }}
                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                style={{ border: `1px dashed rgba(138, 92, 245, ${0.4 / i})` }}
                className={`absolute inset-[-20px] rounded-full scale-[${1 + i * 0.3}]`}
              />
            ))}
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight bg-clip-text text-transparent bg-linear-to-b from-white via-white to-slate-500">
              Stop forgetting. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-white to-blue-400">Start speaking.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-16 opacity-80 uppercase tracking-[0.3em] font-bold">
              Available now for mobile and web.
            </p>
          </motion.div>



          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <button className="group relative px-12 py-6 rounded-2xl font-bold text-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20" />
              <span className="relative flex items-center gap-3 text-white uppercase tracking-tighter">
                <Mic className="w-6 h-6" />
                Get Started Now
              </span>
              <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-[200%] transition-transform duration-1000 rotate-12" />
            </button>
            <div className="mt-8 text-slate-600 flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">10,000+ Active Users Already</span>
            </div>
          </motion.div>

          <div className="mt-40 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10">
                  <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-xl tracking-tight">Remind Voice</span>
              </div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Revolutionizing productivity with voice AI. Built for the thinkers, the doers, and the achievers.</p>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Connect</h4>
              <div className="space-y-4">
                <Link href="https://www.instagram.com/remind_voice?igsh=a3loenpmN2l6ajdt&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-500 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-pink-500 transition-colors"><Instagram className="w-4 h-4" /></div>
                  Instagram
                </Link>
                <Link href="tel:8306923616" className="flex items-center gap-3 text-sm text-slate-500 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500 transition-colors"><Phone className="w-4 h-4" /></div>
                  +91 83069 23616
                </Link>
                <Link href="mailto:vvremindvoice@gmail.com" className="flex items-center gap-3 text-sm text-slate-500 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500 transition-colors"><Mail className="w-4 h-4" /></div>
                  rvremindvoice@gmail.com
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Platform</h4>
              <div className="space-y-4 text-sm text-slate-500 font-medium">
                <Link href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/contact" className="block hover:text-white transition-colors">Contact Hub</Link>
                <Link href="#features" className="block hover:text-white transition-colors">Ecosystem</Link>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Support</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">Need help or have questions? Our team is available for assistance.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl text-sm font-bold transition-all">
                Get Support
              </Link>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 gap-8">
            <p>© 2024 Remind Voice. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              SECURE CLOUD INFRASTRUCTURE
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Global CSS Enhancements */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -5%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, 0%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-10deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        ::selection {
          background-color: #8A5CF5;
          color: white;
        }
      `}} />
    </div>
  );
}
