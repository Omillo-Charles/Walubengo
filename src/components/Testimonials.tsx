import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "University Student",
      content: "Bennyhinn's mentorship completely transformed my perspective on leadership. His guidance helped me discover my purpose and gave me the confidence to pursue my dreams.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "James Ochieng",
      role: "Young Entrepreneur",
      content: "iSpeak Society changed my life. Through their programs, I learned valuable skills and connected with like-minded youth who share my vision.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Grace Wanjiku",
      role: "Corporate Executive",
      content: "Bennyhinn's corporate training session was exceptional. His insights on leadership and team building have significantly improved our organizational culture.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "David Kamau",
      role: "Youth Leader",
      content: "As a fellow youth leader, I've been inspired by Bennyhinn's dedication to empowering young people. His authentic approach makes him relatable and effective.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mary Njeri",
      role: "Event Organizer",
      content: "Bennyhinn's keynote speech at our conference was the highlight of the event. His message resonated with every attendee and left a lasting impact.",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            What People <span className="text-[#D4AF37]">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-black/80 max-w-3xl mx-auto"
          >
            Hear from those whose lives have been transformed through mentorship, speaking engagements, and leadership programs.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-[#D4AF37]/20"
          >
            <div className="flex items-center justify-center mb-6">
              <Quote size={48} className="text-[#D4AF37]" />
            </div>
            
            <p className="text-xl md:text-2xl text-black/80 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#D4AF37]"
              />
              <div className="text-center">
                <h4 className="text-xl font-bold text-black">{testimonials[currentIndex].name}</h4>
                <p className="text-[#D4AF37] font-medium">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft size={24} className="text-[#D4AF37]" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight size={24} className="text-[#D4AF37]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#D4AF37]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;