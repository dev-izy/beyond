import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Cpu, 
  Video, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  ChevronRight,
  Menu,
  X,
  Terminal
} from 'lucide-react';

// Import your custom logo asset here
import beyondLogo from './assets/beyond-logo.png';

// Typing Animation Component
const TypewriterText = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span className="font-mono tracking-tight">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 ml-1 bg-indigo-400 align-middle"
      />
    </span>
  );
};

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorHovered, setCursorHovered] = useState(false);

  const talentPayoutRate = 0.75;
  const activeDept = DEPARTMENTS.find((d) => d.id === activeTab) || DEPARTMENTS[0];

  // Custom Cursor Tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = () => setCursorHovered(true);
  const handleMouseLeave = () => setCursorHovered(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white cursor-none relative overflow-x-hidden">
      
      {/* Custom Glowing Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-indigo-500/80 pointer-events-none z-50 mix-blend-screen shadow-[0_0_20px_rgba(99,102,241,0.8)]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: cursorHovered ? 2.2 : 1,
          backgroundColor: cursorHovered ? 'rgba(168, 85, 247, 0.9)' : 'rgba(99, 102, 241, 0.8)'
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.1 }}
      />

      {/* Animated Background Grids & Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <motion.div 
          animate={{ 
            x: [0, 80, -50, 0], 
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -90, 60, 0], 
            y: [0, 80, -60, 0],
            scale: [1, 1.1, 0.85, 1] 
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px]"
        />
      </div>

      {/* Navigation Bar (Fixed) */}
      <nav className="fixed top-0 left-0 right-0 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Replacement */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img 
              src={beyondLogo} 
              alt="BEYOND Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-slate-400">
            <a href="#how-it-works" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-indigo-400 transition-colors">// How It Works</a>
            <a href="#departments" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-indigo-400 transition-colors">// Departments</a>
            <a href="#calculator" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-indigo-400 transition-colors">// Earnings</a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              className="text-xs font-mono text-slate-300 hover:text-white px-4 py-2 border border-transparent hover:border-slate-800 rounded-lg transition-all"
            >
              [ Sign In ]
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(99,102,241,0.4)" }} 
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono uppercase tracking-wider px-5 py-2.5 rounded-xl border border-indigo-400/30 transition-all"
            >
              Submit Project
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            className="md:hidden p-2 text-slate-300 hover:text-white border border-slate-800 rounded-lg bg-slate-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-6 py-6 space-y-4"
            >
              <div className="flex flex-col space-y-3 font-mono text-xs uppercase text-slate-300 border-b border-slate-800/80 pb-4">
                <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">// How It Works</a>
                <a href="#departments" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">// Departments</a>
                <a href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-indigo-400 py-1">// Earnings</a>
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <button className="w-full text-xs font-mono text-slate-300 border border-slate-800 py-3 rounded-xl bg-slate-900">
                  [ Sign In ]
                </button>
                <button className="w-full text-xs font-mono uppercase bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-indigo-600/30">
                  Submit Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-8"
          >
            <Terminal className="w-4 h-4" />
            <TypewriterText text="system.init('empower_nextgen_talent');" delay={40} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight"
          >
            Turn Your Passion into <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Real Paychecks.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-mono"
          >
            BEYOND bridges client projects directly to specialized youth departments—giving emerging creators, developers, and hardware builders real experience and transparent revenue share.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-mono uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 border border-indigo-400/30 transition-all"
            >
              Hire BEYOND Talent <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
              className="w-full sm:w-auto border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 text-xs font-mono uppercase tracking-wider px-8 py-4 rounded-xl transition-all"
            >
              Apply as Creator
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-slate-800/60 bg-slate-950/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">How BEYOND Operates</h2>
            <p className="text-xs sm:text-sm font-mono text-slate-400">// Transparent, project-driven execution for teams</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Client Brief', text: 'Clients submit project details and budget. We evaluate scope and match specs.' },
              { step: '02', title: 'Department Route', text: 'Jobs stream directly into specialized teams (Graphics, Web Dev, IoT).' },
              { step: '03', title: 'Payout & Delivery', text: 'Once approved, creator teams receive an immediate revenue share.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl relative group hover:border-indigo-500/50 transition-all"
              >
                <div className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full w-fit mb-6">
                  STEP_{item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Departments */}
      <section id="departments" className="py-20 border-t border-slate-800/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">Specialized Departments</h2>
            <p className="text-xs sm:text-sm font-mono text-slate-400">// Modular units built around student skillsets</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Tabs */}
            <div className="lg:col-span-4 space-y-3">
              {DEPARTMENTS.map((dept) => {
                const Icon = dept.icon;
                const isActive = activeTab === dept.id;
                return (
                  <motion.button
                    key={dept.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(dept.id)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10'
                        : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/40 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-mono text-xs uppercase tracking-wider ${isActive ? 'text-white font-bold' : 'text-slate-300'}`}>
                        {dept.name}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90 text-indigo-400' : 'text-slate-600'}`} />
                  </motion.button>
                );
              })}
            </div>

            {/* Content Panel */}
            <div className="lg:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 relative min-h-[360px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDept.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                      DEPT_ID: #{activeDept.id.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      SHARE: {activeDept.payout}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{activeDept.name}</h3>
                  <p className="text-slate-300 text-sm mb-8 leading-relaxed font-mono">{activeDept.description}</p>

                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">// Deliverables</h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {activeDept.deliverables.map((item, idx) => (
                      <div key={idx} className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Users className="w-4 h-4 text-indigo-400" /> Active Creators Ready
                </div>
                <button 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                  className="text-xs font-mono uppercase text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                >
                  Assign Project &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 border-t border-slate-800/60 bg-slate-950/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900/80 border border-slate-800 p-8 sm:p-10 rounded-3xl relative">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Earnings Simulator</h2>
              <p className="text-xs font-mono text-slate-400">// Estimate revenue split based on job value</p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3 font-mono text-xs">
                  <label className="uppercase text-slate-400">Project Value ($)</label>
                  <span className="text-xl font-bold text-indigo-400">${projectBudget.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(Number(e.target.value))}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl">
                  <div className="text-xs font-mono text-slate-400 mb-1">// Creator Team Share (75%)</div>
                  <div className="text-2xl font-bold text-emerald-400">${(projectBudget * talentPayoutRate).toLocaleString()}</div>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl">
                  <div className="text-xs font-mono text-slate-400 mb-1">// BEYOND Ops & Admin (25%)</div>
                  <div className="text-2xl font-bold text-slate-300">${(projectBudget * (1 - talentPayoutRate)).toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950 text-slate-500 text-xs text-center font-mono relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} BEYOND_SYSTEMS. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-slate-300 transition-colors">Terms</a>
            <a href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}