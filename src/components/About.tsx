import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Users size={32} />,
      title: "10M Youth",
      description: "Vision 2029 Impact Goal"
    },
    {
      icon: <Award size={32} />,
      title: "National Speaker",
      description: "Keynote at Major Events"
    },
    {
      icon: <Heart size={32} />,
      title: "Foundation",
      description: "The Voice of Benny"
    },
    {
      icon: <Target size={32} />,
      title: "Mentorship",
      description: "Thousands Impacted"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              From <span className="text-[#D4AF37]">Baba Dogo</span> to the <span className="text-[#D4AF37]">National Stage</span>
            </h2>
            
            <p className="text-lg text-black/80 mb-6 leading-relaxed">
              Born and raised in Baba Dogo, Nairobi, Bennyhinn Walubengo has risen to become one of Kenya's most influential youth voices. His journey from humble beginnings to national recognition is a testament to the power of purpose-driven leadership.
            </p>
            
            <p className="text-lg text-black/80 mb-8 leading-relaxed">
              As the founder of The Voice of Benny Foundation, Bennyhinn has dedicated his life to empowering the next generation through mentorship, speaking engagements, and transformational programs. His mission is clear: to impact 10 million youth by 2029.
            </p>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#D4AF37]/10 border-l-4 border-[#D4AF37] p-6 rounded-lg"
            >
              <p className="text-xl font-semibold text-black italic">
                "Champions are made in the gym, but awarded in the ring."
              </p>
              <p className="text-[#D4AF37] font-medium mt-2">- Bennyhinn Walubengo</p>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-[#D4AF37]/20 rounded-lg p-6 text-center hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-[#D4AF37] mb-3 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{achievement.title}</h3>
                <p className="text-black/70">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;