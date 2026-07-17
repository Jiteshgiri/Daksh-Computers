import { Laptop, Phone, Mail, MapPin, ExternalLink, Calendar } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentView: (view: string) => void;
}

export default function Footer({ setCurrentView }: FooterProps) {
  const handleLinkClick = (viewId: string) => {
    setCurrentView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello दaksh Computers, I would like to know more about your computer courses.");
    window.open(`https://wa.me/919827241646?text=${message}`, '_blank');
  };

  const openMail = () => {
    window.location.href = 'mailto:daksh.educomputers@gmail.com';
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Institute Brand */}
          <div className="space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center space-x-3 text-left cursor-pointer group"
            >
              <Logo size={46} emblemOnly={true} className="transform transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(60,225,176,0.5)]" />
              <div>
                <span className="block font-sans font-bold text-lg text-white leading-none">
                  दaksh Computers
                </span>
                <span className="block font-inter font-semibold text-[10px] text-blue-400 tracking-wider mt-1">
                  We Trust in Quality Education
                </span>
              </div>
            </button>
            <p className="text-sm text-slate-400 font-inter leading-relaxed pt-2">
              Bhopal's leading institute for practical and job-oriented computer training. We offer certified professional coaching led by experienced professionals under the direction of Prof. Manish Saxena.
            </p>
            <div className="pt-2 flex flex-col space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>Director: Prof. Manish Saxena</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-amber-400">⭐ 4.9</span>
                <span>Google Rating (209+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-sans font-bold text-white tracking-wider uppercase mb-6 border-l-2 border-blue-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3 font-inter text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Institute' },
                { id: 'courses', label: 'Explore Courses' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'reviews', label: 'Student Reviews' },
                { id: 'certificate', label: 'Certificates' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Courses */}
          <div>
            <h3 className="text-sm font-sans font-bold text-white tracking-wider uppercase mb-6 border-l-2 border-blue-500 pl-3">
              Popular Courses
            </h3>
            <ul className="space-y-3 font-inter text-sm">
              {[
                { id: 'courses', label: 'DCA (Computer Diploma)' },
                { id: 'courses', label: 'PGDCA (PG Diploma)' },
                { id: 'courses', label: 'Python & JavaScript' },
                { id: 'courses', label: 'Core Java Programming' },
                { id: 'courses', label: 'Tally Prime with GST' },
                { id: 'courses', label: 'Web Development Suite' },
                { id: 'courses', label: 'Hindi & English Typing' }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick('courses')}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-sans font-bold text-white tracking-wider uppercase mb-6 border-l-2 border-blue-500 pl-3">
              Contact Details
            </h3>
            <div className="space-y-4 font-inter text-sm text-slate-400">
              <button
                onClick={openWhatsApp}
                className="flex items-start space-x-3 text-left hover:text-blue-400 transition-colors duration-200 w-full cursor-pointer"
              >
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 fill-emerald-500/10" />
                <div>
                  <span className="block text-xs text-slate-500">WhatsApp Chat</span>
                  <span className="font-semibold text-slate-300">+91 98272 41646</span>
                </div>
              </button>

              <button
                onClick={openMail}
                className="flex items-start space-x-3 text-left hover:text-blue-400 transition-colors duration-200 w-full cursor-pointer"
              >
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500">Email Address</span>
                  <span className="font-semibold text-slate-300 text-xs break-all">daksh.educomputers@gmail.com</span>
                </div>
              </button>

              <div className="flex items-start space-x-3 text-left">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-500">Our Address</span>
                  <p className="text-xs text-slate-300 leading-normal">
                    Balaji Nagar, 72, Ayodhya Bypass Road, Near Khedapati Mandir, Bhopal, MP - 462024
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-inter">
          <p>© 2026 दaksh Computers. All Rights Reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <span className="hover:text-blue-400 transition-colors cursor-default">Designed for Premium Education</span>
            <span>•</span>
            <button
              onClick={() => handleLinkClick('certificate')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Verify Certificate
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
