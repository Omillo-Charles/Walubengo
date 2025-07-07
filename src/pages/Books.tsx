import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Headphones, ExternalLink, Download, Star } from 'lucide-react';

const Books = () => {
  const mediaContent = [
    {
      type: "podcast",
      title: "Hinnfluence Podcast",
      description: "Weekly insights on leadership, personal growth, and youth empowerment",
      image: "https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=400",
      episodes: "50+ Episodes",
      rating: "4.8/5",
      platforms: ["Spotify", "Apple Podcasts", "Google Podcasts"]
    },
    {
      type: "video",
      title: "Motivational Content",
      description: "Daily inspiration and life lessons on TikTok and YouTube",
      image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=400",
      followers: "100K+ Followers",
      views: "2M+ Views",
      platforms: ["TikTok", "YouTube", "Instagram"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "SPROUT changed my perspective on life. Bennyhinn's journey is truly inspiring.",
      rating: 5
    },
    {
      name: "James K.",
      text: "The Hinnfluence Podcast is my weekly dose of motivation. Highly recommended!",
      rating: 5
    },
    {
      name: "Grace W.",
      text: "His content on social media keeps me motivated every single day.",
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gold-100 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Books, Podcasts & Digital Content
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Inspiring <span className="text-gold-600">Content</span> for Growth
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover life-changing content through books, podcasts, and video content designed to inspire, educate, and empower your journey to success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Book Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">4.9/5 Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                SPROUT: The Journey of a <span className="text-gold-600">Dreamer</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A powerful memoir that chronicles Bennyhinn's transformation from a young dreamer in Baba Dogo to a national voice of inspiration. This book offers practical insights, life lessons, and actionable strategies for anyone seeking to unlock their potential and create meaningful impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gold-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gold-600">250+</div>
                  <div className="text-gray-600">Pages</div>
                </div>
                <div className="bg-gold-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-gold-600">15</div>
                  <div className="text-gray-600">Chapters</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105">
                  <BookOpen size={20} />
                  Purchase Book - $19.99
                </button>
                <button className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Free Sample
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital <span className="text-gold-600">Media</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected and inspired through our podcast, video content, and social media presence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mediaContent.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {content.type === 'podcast' ? (
                        <Headphones size={20} />
                      ) : (
                        <Play size={20} />
                      )}
                      <span className="text-sm font-medium capitalize">{content.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{content.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-500">
                      {content.episodes || content.followers}
                    </div>
                    <div className="text-sm text-gray-500">
                      {content.rating || content.views}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Available on:</div>
                    <div className="flex flex-wrap gap-2">
                      {content.platforms.map((platform, platformIndex) => (
                        <span
                          key={platformIndex}
                          className="bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-sm"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                    {content.type === 'podcast' ? (
                      <>
                        <Headphones size={20} />
                        Listen Now
                      </>
                    ) : (
                      <>
                        <Play size={20} />
                        Watch Now
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reader <span className="text-gold-600">Reviews</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what readers and listeners are saying about our content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Transformation Today
            </h2>
            <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
              Join thousands of others who have been inspired and transformed by Bennyhinn's content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gold-600 hover:bg-gold-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105">
                <BookOpen size={20} />
                Get the Book
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gold-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2">
                <ExternalLink size={20} />
                Follow on Social
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Books;