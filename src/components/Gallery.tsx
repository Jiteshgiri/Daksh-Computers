import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Image as ImageIcon, Video as VideoIcon, ArrowLeft, Calendar, Folder } from 'lucide-react';
import { galleryEvents, galleryVideos, GalleryPhoto } from '../galleryData';

export default function Gallery() {
  // Tabs: 'photos' or 'videos'
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  // Interactive Navigation States for Photos
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Lightbox previews
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Selected Category Helper
  const selectedEvent = galleryEvents.find(e => e.id === selectedEventId);

  // Back actions
  const handleBackToEvents = () => {
    setSelectedEventId(null);
    setSelectedYear(null);
  };

  const handleBackToYears = () => {
    setSelectedYear(null);
  };

  return (
    <div className="space-y-0 min-h-screen bg-slate-50 dark:bg-slate-900 pb-20">
      
      {/* -------------------------------------------------------------
          HERO BANNER
          ------------------------------------------------------------- */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-primary-blue text-xs font-semibold tracking-widest uppercase bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full border border-blue-100 dark:border-blue-800 inline-block">
            Visual Experience
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight">
            Institute Gallery
          </h1>
          <p className="font-inter text-sm sm:text-base text-text-secondary dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore authentic moments, events, and celebrations at दaksh Computers through our photos and videos.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------
          GALLERY TABS (Photos vs Videos)
          ------------------------------------------------------------- */}
      <section className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              setActiveTab('photos');
              handleBackToEvents();
            }}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-sans font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'photos'
                ? 'bg-primary-blue text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <ImageIcon className="w-5 h-5" />
            <span>Photos</span>
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-sans font-bold text-sm transition-all cursor-pointer ${
              activeTab === 'videos'
                ? 'bg-primary-blue text-white shadow-md shadow-blue-500/20'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <VideoIcon className="w-5 h-5" />
            <span>Videos</span>
          </button>
        </div>
      </section>

      {/* -------------------------------------------------------------
          MEDIA / GALLERY WORKSPACE
          ------------------------------------------------------------- */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==========================================
            TAB 1: PHOTOS SYSTEM
            ========================================== */}
        {activeTab === 'photos' && (
          <div>
            
            {/* VIEW A: SHOW EVENT CATEGORIES (No Category Selected) */}
            {!selectedEventId && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-sans font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Event Categories
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Select an event to view historical photos
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {galleryEvents.map((ev) => (
                    <div
                      key={ev.id}
                      onClick={() => setSelectedEventId(ev.id)}
                      className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                        <Folder className="w-6 h-6" />
                      </div>
                      <h3 className="font-sans font-extrabold text-xl text-slate-900 dark:text-white">
                        {ev.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                        {ev.description}
                      </p>
                      <div className="flex items-center text-primary-blue font-sans font-bold text-sm mt-6 group-hover:translate-x-2 transition-transform">
                        <span>Open Folder</span>
                        <ArrowLeft className="w-4 h-4 rotate-180 ml-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW B: SHOW YEARS WITHIN EVENT (Event Selected, No Year Selected) */}
            {selectedEventId && selectedEvent && !selectedYear && (
              <div className="space-y-6">
                <button
                  onClick={handleBackToEvents}
                  className="flex items-center space-x-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary-blue cursor-pointer mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Categories</span>
                </button>

                <div className="text-center mb-8">
                  <h2 className="font-sans font-extrabold text-2xl text-slate-900 dark:text-white">
                    {selectedEvent.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Select a year to see photos from that year
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {Object.keys(selectedEvent.years).map((year) => (
                    <div
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 text-center hover:shadow-md hover:border-blue-500 transition-all cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary-blue mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <span className="font-sans font-extrabold text-lg text-slate-900 dark:text-white">
                        {year}
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        {selectedEvent.years[year].length} Photos
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW C: DISPLAY PHOTOS (Event & Year Selected) */}
            {selectedEventId && selectedEvent && selectedYear && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                  <button
                    onClick={handleBackToYears}
                    className="flex items-center space-x-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary-blue cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Years ({selectedEvent.name})</span>
                  </button>

                  <span className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold text-primary-blue">
                    {selectedEvent.name} &rarr; {selectedYear}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedEvent.years[selectedYear]?.map((img) => (
                    <div
                      key={img.id}
                      onClick={() => setLightboxImage(img.url)}
                      className="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 aspect-video bg-white dark:bg-slate-950 cursor-pointer"
                    >
                      <img
                        src={img.url}
                        alt={img.caption || 'Gallery Image'}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/90 dark:bg-slate-800/90 text-primary-blue dark:text-blue-400 font-sans font-bold text-xs px-4 py-2 rounded-xl backdrop-blur-sm shadow-md">
                          View Full Image
                        </span>
                      </div>
                      {img.caption && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-semibold font-sans truncate">{img.caption}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ==========================================
            TAB 2: VIDEOS SYSTEM
            ========================================== */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {galleryVideos.map((video) => {
              const isPlaying = playingVideoId === video.id;
              return (
                <div key={video.id} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl p-4 shadow-sm flex flex-col justify-between">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 shadow-inner group">
                    {!isPlaying ? (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <button
                          onClick={() => setPlayingVideoId(video.id)}
                          className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary-blue hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                          aria-label="Play video"
                        >
                          <Play className="w-6 h-6 fill-current pl-1" />
                        </button>
                      </>
                    ) : (
                      <video
                        src={video.url}
                        controls={true}
                        autoPlay={true}
                        className="w-full h-full"
                        onPause={() => setPlayingVideoId(null)}
                        onError={() => setPlayingVideoId(null)}
                      />
                    )}
                  </div>
                  <div className="pt-4 flex items-center justify-between px-1">
                    <h4 className="font-sans font-bold text-slate-800 dark:text-slate-100 text-sm truncate">
                      {video.title}
                    </h4>
                    {isPlaying && (
                      <button
                        onClick={() => setPlayingVideoId(null)}
                        className="text-xs font-semibold text-red-600 hover:text-red-500 hover:underline cursor-pointer"
                      >
                        Close
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* -------------------------------------------------------------
          DYNAMIC LIGHTBOX VIEW WINDOW (Zoom image)
          ------------------------------------------------------------- */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/25 p-2 rounded-full transition-colors cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              src={lightboxImage}
              alt="Zoomed gallery preview image"
              className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl relative z-0"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
