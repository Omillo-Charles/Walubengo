import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mic, Users, Building, Calendar, ArrowRight, CheckCircle, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Mic size={48} />,
      title: "Professional Public Speaking",
      description: "Dynamic and impactful public speaking engagements tailored to inspire, educate, and motivate diverse audiences.",
      features: ["Keynote Addresses", "Panel Discussions", "Conference Talks", "Event Hosting"],
      price: "From $2,500",
      popular: true
    },
    {
      icon: <Users size={48} />,
      title: "Content Strategy",
      description: "Strategic content planning and messaging to help you communicate your vision and value.",
      features: ["Content Planning", "Strategic Messaging", "Storytelling", "Audience Engagement"],
      price: "From $1,500",
      popular: false
    },
    {
      icon: <CheckCircle size={48} />,
      title: "Proposal Writing",
      description: "Professional proposal writing services to help you secure opportunities and partnerships.",
      features: ["Grant Proposals", "Business Proposals", "Sponsorship Proposals", "Custom Requests"],
      price: "From $1,200",
      popular: false
    },
    {
      icon: <Mic size={48} />,
      title: "Public Speaking",
      description: "Coaching and training for individuals and teams to master the art of public speaking.",
      features: ["Speech Coaching", "Presentation Skills", "Confidence Building", "Voice Training"],
      price: "From $1,000",
      popular: false
    },
    {
      icon: <Users size={48} />,
      title: "Leadership & Mentorship",
      description: "Empowering individuals and groups through transformative leadership and mentorship programs.",
      features: ["One-on-One Mentoring", "Group Leadership Sessions", "Youth Empowerment", "Personal Development"],
      price: "From $1,500",
      popular: false
    },
    {
      icon: <CheckCircle size={48} />,
      title: "Branding Strategies",
      description: "Strategic branding services to help you define, position, and grow your brand for maximum impact.",
      features: ["Brand Positioning", "Identity Development", "Brand Messaging", "Brand Workshops"],
      price: "From $2,000",
      popular: false
    },
    {
      icon: <Building size={48} />,
      title: "Research & Innovation",
      description: "Cutting-edge research and innovative solutions to drive growth and address emerging challenges.",
      features: ["Market Research", "Trend Analysis", "Innovation Workshops", "Data-Driven Insights"],
      price: "From $3,000",
      popular: false
    },
    {
      icon: <Calendar size={48} />,
      title: "Partnership Building",
      description: "Building strategic partnerships to foster collaboration and expand opportunities for impact.",
      features: ["Stakeholder Engagement", "Collaborative Projects", "Network Expansion", "Resource Mobilization"],
      price: "From $1,800",
      popular: false
    },
    {
      icon: <Heart size={48} />,
      title: "Local–Glocal Impacts",
      description: "Driving positive change at both local and global levels through innovative programs and initiatives.",
      features: ["Community Projects", "Global Outreach", "Sustainable Development", "Impact Measurement"],
      price: "Custom Pricing",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your goals, audience, and event requirements to create a tailored approach."
    },
    {
      step: "02",
      title: "Custom Proposal",
      description: "Receive a detailed proposal with timeline, deliverables, and investment options."
    },
    {
      step: "03",
      title: "Preparation & Planning",
      description: "Collaborative planning phase to ensure every detail aligns with your vision."
    },
    {
      step: "04",
      title: "Delivery & Impact",
      description: "Professional execution that exceeds expectations and creates lasting impact."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-gold-light text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Professional Speaking & Mentorship Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your <span className="text-gold-600">Organization</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Empowering individuals and organizations through dynamic speaking, mentorship, and leadership development programs that create lasting impact.
            </p>
            <Link
              to="/contact"
              className="bg-gold-600 hover:bg-gold-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:scale-105"
            >
              Get Started Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our <span className="text-gold-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of services designed to meet your specific needs and objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  service.popular ? 'border-gold-600' : 'border-gold-light hover:border-gold-200'
                } group`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gold-600 mb-4">{service.price}</div>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    service.popular
                      ? 'bg-gold-600 hover:bg-gold-dark text-white'
                      : 'border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white'
                  }`}
                >
                  Get Quote
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-gold-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures exceptional results and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              Ready to Create Impact?
            </h2>
            <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can work together to transform your event, team, or organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-gold-600 hover:bg-gold-light px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105"
              >
                Book Consultation
                <Calendar size={20} />
              </Link>
              <a
                href="tel:+254794 959 895"
                className="border-2 border-white text-white hover:bg-white hover:text-gold-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Call Now
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;