import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIAssistant from './components/AIAssistant';

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Talk to us</h2>
          <p className="mt-3 text-slate-600">Ready to modernize your ISP operations? Share your details and we’ll reach out.</p>
        </div>
        <form className="mt-8 grid md:grid-cols-3 gap-4">
          <input className="px-4 py-3 rounded-xl bg-slate-50 ring-1 ring-slate-200 focus:ring-slate-300 outline-none" placeholder="Your name" />
          <input className="px-4 py-3 rounded-xl bg-slate-50 ring-1 ring-slate-200 focus:ring-slate-300 outline-none" placeholder="Work email" />
          <button type="button" className="px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800">Request a demo</button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AIAssistant />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} BharatLink Networks Pvt. Ltd. Made in India 🇮🇳</p>
          <nav className="flex items-center gap-4">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#ai" className="hover:text-slate-900">AI</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
