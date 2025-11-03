import { useMemo, useRef, useState, useEffect } from 'react';
import { Bot, Send, User } from 'lucide-react';

function botReply(text) {
  const t = text.toLowerCase();
  if (t.includes('plan') || t.includes('pricing')) {
    return 'Here are popular plans: Bronze 50Mbps ₹499, Silver 100Mbps ₹699, Gold 300Mbps ₹999 (all prices excl. GST). I can help you create or modify plans based on ARPU targets.';
  }
  if (t.includes('gst')) {
    return 'GST billing is enabled by default. Invoices include HSN/SAC codes, place of supply, and reverse-charge fields. You can export GSTR‑1 summaries anytime.';
  }
  if (t.includes('ekyc') || t.includes('aadhaar')) {
    return 'For eKYC, you can enable Aadhaar‑based verification or upload CAF documents. I can guide field agents with a step‑by‑step flow on mobile.';
  }
  if (t.includes('outage') || t.includes('down')) {
    return 'I am checking live telemetry. Based on historical patterns, the most likely cause is a fiber break between POP-3 and OLT-7. Recommend rerouting traffic via POP-2 while the field team investigates.';
  }
  if (t.includes('churn') || t.includes('retention')) {
    return 'Predicted churn this month: 2.3%. Offer a 10% cashback to users with >3 tickets and <20GB monthly usage to improve retention.';
  }
  return 'I can help with plans, GST billing, network health, field ops, and customer support. Ask me anything in plain English or Hindi!';
}

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Namaste! I am your AI NOC & Operations copilot. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { role: 'user', content: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      const reply = botReply(trimmed);
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    }, 500);
  };

  return (
    <section id="ai" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">AI Assistant</h2>
          <p className="mt-3 text-slate-600">Chat with a copilot trained for Indian ISP workflows. This demo simulates responses on the client — connect to your backend later for production.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden flex flex-col h-[480px]">
            <div className="px-4 py-3 border-b border-slate-200 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-slate-900 text-white flex items-center justify-center"><Bot className="h-4 w-4" /></div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Operations Copilot</p>
                <p className="text-xs text-slate-500">Fast, contextual, and secure</p>
              </div>
            </div>
            <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`${m.role === 'assistant' ? 'bg-white ring-1 ring-slate-200' : 'bg-slate-900 text-white'} max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="p-3 border-t border-slate-200 flex items-center gap-2">
              <input
                className="flex-1 px-4 py-2 rounded-xl bg-slate-100 focus:bg-white ring-1 ring-transparent focus:ring-slate-300 outline-none text-sm"
                placeholder="Ask e.g. ‘Predict outages in South Delhi’"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
                <Send className="h-4 w-4" /> Send
              </button>
            </form>
          </div>

          <div className="grid gap-4 content-start">
            <div className="p-5 rounded-2xl bg-white ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">What can it do?</p>
              <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
                <li>Generate GST‑ready invoices and summaries</li>
                <li>Predict churn and recommend retention offers</li>
                <li>Spot bandwidth anomalies across POPs</li>
                <li>Auto‑categorize tickets and suggest replies</li>
                <li>Guide field agents with eKYC/CAF checklists</li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl bg-white ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Privacy</p>
              <p className="mt-1 text-sm text-slate-600">Your data stays within your cloud. Role‑based access control and audit logs ensure compliance with Indian regulations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
