import { motion } from 'motion/react';
import { ArrowRight, Laptop, BookOpen, Star, HelpCircle } from 'lucide-react';
const directorPhoto = 'https://res.cloudinary.com/mpwyauoh/image/upload/v1784221249/1784221183683_ovrea3.png';

interface AboutPreviewProps {
  onLearnMore: () => void;
}

export default function AboutPreview({ onLearnMore }: AboutPreviewProps) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Premium Visual Representation (Institute Information Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-xl overflow-hidden flex flex-col justify-between min-h-[360px] group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
              
              {/* Decorative radial circles */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full filter blur-xl" />
              <div className="absolute bottom-[-20px] left-[-20px] w-36 h-36 bg-cyan-400/20 rounded-full filter blur-xl" />

              <div className="space-y-3 relative z-10">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm inline-block">
                  Institute Information Card
                </span>
                <h3 className="font-sans font-bold text-2xl tracking-tight text-white leading-tight">
                  दaksh Computers
                </h3>
                <p className="text-[11px] text-cyan-200 tracking-wider uppercase font-semibold font-inter">
                  "We Trust in Quality Education"
                </p>
              </div>

              <div className="pt-6 border-t border-white/20 flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-300 shadow-md shrink-0 bg-slate-100 relative">
                  <img
                    src={directorPhoto}
                    alt="Prof. Manish Saxena, Director"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] text-white/90 font-inter italic leading-relaxed">
                    "Every student deserves standard, practical, and highly simplified coaching to build a progressive career."
                  </p>
                  <div className="mt-1">
                    <span className="block font-sans font-bold text-xs text-cyan-200">
                      Prof. Manish Saxena
                    </span>
                    <span className="block text-[10px] text-white/70 uppercase tracking-wider font-semibold font-inter">
                      Director, दaksh Computers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Short Description and Trigger Button (Page 18) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-primary-blue text-xs font-semibold tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter inline-block">
                Who We Are
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                About दaksh Computers
              </h2>
            </div>

            <p className="font-inter text-sm sm:text-base text-text-secondary leading-relaxed">
              दaksh Computers is a trusted computer education institute in Bhopal offering practical and career-oriented computer training. The institute provides quality education in programming languages, office applications, web development, diploma courses, and technical skills.
            </p>

            <p className="font-inter text-sm text-text-secondary leading-relaxed">
              Under the expert, direct supervision of <strong className="text-slate-800 dark:text-slate-100">Prof. Manish Saxena</strong>, we emphasize actual hands-on learning rather than rote book knowledge. Every student receives personalized attention, daily practice slots, and access to a modern computer lab.
            </p>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center space-x-2 bg-white dark:bg-slate-900 hover:bg-blue-50 text-primary-blue border border-blue-200 hover:border-blue-300 font-sans font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
