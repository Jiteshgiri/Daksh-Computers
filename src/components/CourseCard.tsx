import { motion } from 'motion/react';
import { 
  Laptop, 
  FileSpreadsheet, 
  GraduationCap, 
  Award, 
  Code, 
  Binary, 
  Coffee, 
  Terminal, 
  FileCode, 
  Palette, 
  Activity, 
  Globe, 
  Calculator, 
  Keyboard,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  key?: string;
  course: Course;
  onOpenDetails: (course: Course) => void;
}

// Function to dynamically resolve relevant beautiful icons
const getCourseIcon = (id: string) => {
  switch (id) {
    case 'basic-computer':
      return <Laptop className="w-6 h-6 text-primary-blue" />;
    case 'ms-office':
      return <FileSpreadsheet className="w-6 h-6 text-secondary-blue" />;
    case 'dca':
      return <GraduationCap className="w-6 h-6 text-indigo-600" />;
    case 'pgdca':
      return <Award className="w-6 h-6 text-purple-600" />;
    case 'c-programming':
      return <Code className="w-6 h-6 text-emerald-600" />;
    case 'cpp-programming':
      return <Binary className="w-6 h-6 text-cyan-600" />;
    case 'java':
      return <Coffee className="w-6 h-6 text-red-500" />;
    case 'python':
      return <Terminal className="w-6 h-6 text-yellow-600" />;
    case 'html':
      return <FileCode className="w-6 h-6 text-orange-500" />;
    case 'css':
      return <Palette className="w-6 h-6 text-pink-500" />;
    case 'javascript':
      return <Activity className="w-6 h-6 text-amber-500" />;
    case 'web-development':
      return <Globe className="w-6 h-6 text-blue-600" />;
    case 'tally':
      return <Calculator className="w-6 h-6 text-teal-600" />;
    case 'typing':
      return <Keyboard className="w-6 h-6 text-slate-600" />;
    default:
      return <Laptop className="w-6 h-6 text-primary-blue" />;
  }
};

export default function CourseCard({ course, onOpenDetails }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="glassmorphism glassmorphism-hover rounded-2xl p-6 flex flex-col justify-between h-full bg-white dark:bg-slate-900 relative overflow-hidden group border border-slate-100"
    >
      {/* Decorative absolute glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full filter blur-2xl group-hover:bg-blue-500/10 transition-colors duration-300" />
      
      <div>
        {/* Course Icon & Duration badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center border border-blue-100/50 shadow-sm group-hover:scale-110 transition-transform duration-300">
            {getCourseIcon(course.id)}
          </div>
          <span className="flex items-center text-xs font-semibold text-primary-blue bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/30 font-inter">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {course.duration}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="font-sans font-bold text-lg text-text-primary mb-2 group-hover:text-primary-blue transition-colors">
          {course.name}
        </h3>

        {/* Short Description */}
        <p className="font-inter text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
          {course.overview.length > 105 ? `${course.overview.slice(0, 102)}...` : course.overview}
        </p>
      </div>

      <div>
        {/* Eligibility tag */}
        <div className="border-t border-slate-100 pt-3.5 mb-4 text-[11px] sm:text-xs text-text-secondary font-inter">
          <span className="font-semibold text-slate-700">Eligibility:</span> {course.eligibility}
        </div>

        {/* Notice line instead of Apply button */}
        <p className="text-[10px] text-amber-700 font-medium bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/30 leading-snug mb-4 font-inter">
          Admissions are available only by visiting दaksh Computers personally.
        </p>

        {/* View Details action */}
        <button
          onClick={() => onOpenDetails(course)}
          className="w-full flex items-center justify-center space-x-2 bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 hover:text-primary-blue text-slate-700 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border border-slate-100 hover:border-blue-200 cursor-pointer"
        >
          <span>View Course Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
