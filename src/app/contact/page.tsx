'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl shadow-rose-900/5 overflow-hidden grid md:grid-cols-2 min-h-[600px]">
        
        {/* Left: Contact Info */}
        <div className="p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-rose-100/50 to-cream">
          <div>
            <span className="text-xs font-bold tracking-widest text-espresso/40 uppercase mb-2 block">Inquiries</span>
            <h1 className="text-4xl font-serif text-espresso mb-4">Let's create something sweet.</h1>
            <p className="text-espresso/60 font-sans">
              We are currently accepting wedding and event commissions for the upcoming season.
            </p>
          </div>

          <div className="space-y-4 font-sans">
            <div>
              <p className="text-xs uppercase font-bold text-espresso/40">Studio</p>
              <p className="text-lg">123 Baker Street, Metro City</p>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-espresso/40">Email</p>
              <a href="mailto:hello@dolcelucille.com" className="text-lg border-b border-rose-300 hover:text-rose-500 transition-colors">
                hello@dolcelucille.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-espresso/40">Socials</p>
              <p className="text-lg">@dolcelucille</p>
            </div>
          </div>
        </div>

        {/* Right: Abstract Form Visual */}
        <div className="relative bg-espresso text-cream p-12 flex flex-col justify-center">
          {/* Decorative Circles */}
          <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-rose-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-lemon-400 rounded-full blur-3xl opacity-20"></div>

          <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Your Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-rose-400 transition-colors" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Event Date</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-rose-400 transition-colors" placeholder="MM/DD/YYYY" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Vision</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl p-4 h-32 resize-none focus:outline-none focus:border-rose-400 transition-colors" placeholder="Tell us about your dream cake..." />
            </div>
            <button className="w-full bg-cream text-espresso font-bold py-4 rounded-xl hover:bg-rose-200 transition-colors">
              Send Inquiry
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}