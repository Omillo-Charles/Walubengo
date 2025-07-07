import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            Let's <span className="text-[#D4AF37]">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-black/80 max-w-3xl mx-auto"
          >
            Ready to transform your event or organization? Let's discuss how we can work together to create lasting impact.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">Book Bennyhinn</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-black font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-black font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                    placeholder="+254 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-black font-medium mb-2">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select event type</option>
                    <option value="keynote">Keynote Speaking</option>
                    <option value="workshop">Workshop</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="corporate">Corporate Training</option>
                    <option value="hosting">Event Hosting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-black font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
                  placeholder="Tell us about your event and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={20} />
                Send Message
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <p className="text-black/80">hello@bennyhinn.com</p>
                  <p className="text-black/80">bookings@voiceofbenny.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Phone</h4>
                  <p className="text-black/80">+254 700 123 456</p>
                  <p className="text-black/80">+254 711 987 654</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Location</h4>
                  <p className="text-black/80">Nairobi, Kenya</p>
                  <p className="text-black/80">Available for travel nationwide</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-[#D4AF37]/20">
              <h4 className="font-semibold text-black mb-4">Follow the Journey</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#B8941F] transition-colors duration-300"
                >
                  <Instagram size={24} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#B8941F] transition-colors duration-300"
                >
                  <Youtube size={24} className="text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#B8941F] transition-colors duration-300"
                >
                  <MessageCircle size={24} className="text-white" />
                </a>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="bg-[#D4AF37]/10 rounded-lg p-6 border-2 border-[#D4AF37]/20">
              <h4 className="font-semibold text-black mb-2">Quick Connect</h4>
              <p className="text-black/80 mb-4">Need immediate assistance? Connect with us on WhatsApp.</p>
              <a
                href="https://wa.me/254700123456"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;