'use client';

import React from 'react';
import Link from 'next/link';
import { Mic, ShieldCheck, Lock, Eye, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0E061B] text-slate-50 relative font-sans">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[600px] bg-[#663CE6]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-0 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E061B]/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform shadow-lg shadow-purple-500/10">
              <img src="/logo.jpg" alt="Remind Voice Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-2xl tracking-tight">Remind Voice</span>
          </Link>
          
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <ShieldCheck className="w-3 h-3" />
              Privacy Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-slate-400 text-lg">
              Last updated: March 19, 2024. Your privacy is our top priority. Learn how we handle your data with transparency and care.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-invert max-w-none space-y-12"
          >
            <section className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                        <Lock className="w-5 h-5 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 text-white">Data Collection</h2>
                </div>
              <p className="text-slate-300 leading-relaxed">
                At Remind Voice, we collect minimal data to provide you with the best experience. When you use our voice reminder service, we process your voice input locally on your device whenever possible. 
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-3 mt-4">
                <li>Voice recordings are only used for immediate transcription.</li>
                <li>We do not store your raw audio on our servers indefinitely.</li>
                <li>Contact information (email) is only stored if you choose to sync your account.</li>
              </ul>
            </section>

            <section className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <Eye className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 text-white">How We Use Data</h2>
                </div>
              <p className="text-slate-300 leading-relaxed">
                Your data is used solely for the purpose of creating and managing your reminders. We utilize AI processing to understand the context, time, and date from your voice commands.
              </p>
              <p className="text-slate-400 mt-4 italic border-l-2 border-purple-500 pl-4">
                "We never sell your data to third parties. Your reminders are yours alone."
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Security</h2>
              <p className="text-slate-300 leading-relaxed">
                We implement industry-standard security measures to protect your data. All communication between your device and our servers is encrypted using SSL/TLS protocols.
              </p>
              
              <h2 className="text-2xl font-bold text-white">Cookies</h2>
              <p className="text-slate-300 leading-relaxed">
                We use essential cookies to keep you logged in and remember your preferences. You can manage cookie settings in your browser at any time.
              </p>
            </section>

            <section className="pt-10 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Privacy Team</h2>
              <p className="text-slate-300 mb-6">
                If you have any questions regarding this policy or your data rights, please contact our privacy officer at:
              </p>
              <a href="mailto:privacy@remindvoice.com" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                privacy@remindvoice.com
              </a>
            </section>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#080312] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500">
          <p>© 2024 Remind Voice. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
