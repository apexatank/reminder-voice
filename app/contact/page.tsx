'use client';

import React from 'react';
import Link from 'next/link';
import { Mic, Mail, MessageSquare, MapPin, Instagram, Phone, Github, Linkedin, ArrowRight, Clock, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-[#080312] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden border border-white/10 group-hover:scale-110 transition-transform">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-base sm:text-2xl tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">Remind Voice</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </nav>

          <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 sm:px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
            Get Started
          </button>
        </div>
      </header>

      <main className="relative z-10 pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <MessageSquare className="w-3 h-3" />
              Contact Hub
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none sm:leading-tight">
              Let&apos;s build <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-white to-blue-400">something audible.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
              Whether you have a technical query or just want to discuss the future of voice AI, our team in India is ready to sync.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-6 gap-6"
          >
            {/* Main Contact Card (Large) */}
            <motion.div variants={item} className="md:col-span-4 bg-white/[0.03] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-purple-500/20 transition-all duration-700" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-bold mb-6 md:mb-8">Get in Touch</h2>
                  <div className="space-y-6 md:space-y-8">
                    <Link href="mailto:rvremindvoice@gmail.com" className="flex items-center gap-4 sm:gap-6 group/link">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover/link:bg-purple-500 transition-all duration-500">
                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover/link:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Email Address</p>
                        <p className="text-sm sm:text-xl font-bold truncate">rvremindvoice@gmail.com</p>
                      </div>
                    </Link>
                    <Link href="tel:8306923616" className="flex items-center gap-4 sm:gap-6 group/link">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover/link:bg-blue-500 transition-all duration-500">
                        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover/link:text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Phone Number</p>
                        <p className="text-sm sm:text-xl font-bold">+91 83069 23616</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-green-500">Live Support Active</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-slate-500">Average response: <span>&lt; 2 hours</span></p>
                </div>
              </div>
            </motion.div>

            {/* Location Card (Side) */}
            <motion.div variants={item} className="md:col-span-2 bg-linear-to-br from-green-500/10 to-transparent border border-white/10 rounded-[3rem] p-10 backdrop-blur-3xl flex flex-col justify-between group">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Location</h3>
                <p className="text-lg font-bold text-white mb-2">Surat, Gujarat</p>
                <p className="text-sm text-slate-400 font-medium">Headquartered in India, serving the world.</p>
              </div>
              <div className="mt-10 p-[1px] rounded-2xl bg-linear-to-r from-green-500/30 to-transparent">
                <div className="bg-[#080312]/80 p-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-green-500/80">
                  GMT +5:30 (IST)
                </div>
              </div>
            </motion.div>

            {/* Social Connect (Wide) */}
            <motion.div variants={item} className="md:col-span-3 bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 backdrop-blur-3xl group">
              <h3 className="text-2xl font-bold mb-8 italic">Social Network</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/remind_voice?igsh=a3loenpmN2l6ajdt&utm_source=qr", label: "Instagram", bg: "group-hover:bg-pink-500" },
                  { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn", bg: "group-hover:bg-blue-600" },
                  { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub", bg: "group-hover:bg-slate-700" }
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-all group/btn"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors ${social.bg} group-hover/btn:text-white`}>
                      {social.icon}
                    </div>
                    <span className="text-sm font-bold">{social.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div variants={item} className="md:col-span-3 bg-linear-to-br from-orange-500/10 to-transparent border border-white/10 rounded-[3rem] p-10 backdrop-blur-3xl group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-slate-400 text-sm font-medium">Monday - Saturday</span>
                  <span className="font-bold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400 text-sm font-medium">Sunday</span>
                  <span className="text-slate-600 italic font-bold">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3">
            <Mic className="w-5 h-5 text-purple-400" />
            <span className="font-black uppercase tracking-tighter text-sm">Remind Voice AI</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em]">© 2024 Design by Modern AI Hub</p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
