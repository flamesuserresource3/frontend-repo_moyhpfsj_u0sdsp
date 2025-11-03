import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-rose-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium ring-1 ring-emerald-200">
              <CheckCircle2 className="h-4 w-4" /> TRAI & GST-ready • Made for India
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              AI‑powered ISP management suite for modern networks
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Run your broadband business with confidence: automate billing with GST, onboard subscribers with eKYC, monitor network health, and predict outages with built‑in AI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#ai" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-lg shadow-slate-900/10 hover:bg-slate-800">
                Try AI Assistant <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold ring-1 ring-slate-200 hover:bg-slate-50">
                Explore Features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-600">
              <div className="p-3 rounded-lg bg-white ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">GST Billing</p>
                <p>Invoices with HSN & SAC</p>
              </div>
              <div className="p-3 rounded-lg bg-white ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">eKYC</p>
                <p>Aadhaar-ready flows</p>
              </div>
              <div className="p-3 rounded-lg bg-white ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">NOC</p>
                <p>Live network health</p>
              </div>
              <div className="p-3 rounded-lg bg-white ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">AI</p>
                <p>Forecast & insights</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-rose-500/10" />
              <div className="absolute inset-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4 bg-gradient-to-br from-indigo-50 to-white ring-1 ring-indigo-100">
                  <p className="text-xs font-medium text-indigo-700">Subscriber Growth</p>
                  <p className="mt-3 text-3xl font-extrabold text-slate-900">+18%</p>
                  <p className="text-xs text-slate-500">Last 30 days</p>
                </div>
                <div className="rounded-xl p-4 bg-gradient-to-br from-emerald-50 to-white ring-1 ring-emerald-100">
                  <p className="text-xs font-medium text-emerald-700">Active Tickets</p>
                  <p className="mt-3 text-3xl font-extrabold text-slate-900">32</p>
                  <p className="text-xs text-slate-500">Auto triaged</p>
                </div>
                <div className="rounded-xl p-4 bg-gradient-to-br from-amber-50 to-white ring-1 ring-amber-100">
                  <p className="text-xs font-medium text-amber-700">Link Uptime</p>
                  <p className="mt-3 text-3xl font-extrabold text-slate-900">99.94%</p>
                  <p className="text-xs text-slate-500">Across POPs</p>
                </div>
                <div className="rounded-xl p-4 bg-gradient-to-br from-rose-50 to-white ring-1 ring-rose-100">
                  <p className="text-xs font-medium text-rose-700">Revenue (₹)</p>
                  <p className="mt-3 text-3xl font-extrabold text-slate-900">12.6L</p>
                  <p className="text-xs text-slate-500">This month</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-0 inset-0 blur-3xl opacity-60 pointer-events-none" aria-hidden>
              <div className="w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full absolute -top-10 -left-10" />
              <div className="w-[30rem] h-[30rem] bg-rose-500/20 rounded-full absolute bottom-0 -right-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
