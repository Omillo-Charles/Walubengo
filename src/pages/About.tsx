import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Users size={32} />,
      title: "10M Youth Vision",
      description: "Committed to impacting 10 million youth by 2029 through transformational programs."
    },
    {
      icon: <Award size={32} />,
      title: "National Recognition",
      description: "Recognized as one of Kenya's most influential youth voices and speakers."
    },
    {
      icon: <Heart size={32} />,
      title: "Foundation Impact",
      description: "The Voice of Benny Foundation has transformed thousands of lives across Kenya."
    },
    {
      icon: <Target size={32} />,
      title: "Purpose-Driven",
      description: "Dedicated to empowering the next generation through mentorship and leadership."
    }
  ];

  const timeline = [
    {
      year: "1995",
      title: "Born in Baba Dogo",
      description: "Humble beginnings in Nairobi's Baba Dogo area, where the journey of transformation began."
    },
    {
      year: "2015",
      title: "Leadership Awakening",
      description: "Discovered his calling for youth empowerment and began speaking at local events."
    },
    {
      year: "2018",
      title: "Foundation Launch",
      description: "Founded The Voice of Benny Foundation to formalize his impact on youth development."
    },
    {
      year: "2020",
      title: "National Platform",
      description: "Gained national recognition as a motivational speaker and youth mentor."
    },
    {
      year: "2022",
      title: "Author & Podcaster",
      description: "Published 'SPROUT' and launched the Hinnfluence Podcast for wider reach."
    },
    {
      year: "2024",
      title: "Vision 2029",
      description: "Launched ambitious goal to impact 10 million youth across Africa by 2029."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-gold-100 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin size={16} className="inline mr-2" />
                From Baba Dogo to National Stage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Journey of <span className="text-gold-600">Purpose</span> and <span className="text-gold-600">Impact</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Born and raised in Baba Dogo, Nairobi, Bennyhinn Walubengo has risen to become one of Kenya's most influential youth voices. His journey from humble beginnings to national recognition is a testament to the power of purpose-driven leadership.
              </p>
              <div className="flex items-center gap-4 text-gray-600">
                <Calendar size={20} className="text-gold-600" />
                <span>Transforming lives since 2015</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/Walubengo.png"
                alt="Bennyhinn Walubengo portrait"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-gold-600">9+</div>
                <div className="text-gray-600">Years of Impact</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold-50 to-indigo-50 rounded-2xl p-12 border border-gold-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vision 2029: Transforming 10 Million Lives
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              As the founder of The Voice of Benny Foundation, Bennyhinn has dedicated his life to empowering the next generation through mentorship, speaking engagements, and transformational programs. His mission is clear and ambitious: to impact 10 million youth across Africa by 2029.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
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
              Impact & <span className="text-gold-600">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through dedication, authenticity, and unwavering commitment to youth empowerment, Bennyhinn has achieved remarkable milestones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gold-100 hover:border-gold-200 group"
              >
                <div className="text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="text-gold-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to national recognition - a timeline of transformation.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold-200"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {item.year.slice(-2)}
                </div>
                <div className="ml-8 bg-white p-6 rounded-xl shadow-lg border border-gold-100 flex-1">
                  <div className="text-gray-900 font-semibold mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl text-white/20 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 italic">
              Every young person has the potential to change the world. My role is simply to help them discover that potential and give them the tools to unleash it.
            </blockquote>
            <cite className="text-white font-semibold">— Bennyhinn Walubengo</cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;