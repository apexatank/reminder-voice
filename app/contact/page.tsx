'use client';

import React from 'react';
import Link from 'next/link';
import { Mic, Mail, MessageSquare, MapPin, Twitter, Github, Linkedin, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0E061B] text-slate-50 relative font-sans">
      {/* Background Orbs & Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#663CE6]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-2%] left-[-10%] w-[600px] h-[600px] bg-[#8A5CF5]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E061B]/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform shadow-lg shadow-purple-500/10">
              <img src="/logo.jpg" alt="Remind Voice Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-2xl tracking-tight">Remind Voice</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
          </nav>
          
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm font-medium transition-colors">
            Get Started
          </button>
        </div>
      </header>

      <main className="relative z-10 pt-40 pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-6">
              <MessageSquare className="w-3 h-3" />
              Contact Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Let&apos;s <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8A5CF5] to-[#3B82F6]">Connect</span>.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you have a question, feedback, or just want to say hi, our team is here to help you get the most out of your voice reminders.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Email Card */}
            <motion.div variants={item} className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md hover:border-purple-500/50 transition-all hover:bg-white/8">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Email Us</h3>
              <p className="text-slate-400 mb-6 font-medium">Drop us a line anytime for support or inquiries.</p>
              <a href="mailto:support@remindvoice.com" className="text-purple-400 font-bold text-lg hover:text-purple-300 flex items-center gap-2 group/link">
                support@remindvoice.com
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Chat Card */}
            <motion.div variants={item} className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md hover:border-blue-500/50 transition-all hover:bg-white/8">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Live Chat</h3>
              <p className="text-slate-400 mb-6 font-medium">Available Mon-Fri, 9am - 6pm EST for instant help.</p>
              <button className="text-blue-400 font-bold text-lg hover:text-blue-300 flex items-center gap-2 group/link">
                Start Conversation
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Office Card */}
            <motion.div variants={item} className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md hover:border-green-500/50 transition-all hover:bg-white/8">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Office</h3>
              <p className="text-slate-400 mb-6 font-medium">Based in Silicon Valley, but we&apos;re a remote-first team.</p>
              <span className="text-green-400 font-bold text-lg">California, USA</span>
            </motion.div>

            {/* Schedule Card (Full Width on Mobile) */}
            <motion.div variants={item} className="lg:col-span-2 group bg-linear-to-br from-purple-500/10 to-blue-500/10 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md hover:border-white/20 transition-all flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Schedule a Demo</h3>
                <p className="text-slate-400 font-medium max-w-md">Want a deep dive into how Remind Voice can help your team? Let&apos;s hop on a call.</p>
              </div>
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-colors shadow-xl shadow-white/5 flex items-center gap-2 flex-shrink-0">
                Book a Slot
                <Calendar className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Social Connect Card */}
            <motion.div variants={item} className="group bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md hover:border-slate-400/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Social Connect</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Twitter className="w-6 h-6" />, href: "#", color: "hover:bg-blue-400" },
                    { icon: <Linkedin className="w-6 h-6" />, href: "#", color: "hover:bg-blue-700" },
                    { icon: <Github className="w-6 h-6" />, href: "#", color: "hover:bg-slate-700" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center transition-all ${social.color} hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-8 font-medium italic">
                Follow us for the latest updates in voice AI.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#080312] border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2 opacity-60">
              <div className="bg-white/10 p-1.5 rounded-lg">
                <Mic className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm tracking-tight">Remind Voice</span>
            </div>
            
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
            </div>
            
            <p className="text-sm text-slate-600">© 2024 Remind Voice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
