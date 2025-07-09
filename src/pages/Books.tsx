import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Headphones, ExternalLink, Download, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Books = () => {
  const mediaContent = [
    {
      type: "community",
      title: "iSpeak Society Community",
      description: "Follow the iSpeak community on all social media platforms and stay connected for the latest stories, collaborations, and updates. Join the movement and be part of our vibrant family!",
      image: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=400",
      followers: "Join the Movement",
      views: "Share Your Story",
      platforms: [
        { name: "Instagram", url: "https://instagram.com/orator_walubengo" },
        { name: "Facebook", url: "https://facebook.com/hinn_walubengo" },
        { name: "TikTok", url: "https://tiktok.com/@orator_walubengo" }
      ]
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
      text: "The iSpeak Society Podcast is my weekly dose of motivation. Highly recommended!",
      rating: 5
    },
    {
      name: "Grace W.",
      text: "His content on social media keeps me motivated every single day.",
      rating: 5
    }
  ];

  const [notification, setNotification] = useState("");
  const [notificationIndex, setNotificationIndex] = useState<number|null>(null);
  const showNotification = (msg: string, idx: number) => {
    setNotification(msg);
    setNotificationIndex(idx);
    setTimeout(() => {
      setNotification("");
      setNotificationIndex(null);
    }, 4000);
  };

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
                  alt="Sprout Book Cover"
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
                Sprout: The Journey of a Dreamer
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Addresses the journey of every dreamer by discussing five things we cannot choose in life: our parents, background, tribe, skin color, and nationality. The book has sold thousands of copies in schools, churches, and corporate spaces.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
                  onClick={() => showNotification('Direct purchase from the website is currently unavailable. Please contact us for more information.', 0)}
                >
                  <BookOpen size={20} />
                  Purchase Book - $19.99
                </button>
                <button
                  className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => showNotification('Viewing a free sample is currently unavailable. Please contact us for more information.', 0)}
                >
                  <Download size={20} />
                  Free Sample
                </button>
              </div>
              {notification && notificationIndex === 0 && (
                <div className="mt-4 bg-gold-50 border border-gold-200 text-gold-700 px-6 py-4 rounded-lg shadow text-center font-medium transition-all duration-300 animate-fade-in">
                  {notification}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Books Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 360 Seconds of Destiny */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <img
                src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="360 Seconds of Destiny Book Cover"
                className="w-48 h-64 object-cover rounded-xl mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">360 Seconds of Destiny</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gives strategies on how to begin conversations, sustain relationships, earn opportunities, and attain results through communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
                  onClick={() => showNotification('Direct purchase from the website is currently unavailable. Please contact us for more information.', 1)}
                >
                  <BookOpen size={20} />
                  Purchase Book - $14.99
                </button>
                <button
                  className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => showNotification('Viewing a free sample is currently unavailable. Please contact us for more information.', 1)}
                >
                  <Download size={20} />
                  Free Sample
                </button>
              </div>
              {notification && notificationIndex === 1 && (
                <div className="mt-4 bg-gold-50 border border-gold-200 text-gold-700 px-6 py-4 rounded-lg shadow text-center font-medium transition-all duration-300 animate-fade-in">
                  {notification}
                </div>
              )}
            </motion.div>
            {/* Another Generation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <img
                src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Another Generation Book Cover"
                className="w-48 h-64 object-cover rounded-xl mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Another Generation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Gives similar strategies as 360 Seconds of Destiny focused on communication and relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
                  onClick={() => showNotification('Direct purchase from the website is currently unavailable. Please contact us for more information.', 2)}
                >
                  <BookOpen size={20} />
                  Purchase Book - $14.99
                </button>
                <button
                  className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => showNotification('Viewing a free sample is currently unavailable. Please contact us for more information.', 2)}
                >
                  <Download size={20} />
                  Free Sample
                </button>
              </div>
              {notification && notificationIndex === 2 && (
                <div className="mt-4 bg-gold-50 border border-gold-200 text-gold-700 px-6 py-4 rounded-lg shadow text-center font-medium transition-all duration-300 animate-fade-in">
                  {notification}
                </div>
              )}
            </motion.div>
            {/* The Language of Royalty */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <img
                src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="The Language of Royalty Book Cover"
                className="w-48 h-64 object-cover rounded-xl mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Language of Royalty</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A guide for redefining engagement with strategic relationships, understanding people’s needs and fears to foster deeper connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
                  onClick={() => showNotification('Direct purchase from the website is currently unavailable. Please contact us for more information.', 3)}
                >
                  <BookOpen size={20} />
                  Purchase Book - $14.99
                </button>
                <button
                  className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => showNotification('Viewing a free sample is currently unavailable. Please contact us for more information.', 3)}
                >
                  <Download size={20} />
                  Free Sample
                </button>
              </div>
              {notification && notificationIndex === 3 && (
                <div className="mt-4 bg-gold-50 border border-gold-200 text-gold-700 px-6 py-4 rounded-lg shadow text-center font-medium transition-all duration-300 animate-fade-in">
                  {notification}
                </div>
              )}
            </motion.div>
            {/* Is Your Network Working */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <img
                src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Is Your Network Working Book Cover"
                className="w-48 h-64 object-cover rounded-xl mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Is Your Network Working</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explores networking as a tool for building valuable relationships and creating value in various spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
                  onClick={() => showNotification('Direct purchase from the website is currently unavailable. Please contact us for more information.', 4)}
                >
                  <BookOpen size={20} />
                  Purchase Book - $14.99
                </button>
                <button
                  className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => showNotification('Viewing a free sample is currently unavailable. Please contact us for more information.', 4)}
                >
                  <Download size={20} />
                  Free Sample
                </button>
              </div>
              {notification && notificationIndex === 4 && (
                <div className="mt-4 bg-gold-50 border border-gold-200 text-gold-700 px-6 py-4 rounded-lg shadow text-center font-medium transition-all duration-300 animate-fade-in">
                  {notification}
                </div>
              )}
            </motion.div>
            {/* The Seven Questions the World Will Ask */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <img
                src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="The Seven Questions the World Will Ask Book Cover"
                className="w-48 h-64 object-cover rounded-xl mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Seven Questions the World Will Ask</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Emphasizes the importance of small details in communication, understanding audience, seasons of life, and conveying value through mindset and purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
                  onClick={() => showNotification('Direct purchase from the website is currently unavailable. Please contact us for more information.', 5)}
                >
                  <BookOpen size={20} />
                  Purchase Book - $14.99
                </button>
                <button
                  className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => showNotification('Viewing a free sample is currently unavailable. Please contact us for more information.', 5)}
                >
                  <Download size={20} />
                  Free Sample
                </button>
              </div>
              {notification && notificationIndex === 5 && (
                <div className="mt-4 bg-gold-50 border border-gold-200 text-gold-700 px-6 py-4 rounded-lg shadow text-center font-medium transition-all duration-300 animate-fade-in">
                  {notification}
                </div>
              )}
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

          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-0 md:px-0 flex flex-col md:flex-row gap-0">
            {/* Card 1: Image, Heading, Subtext */}
            <div className="flex-1 w-full bg-white rounded-none md:rounded-l-2xl md:rounded-r-none overflow-hidden shadow-lg flex flex-col items-center justify-center p-8">
              <img
                src={mediaContent[0].image}
                alt={mediaContent[0].title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{mediaContent[0].title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-center">{mediaContent[0].description}</p>
            </div>
            {/* Card 2: Stats and Social Links */}
            <div className="flex-1 w-full bg-white rounded-none md:rounded-r-2xl md:rounded-l-none overflow-hidden shadow-lg flex flex-col justify-center p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-700 flex flex-col items-center">
                  <span className="font-bold text-lg">100K+</span>
                  <span>Followers</span>
                </div>
                <div className="text-sm text-gray-700 flex flex-col items-center">
                  <span className="font-bold text-lg">2M+</span>
                  <span>Views</span>
                </div>
                <div className="text-sm text-gray-700 flex flex-col items-center">
                  <span className="font-bold text-lg">Global</span>
                  <span>Reach</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-2">Follow us on:</div>
                <div className="flex flex-col gap-3">
                  {mediaContent[0].platforms.map((platform, platformIndex) => (
                    <a
                      key={platformIndex}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold-100 text-gold-600 px-3 py-3 rounded-full text-sm hover:bg-gold-200 transition-colors duration-200 font-semibold w-full text-center"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Podcast <span className="text-gold-600">Highlights</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore our featured podcasts for inspiration, faith, and personal growth.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* M.I.C & SOUL Podcast */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">M.I.C & SOUL</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A podcast blending music, inspiration, and conversation for the soul. Tune in for uplifting stories and soulful discussions.
              </p>
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-2">Available on:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gold-200 transition-colors duration-200">Spotify</a>
                  <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gold-200 transition-colors duration-200">Apple Podcasts</a>
                  <a href="https://podcasts.google.com" target="_blank" rel="noopener noreferrer" className="bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gold-200 transition-colors duration-200">Google Podcasts</a>
                </div>
              </div>
            </motion.div>
            {/* Speech and Scripture Podcast */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Speech and Scripture</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dive into the intersection of powerful speech and biblical wisdom. Each episode explores scripture and its application to everyday life.
              </p>
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-700 mb-2">Available on:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gold-200 transition-colors duration-200">Spotify</a>
                  <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer" className="bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gold-200 transition-colors duration-200">Apple Podcasts</a>
                  <a href="https://podcasts.google.com" target="_blank" rel="noopener noreferrer" className="bg-gold-100 text-gold-600 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gold-200 transition-colors duration-200">Google Podcasts</a>
                </div>
              </div>
            </motion.div>
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
              <Link
                to="/contact#form"
                className="bg-white text-gold-600 hover:bg-gold-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
              >
                <BookOpen size={20} />
                Get the Book
              </Link>
              <Link
                to="/contact#form"
                className="border-2 border-white text-white hover:bg-white hover:text-gold-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} />
                Follow on Social
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Books;