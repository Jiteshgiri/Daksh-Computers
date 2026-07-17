import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Award, 
  Search, 
  ArrowLeft, 
  Code, 
  Monitor, 
  BookOpen, 
  FileText, 
  Layers, 
  Calendar, 
  User 
} from 'lucide-react';
import { studentsCertificates, StudentCertificate } from '../studentData';

// -------------------------------------------------------------
// MAIN COURSE CATEGORIES LIST
// Aap yahan se naye courses add ya unka details change kar sakte hain.
// -------------------------------------------------------------
const MAIN_COURSES = [
  { id: 'Programming', label: 'Programming', description: 'C, C++, Python, Java, JavaScript Certificates', icon: Code, color: 'from-blue-500 to-indigo-600' },
  { id: 'Basic Computer', label: 'Basic Computer', description: 'Fundamental IT & Office Application Certificates', icon: Monitor, color: 'from-emerald-500 to-teal-600' },
  { id: 'DCA', label: 'DCA', description: 'Diploma in Computer Applications Certificates', icon: BookOpen, color: 'from-amber-500 to-orange-600' },
  { id: 'PGDCA', label: 'PGDCA', description: 'Post Graduate Diploma in Computer Applications', icon: Layers, color: 'from-purple-500 to-pink-600' },
  { id: 'Web Development', label: 'Web Development', description: 'Frontend, Stylesheets & Web App Suite Certificates', icon: FileText, color: 'from-cyan-500 to-blue-600' },
  { id: 'Internship', label: 'Internship', description: 'Professional Internship & Practical Training Completion Certificates', icon: Award, color: 'from-cyan-500 to-blue-600' }
];

// -------------------------------------------------------------
// PROGRAMMING LANGUAGES SUB-MODULES
// Programming course select karne par inhi me se select hoga.
// Future me koi language add karni ho to bas is list me daal dein!
// -------------------------------------------------------------
const PROGRAMMING_LANGUAGES = ['C', 'C++', 'Python', 'Java', 'JavaScript'];

export default function Certificates() {
  // Navigation states
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Lightbox view state
  const [activeCertificate, setActiveCertificate] = useState<StudentCertificate | null>(null);

  // -------------------------------------------------------------
  // FILTERING LOGIC (SEARCH SYSTEM)
  // -------------------------------------------------------------
  const filteredStudents = studentsCertificates.filter((student) => {
    // 1. Pehle check karein kya course matches selected course
    if (selectedCourse && student.course !== selectedCourse) {
      return false;
    }
    // 2. Agar Programming course hai, to selected language bhi match honi chahiye
    if (selectedCourse === 'Programming' && selectedLanguage && student.language !== selectedLanguage) {
      return false;
    }
    // 3. Search text name ke andar match hona chahiye (Case-insensitive)
    return student.studentName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Reset function to go back or clear search
  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSelectedLanguage(null);
    setSearchQuery('');
  };

  const handleBackToLanguages = () => {
    setSelectedLanguage(null);
    setSearchQuery('');
  };

  return (
    <div className="space-y-0 min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      
      {/* -------------------------------------------------------------
          HEADER HERO BANNER
          ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-950/10 dark:to-purple-950/10" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800 inline-block">
            Verified Credentials
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight">
            Student Certificates
          </h1>
          <p className="font-inter text-sm sm:text-base text-text-secondary dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Verify & view authentic academic success. Select your course category below to locate your credential profile.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------
          VIEW 1: SHOW ALL COURSE CATEGORIES (First Screen)
          ------------------------------------------------------------- */}
      {!selectedCourse && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-sans font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
              Choose Your Course
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select category to filter verified students
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MAIN_COURSES.map((course) => {
              const IconComp = course.icon;
              return (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course.id)}
                  className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between h-64"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/10 to-indigo-100/10 dark:from-blue-900/5 dark:to-indigo-900/5 rounded-full transform translate-x-8 -translate-y-8" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-extrabold text-xl text-slate-900 dark:text-white">
                      {course.label}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex items-center text-primary-blue font-sans font-bold text-sm mt-4 group-hover:translate-x-2 transition-transform">
                    <span>Explore Certificates</span>
                    <ArrowLeft className="w-4 h-4 rotate-180 ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* -------------------------------------------------------------
          VIEW 2: PROGRAMMING SUB-MODULES (C, C++, Python, etc.)
          ------------------------------------------------------------- */}
      {selectedCourse === 'Programming' && !selectedLanguage && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <button 
            onClick={handleBackToCourses}
            className="flex items-center space-x-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary-blue cursor-pointer mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </button>

          <div className="text-center mb-10">
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Programming Languages
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Select specific language to locate coding credentials
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROGRAMMING_LANGUAGES.map((lang) => (
              <div
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 text-center hover:shadow-md hover:border-blue-500 transition-all cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary-blue mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <span className="font-sans font-extrabold text-base text-slate-900 dark:text-white">
                  {lang}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* -------------------------------------------------------------
          VIEW 3: STUDENTS LIST WITH SEARCH BOX
          ------------------------------------------------------------- */}
      {selectedCourse && (selectedCourse !== 'Programming' || selectedLanguage) && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Action Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <button 
              onClick={selectedCourse === 'Programming' ? handleBackToLanguages : handleBackToCourses}
              className="flex items-center space-x-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary-blue cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>
                Back to {selectedCourse === 'Programming' ? 'Programming Languages' : 'All Courses'}
              </span>
            </button>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold text-primary-blue">
              Category: {selectedCourse} {selectedLanguage ? `→ ${selectedLanguage}` : ''}
            </div>
          </div>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search certificate by Student Name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-950 dark:text-white placeholder-slate-400 pl-12 pr-4 py-3.5 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 font-sans text-sm shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Student Certificates Grid */}
          {filteredStudents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    {/* Student Profile Photo */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 flex-shrink-0">
                      <img 
                        src={student.profilePhoto} 
                        alt={student.studentName} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Student Info */}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-sans font-extrabold text-slate-900 dark:text-white text-base truncate">
                        {student.studentName}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                        ID: {student.id}
                      </p>
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1 mb-6">
                    <p><strong>Course:</strong> {student.course}</p>
                    {student.language && <p><strong>Language:</strong> {student.language}</p>}
                    <p><strong>Issue Date:</strong> {student.issueDate}</p>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setActiveCertificate(student)}
                    className="w-full bg-primary-blue hover:bg-blue-600 text-white font-sans font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md shadow-blue-500/10 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="text-center py-20 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400 mx-auto mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white">
                No Certificates Found
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
                Could not find any student named "{searchQuery}" in this category. Please try a different spelling.
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-primary-blue mt-4 hover:underline cursor-pointer"
                >
                  Clear Search Filter
                </button>
              )}
            </div>
          )}
        </section>
      )}

      {/* -------------------------------------------------------------
          MODAL LIGHTBOX
          Open student certificate image or details
          ------------------------------------------------------------- */}
      <AnimatePresence>
        {activeCertificate && (
          <div
            onClick={() => setActiveCertificate(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer overflow-y-auto"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setActiveCertificate(null); }}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/25 p-2 rounded-full transition-colors cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-slate-100 dark:border-slate-800 cursor-default"
            >
              {/* Certificate Image Frame */}
              <div className="aspect-[4/3] w-full bg-slate-100 dark:bg-slate-950 relative border-b border-slate-100 dark:border-slate-800 p-4 sm:p-6 flex items-center justify-center">
                <img
                  src={activeCertificate.certificateUrl}
                  alt={`Official Certificate of ${activeCertificate.studentName}`}
                  className="max-w-full max-h-[45vh] object-contain rounded-lg shadow-md"
                  referrerPolicy="referrer"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 dark:border-slate-700">
                      <img 
                        src={activeCertificate.profilePhoto} 
                        alt={activeCertificate.studentName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                        {activeCertificate.studentName}
                      </h2>
                      <p className="text-primary-blue font-bold text-sm">
                        Verified Student Graduate
                      </p>
                    </div>
                  </div>
                  <Award className="w-10 h-10 text-emerald-500 flex-shrink-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 text-sm">
                  <div className="space-y-1">
                    <p className="text-slate-400 dark:text-slate-500 text-xs">COURSE CATEGORY</p>
                    <p className="text-slate-800 dark:text-slate-200 font-bold">{activeCertificate.course}</p>
                  </div>
                  {activeCertificate.language && (
                    <div className="space-y-1">
                      <p className="text-slate-400 dark:text-slate-500 text-xs">SPECIFIC MODULE / LANGUAGE</p>
                      <p className="text-slate-800 dark:text-slate-200 font-bold">{activeCertificate.language}</p>
                    </div>
                  )}
                  <div className="space-y-1">
                    <p className="text-slate-400 dark:text-slate-500 text-xs">CREDENTIAL NUMBER / ID</p>
                    <p className="text-slate-800 dark:text-slate-200 font-mono font-semibold">{activeCertificate.id}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-400 dark:text-slate-500 text-xs">DATE OF GRADUATION</p>
                    <p className="text-slate-800 dark:text-slate-200 font-bold">{activeCertificate.issueDate}</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => setActiveCertificate(null)}
                    className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
