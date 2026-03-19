'use client';

import React from 'react';
import Link from 'next/link';
import { Mic, FileText, CheckCircle, HelpCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0E061B] text-slate-50 relative font-sans">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#663CE6]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-2%] right-0 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none" />

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
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-6">
              <FileText className="w-3 h-3" />
              Usage Terms
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-slate-400 text-lg">
              Effective as of March 19, 2024. By using Remind Voice, you agree to these terms.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-12"
          >
            <section className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 text-white">Acceptance</h2>
                </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                By accessing and using Remind Voice, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <p className="text-slate-400">
                You must be at least 13 years old to use our service. If you are under 18, you must have parental or legal guardian consent.
              </p>
            </section>

            <section className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold m-0 text-white">Prohibited Uses</h2>
                </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                You agree not to use Remind Voice for any of the following:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-3">
                <li>Harassing or threatening behavior towards others.</li>
                <li>Transcribing or recording content you do not have permission for.</li>
                <li>Attempting to reverse engineer or disrupt the service.</li>
                <li>Spamming or automating excessive requests to our servers.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Disclaimer of Liability</h2>
              <p className="text-slate-300 leading-relaxed">
                Remind Voice provides the service "as is" and "as available". We do not warrant that the service will be uninterrupted or error-free. We are not liable for any lost reminders or missed deadlines.
              </p>
              
              <h2 className="text-2xl font-bold text-white">Changes to Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify you of any material changes via the application interface or your registered email.
              </p>
            </section>

            <section className="pt-10 border-t border-white/10 text-center">
              <p className="text-slate-500 text-sm mb-6">
                Need more information?
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-colors">
                Contact Support
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
