import { motion } from 'motion/react';
import { Phone, ArrowRight, Laptop, Award, Code, BookOpen, Users, Star } from 'lucide-react';
import Logo from './Logo';
const directorPhoto = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop';

interface HeroProps {
  onExploreCourses: () => void;
}

export default function Hero({ onExploreCourses }: HeroProps) {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello दaksh Computers, I would like to know more about your computer courses.");
    window.open(`https://wa.me/919827241646?text=${text}`, '_blank');
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 pt-24 pb-16">
      
      {/* 1. Animated premium background gradient circle layout */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan-100/30 rounded-full filter blur-[150px] animate-pulse-slow" />
        
        {/* Glowing floating orbs (Page 17 Hero background) */}
        <div className="absolute top-[20%] right-[15%] w-16 h-16 bg-blue-400/10 rounded-full filter blur-md animate-float" />
        <div className="absolute bottom-[25%] left-[10%] w-20 h-20 bg-cyan-400/10 rounded-full filter blur-md animate-float-delayed" />
        
        {/* Subtle geometric pattern grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left (7 Columns on large desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Tagline/Header Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100/50"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span className="font-sans font-bold text-xs sm:text-sm text-primary-blue tracking-wide uppercase">
                We Trust in Quality Education
              </span>
            </motion.div>

            {/* Main Heading (Page 17) */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-950 dark:text-white dark:text-white tracking-tight leading-[1.1]"
              >
                दaksh Computers
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-sans font-bold text-lg sm:text-2xl text-secondary-blue tracking-tight leading-relaxed"
              >
                Empowering Lives Through Practical Training
              </motion.p>
            </div>

            {/* Subtitle (Page 17) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-inter text-sm sm:text-base text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Learn practical computer skills from experienced professionals in a modern learning environment. दaksh Computers provides industry-oriented computer education through practical training, experienced guidance, and career-focused courses.
            </motion.p>

            {/* Hero Buttons (Page 17) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary-blue hover:bg-blue-700 text-white font-sans font-bold text-sm px-7 py-4 rounded-xl shadow-lg shadow-blue-500/10 cursor-pointer transform hover:scale-[1.02] transition-all"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={openWhatsApp}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 hover:border-emerald-300 font-sans font-bold text-sm px-7 py-4 rounded-xl transition-all cursor-pointer transform hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Contact on WhatsApp</span>
              </button>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-6 sm:pt-10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 font-inter text-slate-500 text-xs sm:text-sm border-t border-slate-100"
            >
              <div>
                <span className="block font-sans font-extrabold text-slate-900 dark:text-white dark:text-white text-xl sm:text-2xl">8000+</span>
                <span className="text-slate-400 mt-1 block">Students Trained</span>
              </div>
              <div>
                <span className="block font-sans font-extrabold text-slate-900 dark:text-white dark:text-white text-xl sm:text-2xl flex items-center justify-center lg:justify-start gap-1">
                  ⭐ 4.9
                </span>
                <span className="text-slate-400 mt-1 block">Google Rating</span>
              </div>
              <div>
                <span className="block font-sans font-extrabold text-slate-900 dark:text-white dark:text-white text-xl sm:text-2xl">209+</span>
                <span className="text-slate-400 mt-1 block">Google Reviews</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Premium Interactive Graphic (5 Columns) */}
          {/* Purely built with SVG, CSS floating, and modern glassmorphic cards (no stock photos or AI slop as required) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pointer-events-none select-none">
            
            {/* Centered glowing background halo */}
            <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl animate-pulse" />

            {/* High fidelity SVG visual mockups */}
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              
              {/* Card 1: Interactive Programming code block */}
              <div className="absolute top-2 left-[-10px] w-60 p-4 rounded-2xl glassmorphism border border-white/60 shadow-lg shadow-blue-500/5 animate-float">
                <div className="flex items-center space-x-1.5 mb-2 border-b border-blue-50 pb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[9px] font-mono font-medium text-slate-400 pl-2">learning_c.cpp</span>
                </div>
                <div className="font-mono text-[9px] leading-relaxed text-blue-800 space-y-1">
                  <p><span className="text-purple-600">#include</span> <span className="text-emerald-600">&lt;iostream&gt;</span></p>
                  <p><span className="text-purple-600">int</span> <span className="text-blue-600">main</span>() &#123;</p>
                  <p className="pl-3 text-slate-500">// We Trust in Quality Education</p>
                  <p className="pl-3"><span className="text-blue-600">std</span>::cout &lt;&lt; <span className="text-emerald-600">"दaksh Computers"</span>;</p>
                  <p className="pl-3"><span className="text-purple-600">return</span> <span className="text-amber-600">0</span>;</p>
                  <p>&#125;</p>
                </div>
              </div>

              {/* Card 2: Interactive metrics tracker */}
              <div className="absolute bottom-6 right-[-15px] w-56 p-4 rounded-2xl glassmorphism border border-white/60 shadow-lg shadow-blue-500/5 animate-float-delayed">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-100 flex items-center justify-center text-cyan-600">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-sans font-bold text-[11px] text-slate-800 dark:text-slate-100 dark:text-slate-100">C++ & Python</span>
                      <span className="block text-[8px] text-slate-400">10+ Tech Courses</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold font-inter bg-emerald-50 px-2 py-0.5 rounded-md">Live</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-left">
                  <div>
                    <span className="text-[8px] text-slate-400 block uppercase font-semibold font-inter">Lab Focus</span>
                    <span className="text-[11px] text-slate-800 dark:text-slate-100 dark:text-slate-100 font-extrabold font-sans">100% Daily</span>
                  </div>
                  <div className="flex items-center space-x-1.5 pl-2 border-l border-slate-100">
                    <img
                      src={directorPhoto}
                      alt="Prof. Manish Saxena, Director of दaksh Computers"
                      className="w-6 h-6 rounded-full object-cover border border-blue-200 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[8px] text-slate-400 block uppercase font-semibold font-inter leading-none">Director</span>
                      <span className="text-[10px] text-slate-800 dark:text-slate-100 dark:text-slate-100 font-extrabold font-sans leading-none block mt-0.5">Prof. Manish</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Floating small indicators */}
              <div className="absolute top-2 right-[20px] w-12 h-12 rounded-xl glassmorphism border border-white/80 shadow-md flex items-center justify-center animate-float">
                <Laptop className="w-5 h-5 text-primary-blue" />
              </div>

              <div className="absolute bottom-8 left-[10px] w-12 h-12 rounded-xl glassmorphism border border-white/80 shadow-md flex items-center justify-center animate-float-delayed">
                <Award className="w-5 h-5 text-cyan-600" />
              </div>

              {/* Central Premium Glassmorphic Logo Card */}
              <div className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-white dark:bg-slate-950/70 backdrop-blur-md border border-white/90 shadow-2xl flex items-center justify-center animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(60,225,176,0.35)]">
                <Logo size={154} emblemOnly={false} animate={true} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
