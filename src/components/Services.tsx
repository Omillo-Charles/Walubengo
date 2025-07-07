import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, Building, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Mic size={48} />,
      title: "Public Speaking",
      description: "Inspirational keynotes and motivational talks for conferences, schools, and events.",
      features: ["Keynote Speaking", "Motivational Talks", "Panel Discussions", "Workshops"]
    },
    {
      icon: <Users size={48} />,
      title: "Youth Mentorship",
      description: "One-on-one and group mentorship programs designed to unlock potential.",
      features: ["Personal Mentoring", "Group Sessions", "Leadership Training", "Goal Setting"]
    },
    {
      icon: <Building size={48} />,
      title: "Corporate Training",
      description: "Leadership development and team building programs for organizations.",
      features: ["Leadership Development", "Team Building", "Communication Skills", "Strategic Planning"]
    },
    {
      icon: <Calendar size={48} />,
      title: "Event Hosting",
      description: "Professional event hosting and facilitation for corporate and social events.",
      features: ["Event Hosting", "Master of Ceremonies", "Panel Moderation", "Conference Facilitation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-4"
          >
            Transform Your <span className="text-[#D4AF37]">Organization</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-black/80 max-w-3xl mx-auto"
          >
            Empowering individuals and organizations through dynamic speaking, mentorship, and leadership development programs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#D4AF37] group"
            >
              <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black/80 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-black/70">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 group"
          >
            Request a Quote
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;