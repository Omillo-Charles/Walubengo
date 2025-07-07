import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventType: '',
    eventDate: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        eventType: '',
        eventDate: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["hello@bennyhinn.com", "bookings@voiceofbenny.org"],
      action: "Send Email"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+254 700 123 456", "+254 711 987 654"],
      action: "Call Now"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: ["Nairobi, Kenya", "Available for travel nationwide"],
      action: "Get Directions"
    },
    {
      icon: <Clock size={24} />,
      title: "Response Time",
      details: ["Within 24 hours", "Monday - Friday"],
      action: "Learn More"
    }
  ];

  const faqs = [
    {
      question: "What is your speaking fee?",
      answer: "Speaking fees vary based on event type, duration, and location. Contact us for a personalized quote."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 4-6 weeks in advance to ensure availability."
    },
    {
      question: "Do you travel internationally?",
      answer: "Yes, we're available for international speaking engagements. Travel costs are additional."
    },
    {
      question: "What topics do you cover?",
      answer: "Leadership, youth empowerment, personal development, entrepreneurship, and motivational speaking."
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
              Let's Create Impact Together
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="text-gold-600">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Ready to transform your event or organization? Let's discuss how we can work together to create lasting impact and inspire meaningful change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Book Bennyhinn</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gold-50 border border-gold-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle size={48} className="text-gold-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gold-800 mb-2">Thank You!</h3>
                  <p className="text-gold-600">Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:border-gold-600 focus:outline-none transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:border-gold-600 focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:border-gold-600 focus:outline-none transition-colors duration-300"
                        placeholder="+254 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:border-gold-600 focus:outline-none transition-colors duration-300"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Event Type *</label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:border-gold-600 focus:outline-none transition-colors duration-300"
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
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Event Date</label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:border-gold-600 focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:border-gold-600 focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gold-200 rounded-lg focus:border-gold-600 focus:outline-none transition-colors duration-300"
                      placeholder="Tell us about your event, audience size, goals, and how we can help create impact..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:scale-105"
                  >
                    <Send size={20} />
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gold-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="text-white">{info.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gold-600 mb-1">{detail}</p>
                        ))}
                        <button className="text-gold-600 hover:text-gold-700 font-medium text-sm mt-2 transition-colors duration-200">
                          {info.action} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gold-50 rounded-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-4">Follow the Journey</h4>
                <p className="text-gold-600 mb-6">Stay connected for daily inspiration and updates.</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-700 transition-colors duration-300"
                  >
                    <Instagram size={24} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-700 transition-colors duration-300"
                  >
                    <Youtube size={24} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center hover:bg-gold-700 transition-colors duration-300"
                  >
                    <MessageCircle size={24} className="text-white" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-gold-50 rounded-2xl p-8 border-2 border-gold-100">
                <h4 className="font-bold text-gray-900 mb-2">Quick Connect</h4>
                <p className="text-gold-600 mb-4">Need immediate assistance? Connect with us on WhatsApp for faster response.</p>
                <a
                  href="https://wa.me/254700123456"
                  className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:scale-105"
                >
                  <MessageCircle size={20} />
                  WhatsApp Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-gold-600">Questions</span>
            </h2>
            <p className="text-xl text-gold-600">
              Get quick answers to common questions about booking and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gold-50 rounded-2xl p-8 shadow-lg border border-gold-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gold-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;