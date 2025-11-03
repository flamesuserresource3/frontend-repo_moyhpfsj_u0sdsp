import { useState } from 'react';
import { Wifi, Menu, X, Phone, Settings, Shield, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'AI Assistant', href: '#ai' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg">
              <Wifi className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-slate-900">BharatLink</p>
              <p className="text-xs text-slate-500 -mt-0.5">ISP Management Suite</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <span className="hidden lg:flex items-center text-xs text-slate-500 gap-2">
              <Phone className="h-4 w-4" /> 24x7 NOC
            </span>
            <a href="#features" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
              <Rocket className="h-4 w-4" /> Get Started
            </a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium">
                <Settings className="h-4 w-4" /> Dashboard
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-300 text-sm font-medium">
                <Shield className="h-4 w-4" /> Secure
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
