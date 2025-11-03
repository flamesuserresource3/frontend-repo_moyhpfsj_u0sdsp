import { Wifi, Shield, Cpu, Globe2, Ticket, Gauge, FileSpreadsheet, Bot } from 'lucide-react';

const features = [
  {
    title: 'Subscriber Management',
    desc: 'Onboard with eKYC, CAF, and plan provisioning. Support PPPOE, DHCP, and static assignments.',
    icon: Wifi,
    tone: 'from-blue-50 ring-blue-100 text-blue-700',
  },
  {
    title: 'Billing & GST',
    desc: 'GST-compliant invoicing with HSN/SAC, automatic proration, payment gateways, and reminders.',
    icon: FileSpreadsheet,
    tone: 'from-emerald-50 ring-emerald-100 text-emerald-700',
  },
  {
    title: 'AI NOC & Forecasting',
    desc: 'Detect anomalies, predict outages, and auto-triage tickets with built‑in machine intelligence.',
    icon: Cpu,
    tone: 'from-indigo-50 ring-indigo-100 text-indigo-700',
  },
  {
    title: 'Security & Compliance',
    desc: 'TRAI-compliant logging, lawful interception readiness, and device inventory hygiene.',
    icon: Shield,
    tone: 'from-rose-50 ring-rose-100 text-rose-700',
  },
  {
    title: 'Maps & Field Ops',
    desc: 'Fiber routes, POPs, and OLTs on interactive maps. Smart routing for installs and repairs.',
    icon: Globe2,
    tone: 'from-amber-50 ring-amber-100 text-amber-700',
  },
  {
    title: 'Support Desk',
    desc: 'WhatsApp and phone integrations, SLAs, macros, and CSAT. Deflect repetitive queries with AI.',
    icon: Ticket,
    tone: 'from-purple-50 ring-purple-100 text-purple-700',
  },
  {
    title: 'Performance Dashboards',
    desc: 'Real-time KPIs: uptime, churn, ARPU, and bandwidth heatmaps across regions and POPs.',
    icon: Gauge,
    tone: 'from-cyan-50 ring-cyan-100 text-cyan-700',
  },
  {
    title: 'AI Copilot',
    desc: 'Natural language commands to create plans, segment users, and draft communication instantly.',
    icon: Bot,
    tone: 'from-slate-50 ring-slate-200 text-slate-700',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Built for Indian ISPs</h2>
          <p className="mt-3 text-slate-600">Operate at scale with workflows tuned for last‑mile realities: multi‑lingual CX, prepaid and postpaid, GST, and regional compliance.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map(({ title, desc, icon: Icon, tone }) => (
            <div key={title} className={`group relative rounded-2xl bg-gradient-to-br ${tone} ring-1 p-6 transition-shadow hover:shadow-lg`}> 
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/80 backdrop-blur flex items-center justify-center ring-1 ring-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
