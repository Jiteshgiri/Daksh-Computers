import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Code, Laptop, Tv, Briefcase, Award } from 'lucide-react';

interface BentoCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

export default function WhyChooseUs() {
  const cards: BentoCard[] = [
    {
      title: 'Experienced Faculty',
      description: 'Learn from experienced and supportive trainers under the direct mentorship of Prof. Manish Saxena.',
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-blue-50 border-blue-100/50'
    },
    {
      title: 'Practical Learning',
      description: 'Hands-on practical sessions for every course. We prioritize code compiling and document creation over theory.',
      icon: <Code className="w-6 h-6 text-emerald-600" />,
      bgColor: 'bg-emerald-50 border-emerald-100/50'
    },
    {
      title: 'Modern Computer Lab',
      description: 'Equipped with the latest computers, standard operating software, compilers, and typing practice workstations.',
      icon: <Laptop className="w-6 h-6 text-cyan-600" />,
      bgColor: 'bg-cyan-50 border-cyan-100/50'
    },
    {
      title: 'Smart Classroom',
      description: 'Fitted with Smart TVs and screen sharing configurations to help visualize complex program logs or tax ledger entries.',
      icon: <Tv className="w-6 h-6 text-indigo-600" />,
      bgColor: 'bg-indigo-50 border-indigo-100/50'
    },
    {
      title: 'Industry-Oriented Courses',
      description: 'Fully certified computer courses meticulously designed according to modern industrial requirements and CPCT exams.',
      icon: <Briefcase className="w-6 h-6 text-amber-600" />,
      bgColor: 'bg-amber-50 border-amber-100/50'
    },
    {
      title: 'Quality Education',
      description: 'दaksh Computers is strictly committed to delivering reliable, clear, and high-standard computer literacy to all.',
      icon: <Award className="w-6 h-6 text-purple-600" />,
      bgColor: 'bg-purple-50 border-purple-100/50'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter">
            Our Core Pillars
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-4 tracking-tight">
            Why Choose दaksh Computers
          </h2>
          <p className="font-inter text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
            Every design decision and teaching methodology at our institute is dedicated to delivering trust, professional competence, and student success.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1.5 hover:border-blue-200 transition-all duration-300"
            >
              {/* Subtle Blue Glow Overlay on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="space-y-4 relative z-10">
                {/* Icon box */}
                <div className={`w-12 h-12 rounded-xl ${card.bgColor} border flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}>
                  {card.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary-blue transition-colors">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="font-inter text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
