import React, { useState } from 'react';
import { 
  Palette, 
  Code, 
  Cpu, 
  Video, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import beyond from './assets/beyond-logo.png';

// Department Data
const DEPARTMENTS = [
  {
    id: 'graphics',
    name: 'Graphics & Brand Strategy',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    description: 'Visual identity, UI/UX design, marketing assets, and brand storytelling.',
    deliverables: ['Brand Guidelines', 'UI/UX Prototypes', 'Social Media Kits'],
    payout: '70% - 80%'
  },
  {
    id: 'webdev',
    name: 'Web & App Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    description: 'Custom web platforms, mobile applications, and scalable backend infrastructure.',
    deliverables: ['React/Next.js Apps', 'E-commerce Platforms', 'API Integrations'],
    payout: '75% - 85%'
  },
  {
    id: 'automation',
    name: 'Smart Home & Automation',
    icon: Cpu,
    color: 'from-amber-500 to-orange-500',
    description: 'IoT installations, home automation setups, and custom hardware integrations.',
    deliverables: ['IoT Dashboards', 'Smart Setup Plans', 'Custom Hardware Code'],
    payout: '70% - 80%'
  },
  {
    id: 'media',
    name: 'Media & Content Creation',
    icon: Video,
    color: 'from-purple-500 to-indigo-500',
    description: 'Video production, high-converting copywriting, motion graphics, and audio editing.',
    deliverables: ['Promo Videos', 'Ad Copywriting', 'Motion Graphics'],
    payout: '70% - 80%'
  }
];

export default function BeyondDemoSite() {
  const [activeTab, setActiveTab] = useState('graphics');
  const [projectBudget, setProjectBudget] = useState(1000);
  const talentPayoutRate = 0.75; // Average 75% payout to young talents

  const activeDept = DEPARTMENTS.find((d) => d.id === activeTab) || DEPARTMENTS[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={beyond} alt="BEYOND Logo" className="w-50 h-20" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#departments" className="hover:text-white transition-colors">Departments</a>
            <a href="#calculator" className="hover:text-white transition-colors">Earnings</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2">
              Sign In
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]">
              Submit Project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-8">
            <Sparkles className="w-4 h-4" /> Empowering Next-Gen Talent
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-none">
            Turn Your Passion into <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">Real Paychecks.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            BEYOND bridges client projects directly to specialized youth departments—giving emerging creators, developers, and builders real experience and fair revenue share.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
              Hire BEYOND Talent <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 text-slate-300 font-semibold px-8 py-4 rounded-xl transition-all">
              Apply as a Creator
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-slate-800/60 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How BEYOND Operates</h2>
            <p className="text-slate-400">A structured workflow designed to give clients high quality while guaranteeing creators their direct cut.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl relative">
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Client Requests</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clients submit project details and budget. We evaluate requirements and match scope to the correct team.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl relative">
              <div className="w-12 h-12 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Department Routing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Jobs are immediately passed to specialized departments (Web Dev, Graphics, Automation) led by young talent.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl relative">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Delivery & Cut</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Once delivered and approved, the department receives a transparent percentage cut of the project fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section id="departments" className="py-20 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Specialized Departments</h2>
            <p className="text-slate-400">Discover where your skills fit or which team can fulfill your project.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Department Navigation Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {DEPARTMENTS.map((dept) => {
                const Icon = dept.icon;
                const isActive = activeTab === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setActiveTab(dept.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                        : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/40 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg bg-slate-800 text-white ${isActive ? 'bg-indigo-600' : ''}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {dept.name}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-indigo-400' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Department Details */}
            <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-8 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                    Department Focus
                  </span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    Payout Share: {activeDept.payout}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{activeDept.name}</h3>
                <p className="text-slate-300 text-base mb-8 leading-relaxed">{activeDept.description}</p>

                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Typical Deliverables</h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {activeDept.deliverables.map((item, idx) => (
                    <div key={idx} className="bg-slate-950/60 border border-slate-800/80 p-3 rounded-lg flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Users className="w-4 h-4 text-indigo-400" /> Active Student Teams Assigned
                </div>
                <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
                  Submit a job to this team <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Earning Simulator */}
      <section id="calculator" className="py-20 border-t border-slate-800/60 bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Talent Earnings Calculator</h2>
              <p className="text-slate-400 text-sm">See how much a youth creator earns from a client project budget.</p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Project Value ($)</label>
                  <span className="text-2xl font-black text-indigo-400">${projectBudget.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-xl">
                  <div className="text-xs font-medium text-slate-400 mb-1">Creator Team Share (75%)</div>
                  <div className="text-2xl font-bold text-emerald-400">${(projectBudget * talentPayoutRate).toLocaleString()}</div>
                </div>
                <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-xl">
                  <div className="text-xs font-medium text-slate-400 mb-1">BEYOND Ops & Admin (25%)</div>
                  <div className="text-2xl font-bold text-slate-300">${(projectBudget * (1 - talentPayoutRate)).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950 text-slate-500 text-xs text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} BEYOND. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}