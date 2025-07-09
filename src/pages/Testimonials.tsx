import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "University Student",
      content: "Bennyhinn's mentorship completely transformed my perspective on leadership. His guidance helped me discover my purpose and gave me the confidence to pursue my dreams fearlessly.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "University of Nairobi"
    },
    {
      name: "James Ochieng",
      role: "Young Entrepreneur",
      content: "iSpeak Society changed my life trajectory. Through their programs, I learned valuable business skills and connected with like-minded youth who share my vision for success.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "Tech Startup Founder"
    },
    {
      name: "Grace Wanjiku",
      role: "Corporate Executive",
      content: "Bennyhinn's corporate training session was exceptional. His insights on leadership and team building have significantly improved our organizational culture and employee engagement.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "Safaricom PLC"
    },
    {
      name: "David Kamau",
      role: "Youth Leader",
      content: "As a fellow youth leader, I've been inspired by Bennyhinn's dedication to empowering young people. His authentic approach and genuine care make him incredibly effective and relatable.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "Kenya Youth Council"
    },
    {
      name: "Mary Njeri",
      role: "Event Organizer",
      content: "Bennyhinn's keynote speech at our annual conference was the highlight of the event. His message resonated with every attendee and left a lasting impact that people still talk about.",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "Kenya Leadership Forum"
    },
    {
      name: "Peter Maina",
      role: "High School Principal",
      content: "Bennyhinn's session with our students was transformational. He has a unique ability to connect with young people and inspire them to believe in their potential and work towards their goals.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      company: "Alliance High School"
    }
  ];

  const categories = [
    { name: "All", count: testimonials.length },
    { name: "Students", count: 2 },
    { name: "Corporate", count: 2 },
    { name: "Organizations", count: 2 }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

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
              Real Stories, Real Impact
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What People <span className="text-gold-600">Say</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Hear from those whose lives have been transformed through mentorship, speaking engagements, and leadership programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-gold-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-gold-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-gold-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-gold-600 mb-2">1000+</div>
              <div className="text-gray-600">Lives Transformed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-xl border border-gold-100"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <Quote size={48} className="text-gold-600" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gold-600 font-medium mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
                
                <div className="text-center lg:text-right">
                  <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mx-auto border-4 border-gold-100 shadow-lg bg-gold-600 flex items-center justify-center">
                    <span className="text-white text-5xl lg:text-7xl font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gold-100 hover:border-gold-600 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft size={24} className="text-gray-400 group-hover:text-gold-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gold-100 hover:border-gold-600 transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight size={24} className="text-gray-400 group-hover:text-gold-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gold-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section id="testimonials-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More <span className="text-gold-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the growing community of individuals and organizations that have experienced transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gold-100 hover:border-gold-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full mr-4 border-2 border-gold-100 bg-gold-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gold-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{testimonial.content.substring(0, 120)}..."
                </p>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
              Experience the transformation that thousands have already discovered. Let's create your success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-gold-600 hover:bg-gold-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
              >
                Book Consultation
              </a>
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-gold-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
                onClick={() => {
                  const section = document.querySelector('#testimonials-grid');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View All Reviews
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;