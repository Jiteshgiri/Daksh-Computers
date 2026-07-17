import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Search, 
  X, 
  Play, 
  Pause, 
  Expand,
  ChevronRight,
  ExternalLink,
  Award,
  BookOpen,
  CheckCircle,
  Users,
  Grid,
  Camera,
  Music,
  Coffee,
  Compass,
  Smile,
  Video
} from 'lucide-react';

// Import custom types and authentic dataset
import { Course, Review } from './types';
import { coursesData, reviewsData, facilitiesData } from './data';

// Import modular components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import CourseModal from './components/CourseModal';
import ReviewCard from './components/ReviewCard';
import Certificates from './components/Certificates';
import ContactSection from './components/ContactSection';
import AboutPreview from './components/AboutPreview';
import WhyChooseUs from './components/WhyChooseUs';
import Logo from './components/Logo';
import Gallery from './components/Gallery';
const directorPhoto = 'https://res.cloudinary.com/mpwyauoh/image/upload/v1784221249/1784221183683_ovrea3.png';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  // Search state for courses page
  const [courseSearch, setCourseSearch] = useState('');
  

  // Stats Counters state
  const [stats, setStats] = useState({ students: 0, reviews: 0, courses: 0 });

  // Floating WhatsApp pre-filled text
  const messageText = encodeURIComponent("Hello दaksh Computers, I would like to know more about your computer courses.");
  const floatWhatsAppUrl = `https://wa.me/919827241646?text=${messageText}`;

  // 1. Initial brand loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // 2. Stats Ticker Animation
  useEffect(() => {
    if (isLoading) return;
    
    // Smooth counter intervals
    const duration = 1200; // ms
    const startTime = performance.now();

    const animateStats = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out function
      const easeOutQuad = (x: number) => x * (2 - x);
      const easedProgress = easeOutQuad(progress);

      setStats({
        students: Math.floor(easedProgress * 8000),
        reviews: Math.floor(easedProgress * 209),
        courses: Math.floor(easedProgress * 14)
      });

      if (progress < 1) {
        requestAnimationFrame(animateStats);
      } else {
        setStats({ students: 8000, reviews: 209, courses: 14 });
      }
    };

    requestAnimationFrame(animateStats);
  }, [isLoading, currentView]);

  const handleOpenDetails = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleCloseDetails = () => {
    setSelectedCourse(null);
  };

  const handleExploreCourses = () => {
    setCurrentView('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello दaksh Computers, I would like to know more about your computer courses. Please share details.");
    window.open(`https://wa.me/919827241646?text=${text}`, '_blank');
  };

  // Filtered courses
  const filteredCourses = coursesData.filter(course => 
    course.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
    course.topics.some(topic => topic.toLowerCase().includes(courseSearch.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white text-text-primary dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-100 selection:text-primary-blue transition-colors duration-300">
      
      {/* BRAND LOADING SCREEN (Page 49) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white"
          >
            {/* Ambient Radial background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,179,215,0.12)_0%,transparent_60%)] pointer-events-none" />
            
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center space-y-8 relative z-10"
            >
              {/* Premium Logo Display with subtle rotate-in and soft blue-green glow */}
              <motion.div
                initial={{ rotate: -15, scale: 0.85 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="w-36 h-36 mx-auto drop-shadow-[0_0_20px_rgba(60,225,176,0.35)]"
              >
                <Logo size={144} emblemOnly={false} animate={true} />
              </motion.div>

              <div className="space-y-2">
                <h1 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                  दaksh Computers
                </h1>
                <p className="font-inter font-semibold text-[10px] sm:text-xs text-blue-200 tracking-widest uppercase opacity-90">
                  We Trust in Quality Education
                </p>
              </div>
              
              {/* Premium Elegant Loading Spinner */}
              <div className="relative w-12 h-12 mx-auto mt-4">
                <div className="absolute inset-0 border-4 border-white/5 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-transparent border-r-transparent border-l-cyan-400 border-b-emerald-400 rounded-full animate-spin" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* RENDER ACTIVE TAB / ROUTE VIEW */}
      <main className="flex-grow pt-[72px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            
            {/* 1. HOME VIEW */}
            {currentView === 'home' && (
              <div className="space-y-0">
                <Hero onExploreCourses={handleExploreCourses} />
                
                {/* Statistics Section (Page 18) */}
                <section className="py-12 gradient-bg text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                      <div>
                        <span className="block font-sans font-extrabold text-3xl sm:text-4xl text-white">
                          {stats.students}+
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-blue-100 font-inter mt-1.5 block">
                          Students Trained
                        </span>
                      </div>
                      <div>
                        <span className="block font-sans font-extrabold text-3xl sm:text-4xl text-white">
                          ⭐ 4.9
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-blue-100 font-inter mt-1.5 block">
                          Google Rating
                        </span>
                      </div>
                      <div>
                        <span className="block font-sans font-extrabold text-3xl sm:text-4xl text-white">
                          {stats.reviews}+
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-blue-100 font-inter mt-1.5 block">
                          Google Reviews
                        </span>
                      </div>
                      <div>
                        <span className="block font-sans font-extrabold text-3xl sm:text-4xl text-white">
                          {stats.courses}+
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-blue-100 font-inter mt-1.5 block">
                          Professional Courses
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                <AboutPreview onLearnMore={() => { setCurrentView('about'); window.scrollTo({ top: 0 }); }} />
                
                <WhyChooseUs />

                {/* Featured Courses block (Page 19) */}
                <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
                      <div>
                        <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter">
                          Syllabus Preview
                        </span>
                        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
                          Featured Courses
                        </h2>
                      </div>
                      <button
                        onClick={handleExploreCourses}
                        className="flex items-center space-x-1 text-primary-blue hover:text-blue-700 font-sans font-bold text-sm transition-colors cursor-pointer"
                      >
                        <span>See All 14 Courses</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Show top 6 popular courses on Home Page */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {coursesData.slice(0, 6).map((course) => (
                        <CourseCard
                          key={course.id}
                          course={course}
                          onOpenDetails={handleOpenDetails}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                {/* Facilities Preview block (Page 20) */}
                <section className="py-20 bg-white dark:bg-slate-900">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                      <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter">
                        Our Campus Infrastructure
                      </span>
                      <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
                        Modern Learning Facilities
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {facilitiesData.map((facility) => (
                        <div
                          key={facility.id}
                          className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center font-bold text-sm mb-4 border border-blue-100">
                            <Laptop className="w-5 h-5 text-primary-blue" />
                          </div>
                          <h3 className="font-sans font-bold text-slate-950 dark:text-white text-base mb-1.5">
                            {facility.title}
                          </h3>
                          <p className="font-inter text-xs sm:text-sm text-text-secondary leading-relaxed">
                            {facility.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Google Rating Banner (Page 21) */}
                <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center">
                  <div className="max-w-4xl mx-auto px-4 space-y-6">
                    <div className="flex items-center justify-center space-x-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                    <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                      Google Rating: ⭐ 4.9 based on 209+ Student Reviews
                    </h2>
                    <p className="font-inter text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
                      "Professional coaching, individual computers, daily guidance from Manish Sir, and highly supportive environment for college students."
                    </p>
                    <button
                      onClick={() => { setCurrentView('reviews'); window.scrollTo({ top: 0 }); }}
                      className="inline-flex items-center space-x-1 bg-white dark:bg-slate-900 hover:bg-blue-50 text-primary-blue border border-blue-200 hover:border-blue-300 font-sans font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      <span>Read Verified Student Reviews</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </section>

                {/* Visit Institute Block (Page 22) */}
                <section className="py-20 gradient-bg text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                  <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
                    <span className="text-white text-xs font-semibold tracking-widest uppercase bg-white dark:bg-slate-900/10 px-3.5 py-1.5 rounded-full border border-white/20 font-inter">
                      Personal Counseling Available
                    </span>
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                      Visit दaksh Computers
                    </h2>
                    <p className="font-inter text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl mx-auto">
                      For admission, course fees, batch timings, and complete information, please visit दaksh Computers personally. Our team will guide you and help you choose the right course according to your learning goals.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={openWhatsApp}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4 fill-current" />
                        <span>Chat via WhatsApp</span>
                      </button>
                      <button
                        onClick={() => window.open('https://maps.google.com/?q=Daksh+Computers+Balaji+Nagar+Bhopal+Ayodhya+Bypass', '_blank')}
                        className="w-full sm:w-auto bg-white dark:bg-slate-900 hover:bg-blue-50 text-primary-blue font-sans font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>View on Google Maps</span>
                      </button>
                    </div>
                  </div>
                </section>

                {/* Contact Preview (Page 22) */}
                <section className="py-16 bg-white dark:bg-slate-900">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-start space-x-4">
                        <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 fill-emerald-600/10" />
                        <div>
                          <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm">WhatsApp</h4>
                          <span className="block font-inter text-sm font-semibold text-slate-800 dark:text-slate-100 mt-1">+91 98272 41646</span>
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-start space-x-4">
                        <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm">Email</h4>
                          <span className="block font-inter text-xs text-slate-800 dark:text-slate-100 font-semibold mt-1 truncate">daksh.educomputers@gmail.com</span>
                        </div>
                      </div>
                      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex items-start space-x-4">
                        <MapPin className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm">Address</h4>
                          <span className="block font-inter text-xs text-slate-600 leading-relaxed mt-1">Balaji Nagar, 72, Ayodhya Bypass Road, Bhopal, MP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* 2. ABOUT PAGE VIEW (Page 25) */}
            {currentView === 'about' && (
              <div className="space-y-0">
                {/* Hero Section Banner */}
                <section className="relative py-16 sm:py-24 overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-center">
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                  <div className="max-w-4xl mx-auto px-4 space-y-4 sm:space-y-6 relative z-10">
                    <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter inline-block">
                      About दaksh Computers
                    </span>
                    <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight leading-tight">
                      We Trust in Quality Education
                    </h1>
                    <p className="font-inter text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                      Providing quality computer education through practical learning and modern teaching methods.
                    </p>
                  </div>
                </section>

                {/* Institute Introduction & Content Description (Page 25-26) */}
                <section className="py-20 bg-white dark:bg-slate-900">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      <div className="lg:col-span-7 space-y-6">
                        <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                          Our Commitment to Tech Competence
                        </h2>
                        <p className="font-inter text-sm sm:text-base text-text-secondary leading-relaxed">
                          दaksh Computers is a trusted computer education institute located in Bhopal, Madhya Pradesh. The institute provides practical computer education with a focus on skill development and industry-oriented learning. Students receive hands-on training in computer fundamentals, programming languages, web development, office applications, and diploma courses.
                        </p>
                        <p className="font-inter text-sm sm:text-base text-text-secondary leading-relaxed">
                          Every course is designed to improve practical knowledge, confidence, and career opportunities. We make sure that our computer workspace matches industry environments so that students transition smoothly into modern career profiles.
                        </p>
                      </div>

                      <div className="lg:col-span-5 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video sm:aspect-square bg-slate-100 border border-slate-100 dark:border-slate-800">
                          <img
                            src="https://res.cloudinary.com/mpwyauoh/image/upload/v1784223686/IMG-20260716-WA0121_xopovm.jpg"
                            alt="दaksh Computers Classroom learning session"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-slate-900/95 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <span className="block font-sans font-bold text-slate-900 dark:text-white text-xs sm:text-sm">Modern Classrooms</span>
                            <span className="block font-inter text-[10px] sm:text-xs text-text-secondary mt-0.5">Fully fitted with visual technology modules.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Director Section (Page 26) */}
                <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-md max-w-4xl mx-auto animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-4 flex justify-center">
                          <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-blue-600 to-cyan-400 shadow-xl hover:shadow-cyan-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                          >
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-50 dark:bg-slate-900 relative">
                              <img
                                src={directorPhoto}
                                alt="Prof. Manish Saxena, Director of दaksh Computers"
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </motion.div>
                        </div>
                        <div className="md:col-span-8 space-y-5 text-center md:text-left">
                          <div className="space-y-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary-blue font-inter bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block">
                              Director's Message
                            </span>
                            <h3 className="font-sans font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight">
                              Prof. Manish Saxena
                            </h3>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 text-sm text-text-secondary font-medium font-inter mt-1.5">
                              <span className="text-primary-blue font-semibold">Director</span>
                              <span className="hidden sm:inline text-slate-300">•</span>
                              <span className="text-slate-700">दaksh Computers</span>
                            </div>
                            <p className="text-xs sm:text-sm text-cyan-600 font-sans font-bold italic tracking-wide mt-2">
                              "We Trust in Quality Education"
                            </p>
                          </div>
                          
                          <div className="relative p-5 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800/80 mt-4 text-left">
                            <div className="absolute top-3 left-3 text-blue-200 font-serif text-4xl select-none leading-none">“</div>
                            <blockquote className="font-inter text-slate-600 text-sm sm:text-base italic leading-relaxed pl-4 relative z-10">
                              Our goal is to provide quality computer education through practical learning and individual guidance. We believe every student deserves the opportunity to build a successful future with the right skills and knowledge.
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Mission & Vision blocks (Page 26-27) */}
                <section className="py-20 bg-white dark:bg-slate-900">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                      
                      {/* Mission Glass Card */}
                      <div className="glassmorphism p-8 rounded-2xl border border-blue-50/50 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-blue flex items-center justify-center font-bold text-sm">
                            <Award className="w-5 h-5 text-primary-blue" />
                          </div>
                          <h3 className="font-sans font-bold text-slate-900 dark:text-white text-xl">
                            Our Mission
                          </h3>
                          <p className="font-inter text-sm sm:text-base text-text-secondary leading-relaxed">
                            To provide practical, affordable, and industry-oriented computer education that helps students develop real technical skills and confidence.
                          </p>
                        </div>
                      </div>

                      {/* Vision Glass Card */}
                      <div className="glassmorphism p-8 rounded-2xl border-cyan-50/50 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-sm">
                            <Award className="w-5 h-5 text-cyan-600" />
                          </div>
                          <h3 className="font-sans font-bold text-slate-900 dark:text-white text-xl">
                            Our Vision
                          </h3>
                          <p className="font-inter text-sm sm:text-base text-text-secondary leading-relaxed">
                            To become one of the most trusted computer education institutes by continuously providing quality education and practical training.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>

                {/* Facilities List Panel (Page 27) */}
                <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                      <h2 className="font-sans font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight">
                        Our Infrastructure Assets
                      </h2>
                      <p className="font-inter text-sm text-text-secondary mt-3">
                        दaksh Computers Bhopal maintains an array of modern student facilities:
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center font-inter text-sm text-slate-700">
                      {[
                        { title: 'Computer Lab' },
                        { title: 'Smart TV Classroom' },
                        { title: 'Projector' },
                        { title: 'High-Speed Internet' },
                        { title: 'Practical Training' },
                        { title: 'Friendly Environment' }
                      ].map((fac, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center space-y-3">
                          <CheckCircle className="w-5 h-5 text-blue-500" />
                          <span className="font-sans font-bold text-slate-800 dark:text-slate-100 text-xs leading-tight">{fac.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Statistics counts ticker (Page 27) */}
                <section className="py-16 gradient-bg text-white">
                  <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-6 text-center font-sans">
                    <div>
                      <span className="block font-extrabold text-3xl sm:text-4xl text-white">8000+</span>
                      <span className="text-xs sm:text-sm font-semibold text-blue-100 font-inter mt-1.5 block">Students Trained</span>
                    </div>
                    <div>
                      <span className="block font-extrabold text-3xl sm:text-4xl text-white">209+</span>
                      <span className="text-xs sm:text-sm font-semibold text-blue-100 font-inter mt-1.5 block">Google Reviews</span>
                    </div>
                    <div>
                      <span className="block font-extrabold text-3xl sm:text-4xl text-white">4.9★</span>
                      <span className="text-xs sm:text-sm font-semibold text-blue-100 font-inter mt-1.5 block">Google Rating</span>
                    </div>
                  </div>
                </section>

                {/* Call to Action (Page 28) */}
                <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center">
                  <div className="max-w-3xl mx-auto px-4 space-y-6">
                    <h2 className="font-sans font-extrabold text-3xl text-slate-950 dark:text-white">
                      Ready to Start Learning?
                    </h2>
                    <p className="font-inter text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
                      Visit दaksh Computers today to explore our courses and learning environment.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                      <button
                        onClick={openWhatsApp}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4 fill-current" />
                        <span>WhatsApp Counsel</span>
                      </button>
                      <button
                        onClick={() => window.open('https://maps.google.com/?q=Daksh+Computers+Balaji+Nagar+Bhopal+Ayodhya+Bypass', '_blank')}
                        className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 dark:text-slate-100 font-sans font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer"
                      >
                        <span>View on Google Maps</span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* 3. COURSES PAGE VIEW (Page 28) */}
            {currentView === 'courses' && (
              <div className="space-y-0 bg-slate-50 dark:bg-slate-900 min-h-screen">
                {/* Hero Banner */}
                <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-center">
                  <div className="max-w-4xl mx-auto px-4 space-y-4">
                    <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter inline-block">
                      Courses & Certifications
                    </span>
                    <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight">
                      Professional Computer Courses
                    </h1>
                    <p className="font-inter text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                      Learn practical computer skills with experienced guidance.
                    </p>
                  </div>
                </section>

                {/* Course List & Live Search Box (Page 29) */}
                <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                  
                  {/* Live Search Bar */}
                  <div className="max-w-xl mx-auto">
                    <div className="relative">
                      <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search courses by name or topic (e.g. Python, Java, Tally)..."
                        value={courseSearch}
                        onChange={(e) => setCourseSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans font-semibold text-sm transition-all outline-none shadow-sm"
                      />
                      {courseSearch && (
                        <button
                          onClick={() => setCourseSearch('')}
                          className="absolute right-4 top-3.5 p-0.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Common quick examples (Page 29) */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 text-xs text-text-secondary font-inter">
                      <span>Try searching:</span>
                      {['Python', 'Java', 'MS Office', 'DCA', 'Typing'].map((kw) => (
                        <button
                          key={kw}
                          onClick={() => setCourseSearch(kw)}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100/50 text-primary-blue font-semibold transition-all cursor-pointer"
                        >
                          {kw}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Course Cards Grid */}
                  {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredCourses.map((course) => (
                        <CourseCard
                          key={course.id}
                          course={course}
                          onOpenDetails={handleOpenDetails}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 max-w-md mx-auto p-8 space-y-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
                        <Search className="w-6 h-6" />
                      </div>
                      <h3 className="font-sans font-bold text-slate-800 dark:text-slate-100 text-base">No Courses Found</h3>
                      <p className="font-inter text-xs sm:text-sm text-text-secondary leading-relaxed">
                        We couldn't find any courses matching "{courseSearch}". Try searching for other technologies or reset the search.
                      </p>
                      <button
                        onClick={() => setCourseSearch('')}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all cursor-pointer"
                      >
                        Reset Search
                      </button>
                    </div>
                  )}
                </section>
              </div>
            )}

            {/* 4. GALLERY PAGE VIEW */}
            {currentView === 'gallery' && (
              <Gallery />
            )}

            {/* 5. STUDENT REVIEWS PAGE VIEW (Page 32-33) */}
            {currentView === 'reviews' && (
              <div className="space-y-0 bg-slate-50 dark:bg-slate-900 min-h-screen">
                {/* Hero Banner */}
                <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-center">
                  <div className="max-w-4xl mx-auto px-4 space-y-4">
                    <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter inline-block">
                      Student Success Stories
                    </span>
                    <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight">
                      Student Reviews
                    </h1>
                    <p className="font-inter text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                      Read the experiences of our students.
                    </p>
                  </div>
                </section>

                {/* Google Rating prominently displayed (Page 33) */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-md max-w-md mx-auto text-center space-y-4">
                    <div className="flex justify-center text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-7 h-7 fill-current" />
                      ))}
                    </div>
                    <div>
                      <span className="block font-sans font-extrabold text-3xl text-slate-900 dark:text-white leading-none">⭐ 4.9 Rating</span>
                      <span className="block text-xs font-bold text-text-secondary uppercase tracking-wider font-inter mt-2">
                        Based on 209+ verified Google Reviews
                      </span>
                    </div>
                  </div>

                  {/* Grid Layout for authentic review cards (Page 33) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviewsData.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* 6. CERTIFICATES VIEW (Page 34) */}
            {currentView === 'certificate' && (
              <div className="space-y-0 bg-slate-50 dark:bg-slate-900 min-h-screen">
                <Certificates />
              </div>
            )}

            {/* 7. CONTACT VIEW (Page 35-37) */}
            {currentView === 'contact' && (
              <div className="space-y-0 min-h-screen">
                {/* Hero Banner */}
                <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 text-center">
                  <div className="max-w-4xl mx-auto px-4 space-y-4">
                    <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter inline-block">
                      Bhopal Campus
                    </span>
                    <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight">
                      Contact Us
                    </h1>
                    <p className="font-inter text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                      We are here to help you with course information and guidance.
                    </p>
                  </div>
                </section>

                <section className="py-12 bg-white dark:bg-slate-900">
                  <ContactSection />
                </section>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Primary Global Sticky Footer */}
      <Footer setCurrentView={setCurrentView} />

      {/* FLOATING WHATSAPP BUTTON TRIGGER (Page 40-41) */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={floatWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full font-sans font-bold text-sm tracking-wide shadow-2xl transition-all duration-300 hover:scale-105 group active:scale-95"
          aria-label="Direct Chat with दaksh Computers"
          id="global-floating-whatsapp"
        >
          {/* Glowing particle rings around phone icon */}
          <span className="relative flex h-3 w-3 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-slate-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100"></span>
          </span>
          <Phone className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">Inquire on WhatsApp</span>
        </a>
      </div>

      {/* DYNAMIC COURSE MODAL FRAME */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={handleCloseDetails}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
