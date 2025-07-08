import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Calendar, ArrowRight, Users, Play, Target } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: <Users size={24} />, number: "10M", label: "Youth Impact Goal" },
    { icon: <Award size={24} />, number: "500+", label: "Speaking Events" },
    { icon: <Target size={24} />, number: "1000+", label: "Lives Transformed" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-gold-light rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-gold-light rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold-light rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block bg-white text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                Transforming Lives Since 2018
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
              >
                Empowering <span className="text-gold-600">Voices</span>.
                <br />
                Inspiring <span className="text-gold-600">Leaders</span>.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Transforming the next generation through purpose-driven leadership, mentorship, and vision.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/contact"
                  className="bg-gold-600 hover:bg-gold-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:scale-105"
                >
                  <Calendar size={20} />
                  Book Bennyhinn
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/about"
                  className="border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Award size={20} />
                  My Story
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/Walubengo.png"
                  alt="Bennyhinn Walubengo portrait"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-600 rounded-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">2029</div>
                    <div className="text-xs">Vision</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gold-100 to-white border border-gold-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-gold-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We <span className="text-gold-600">Stand For</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Our core values drive everything we do, shaping our mission and inspiring our community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full">
                <span className="text-3xl mb-2">💪</span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Empowerment</span>
                <span className="text-gray-500 text-sm">We uplift and enable others to reach their full potential.</span>
              </div>
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full">
                <span className="text-3xl mb-2">🏆</span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Excellence</span>
                <span className="text-gray-500 text-sm">We pursue the highest standards in all our endeavors.</span>
              </div>
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full">
                <span className="text-3xl mb-2">🎤</span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Public Speaking</span>
                <span className="text-gray-500 text-sm">We inspire and educate through powerful, authentic communication.</span>
              </div>
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full">
                <span className="text-3xl mb-2">🧑‍🤝‍🧑</span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Leadership & Mentorship</span>
                <span className="text-gray-500 text-sm">We guide, mentor, and develop the next generation of leaders.</span>
              </div>
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full">
                <span className="text-3xl mb-2">📦</span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Brand Packaging</span>
                <span className="text-gray-500 text-sm">We help ideas and people stand out through creative brand solutions.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 shadow-lg border border-gold-light"
          >
            <div className="text-6xl text-gold-600 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 italic">
              Champions are made in the gym, but awarded in the ring.
            </blockquote>
            <cite className="text-gold-600 font-semibold">— Bennyhinn Walubengo</cite>
          </motion.div>
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
              Ready to Transform Your Event?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Book Bennyhinn for your next speaking engagement, workshop, or mentorship program.
            </p>
            <Link
              to="/contact"
              className="bg-white text-gold-600 hover:bg-gold-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:scale-105"
            >
              Get Started Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;