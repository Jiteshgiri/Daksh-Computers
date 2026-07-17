import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck, Map } from 'lucide-react';

export default function ContactSection() {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello दaksh Computers, I would like to know more about your computer courses. Please share fee and timing details.");
    window.open(`https://wa.me/919827241646?text=${text}`, '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:daksh.educomputers@gmail.com';
  };

  const openGoogleMaps = () => {
    // Exact location on Google Maps: Balaji Nagar, 72, Ayodhya Bypass Road, Bhopal
    window.open('https://maps.google.com/?q=Daksh+Computers+Balaji+Nagar+Bhopal+Ayodhya+Bypass', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Title block */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 font-inter">
          Get in Touch
        </span>
        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-slate-50 dark:text-white mt-4 tracking-tight">
          Contact Information
        </h2>
        <p className="font-inter text-sm sm:text-base text-text-secondary mt-3 leading-relaxed">
          We are here to help you with course information and guidance. For admissions and course fees, please contact us through WhatsApp, Email, or visit our Bhopal campus personally.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Contact Cards (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Card 1: WhatsApp */}
          <div className="glassmorphism rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start space-x-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shrink-0">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <h3 className="font-sans font-bold text-slate-900 dark:text-slate-50 dark:text-white text-sm">WhatsApp Chat</h3>
                <p className="font-inter text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5">+91 98272 41646</p>
              </div>
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="glassmorphism rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start space-x-4">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-primary-blue border border-blue-100 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-3 flex-1">
              <div>
                <h3 className="font-sans font-bold text-slate-900 dark:text-slate-50 dark:text-white text-sm">Official Email</h3>
                <p className="font-inter text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5 break-all">daksh.educomputers@gmail.com</p>
              </div>
              <button
                onClick={openEmail}
                className="inline-flex items-center space-x-1.5 bg-primary-blue hover:bg-blue-700 text-white font-sans font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-500/10 cursor-pointer"
              >
                <span>Send Email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="glassmorphism rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start space-x-4">
            <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 border border-cyan-100 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-sans font-bold text-slate-900 dark:text-slate-50 dark:text-white text-sm">Campus Address</h3>
              <p className="font-inter text-xs sm:text-sm text-text-secondary leading-relaxed pt-0.5">
                Balaji Nagar, 72, Ayodhya Bypass Road,<br />
                Near Khedapati Mandir, Narela Shankri, Ayodhya Nagar,<br />
                Bhopal, Madhya Pradesh – 462024
              </p>
            </div>
          </div>

          {/* Card 4: Working Hours */}
          <div className="glassmorphism rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start space-x-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1 font-inter text-xs sm:text-sm">
              <h3 className="font-sans font-bold text-slate-900 dark:text-slate-50 dark:text-white text-sm">Working Hours</h3>
              <div className="pt-1 space-y-1">
                <p className="text-text-secondary">
                  <span className="font-semibold text-slate-700">Monday – Saturday:</span> 9:00 AM – 8:00 PM
                </p>
                <p className="text-red-600 font-semibold">
                  <span className="text-text-secondary font-semibold">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: Google Map (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="glassmorphism rounded-3xl p-4 bg-white dark:bg-slate-900 border border-slate-100 shadow-xl overflow-hidden relative">
            <div className="rounded-2xl overflow-hidden h-[340px] relative border border-slate-100">
              
              {/* Premium Google Maps Iframe */}
              <iframe
                title="दaksh Computers Bhopal Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.434318055627!2d77.4641619!3d23.2636599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzQ5LjIiTiA3N8KwMjcnNTEuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Custom maps styling and pointer watermark */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-100 shadow-md font-inter text-xs max-w-[200px] pointer-events-none">
                <strong className="block text-slate-900 dark:text-slate-50 dark:text-white">दaksh Computers</strong>
                <span className="text-slate-500 text-[10px] block mt-0.5 leading-snug">Ayodhya Bypass Rd, Near Khedapati Mandir</span>
              </div>
            </div>

            {/* Embed direct external Maps Directions button (Page 22) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
              <div className="flex items-center space-x-2 text-xs text-text-secondary">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                <span>Visit our institute personally for complete course fees and details.</span>
              </div>
              <button
                onClick={openGoogleMaps}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary-blue hover:bg-blue-700 text-white font-sans font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md cursor-pointer shrink-0"
              >
                <Map className="w-4 h-4" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
