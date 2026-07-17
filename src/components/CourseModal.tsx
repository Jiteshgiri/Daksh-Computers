import { motion } from 'motion/react';
import { X, Calendar, Award, CheckCircle2, Star, HelpCircle, Briefcase, PlayCircle, Phone } from 'lucide-react';
import { Course } from '../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  if (!course) return null;

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(`Hello दaksh Computers, I want to inquire about the course: ${course.name}. Please guide me with admission dates, timings and fees.`);
    window.open(`https://wa.me/919827241646?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.4 }}
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header Ribbon / Banner */}
        <div className="relative gradient-bg p-6 sm:p-8 text-white shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-wrap gap-2 items-center mb-3">
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Duration: {course.duration}
            </span>
            <span className="bg-cyan-500/30 text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
              <Award className="w-3 h-3" />
              Verified Certificate
            </span>
          </div>

          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight">
            {course.name}
          </h2>
          <p className="text-white/80 font-inter text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            {course.overview}
          </p>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Grid Layout for details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Col: Core Details */}
            <div className="space-y-6">
              {/* Topics Covered */}
              <div>
                <h3 className="font-sans font-bold text-slate-800 dark:text-slate-100 text-base mb-3 flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-primary-blue" />
                  What You Will Learn (Topics)
                </h3>
                <ul className="space-y-2.5 font-inter text-sm text-text-secondary">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Opportunities */}
              <div>
                <h3 className="font-sans font-bold text-slate-800 dark:text-slate-100 text-base mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary-blue" />
                  Career Opportunities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.careerOpportunities.map((job, i) => (
                    <span key={i} className="bg-blue-50 text-primary-blue font-semibold text-xs px-3 py-1.5 rounded-lg border border-blue-100">
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Eligibility, Benefits, Practical Lab sessions */}
            <div className="space-y-6">
              {/* Eligibility */}
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100">
                <h4 className="font-sans font-bold text-slate-800 dark:text-slate-100 text-sm mb-1.5 flex items-center gap-2">
                  <HelpCircle className="w-4.5 h-4.5 text-secondary-blue" />
                  Who Can Join & Eligibility
                </h4>
                <p className="font-inter text-sm text-text-secondary leading-relaxed">
                  <strong className="text-slate-700">Eligible:</strong> {course.eligibility}
                  <br />
                  <strong className="text-slate-700">Perfect for:</strong> {course.whoCanJoin}
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-cyan-50/50 p-4 rounded-2xl border border-cyan-100/50">
                <h4 className="font-sans font-bold text-slate-800 dark:text-slate-100 text-sm mb-1.5 flex items-center gap-2">
                  <Star className="w-4.5 h-4.5 text-accent-cyan" />
                  Course Benefits
                </h4>
                <p className="font-inter text-sm text-text-secondary leading-relaxed">
                  {course.benefits}
                </p>
              </div>

              {/* Practical Sessions */}
              <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                <h4 className="font-sans font-bold text-slate-800 dark:text-slate-100 text-sm mb-1.5 flex items-center gap-2">
                  <Award className="w-4.5 h-4.5 text-primary-blue" />
                  Practical Sessions & Certification
                </h4>
                <p className="font-inter text-xs sm:text-sm text-text-secondary leading-relaxed">
                  <strong className="text-slate-700">Lab Training:</strong> {course.practicalTraining}
                  <br />
                  <strong className="text-slate-700">Certificate:</strong> {course.certificateInformation}
                </p>
              </div>
            </div>

          </div>

          {/* Important Notice Board (STRICT REQUIREMENT FROM PAGE 30) */}
          <div className="bg-[#FFFBEB] border border-amber-200 rounded-2xl p-5 sm:p-6 text-amber-900">
            <h4 className="font-sans font-bold text-amber-800 text-sm sm:text-base mb-2">
              ⚠️ Important Notice
            </h4>
            <p className="font-inter text-xs sm:text-sm leading-relaxed text-amber-800">
              Admissions are available only by visiting दaksh Computers personally. Please contact us through WhatsApp or visit the institute for complete information.
            </p>
          </div>
        </div>

        {/* Modal Footer with WhatsApp action */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <span className="font-inter text-xs text-text-secondary text-center sm:text-left">
            Have questions about timings, fees, or syllabus?
          </span>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 font-sans font-semibold text-sm text-slate-600 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleWhatsAppContact}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-sans font-semibold text-sm transition-all duration-200 hover:scale-[1.02] shadow-md shadow-emerald-500/10 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
