import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

interface ReviewCardProps {
  key?: string;
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  // Generate high-fidelity initials badge as a fallback for user profile photo
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="glassmorphism glassmorphism-hover rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-blue-50/50 flex flex-col justify-between h-full relative group"
    >
      {/* Decorative Quote Mark */}
      <div className="absolute top-6 right-6 text-blue-500/10 group-hover:text-blue-500/15 transition-colors">
        <Quote className="w-10 h-10 transform rotate-180" />
      </div>

      <div className="space-y-4">
        {/* Star Rating Layout */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
              }`}
            />
          ))}
          <span className="text-xs font-bold text-slate-400 font-inter ml-1.5">{review.rating.toFixed(1)}</span>
        </div>

        {/* Review Paragraph */}
        <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed italic">
          "{review.text}"
        </p>
      </div>

      {/* Student Profile Info */}
      <div className="flex items-center space-x-3.5 border-t border-slate-100 pt-5 mt-6">
        {review.photoUrl ? (
          <img
            src={review.photoUrl}
            alt={review.name}
            referrerPolicy="no-referrer"
            className="w-11 h-11 rounded-full object-cover border border-blue-100"
          />
        ) : (
          <div className="w-11 h-11 rounded-full gradient-bg flex items-center justify-center text-white font-sans font-bold text-sm tracking-wide shadow-md shadow-blue-500/10">
            {getInitials(review.name)}
          </div>
        )}
        <div>
          <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-primary-blue transition-colors leading-tight">
            {review.name}
          </h4>
          <span className="block font-inter text-[11px] sm:text-xs text-text-secondary leading-normal mt-0.5">
            {review.role} • <span className="text-slate-400">{review.date}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
