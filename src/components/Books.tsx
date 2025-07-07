import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Headphones, ExternalLink } from 'lucide-react';

const Books = () => {
  return (
    <section id="books" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            Books & <span className="text-[#D4AF37]">Media</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-black/80 max-w-3xl mx-auto"
          >
            Discover life-changing content through books, podcasts, and video content designed to inspire and empower.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Book Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <img
                src="https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="SPROUT: The Journey of a Dreamer"
                className="w-64 h-80 object-cover rounded-lg shadow-2xl mx-auto lg:mx-0"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-black mb-4">SPROUT: The Journey of a Dreamer</h3>
            <p className="text-lg text-black/80 mb-6 leading-relaxed">
              A powerful memoir that chronicles Bennyhinn's transformation from a young dreamer in Baba Dogo to a national voice of inspiration. This book offers practical insights and life lessons for anyone seeking to unlock their potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <BookOpen size={20} />
                Purchase Book
              </button>
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <ExternalLink size={20} />
                Read Sample
              </button>
            </div>
          </motion.div>

          {/* Media Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Podcast */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-transparent hover:border-[#D4AF37] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <Headphones size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black">Hinnfluence Podcast</h4>
                  <p className="text-black/70">Weekly insights on leadership and personal growth</p>
                </div>
              </div>
              <p className="text-black/80 mb-4">
                Join Bennyhinn every week as he shares practical wisdom, interviews successful leaders, and provides actionable advice for personal and professional development.
              </p>
              <button className="text-[#D4AF37] hover:text-[#B8941F] font-semibold flex items-center gap-2 transition-colors duration-300">
                <Play size={16} />
                Listen Now
              </button>
            </div>

            {/* Video Content */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-transparent hover:border-[#D4AF37] transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <Play size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black">Video Content</h4>
                  <p className="text-black/70">Motivational talks and TikTok inspiration</p>
                </div>
              </div>
              <p className="text-black/80 mb-4">
                Access powerful video content including keynote speeches, motivational talks, and daily inspiration on TikTok and YouTube.
              </p>
              <button className="text-[#D4AF37] hover:text-[#B8941F] font-semibold flex items-center gap-2 transition-colors duration-300">
                <ExternalLink size={16} />
                Watch Videos
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Books;