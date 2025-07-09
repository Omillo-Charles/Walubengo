import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Heart, MapPin, Calendar, Star, Globe, BookOpen, Users as UsersIcon, CheckCircle, Briefcase, Image as ImageIcon, Handshake, Mic } from 'lucide-react';
import 'flag-icon-css/css/flag-icons.min.css';

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
                From Nairobi to Global Impact
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                BennyHinn Walubengo
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                BennyHinn Walubengo is a dynamic force in the world of oratory, strategy, and education. As an accomplished minister of the gospel, author, and speech trainer, he has carved a unique niche for himself, inspiring and empowering individuals across various spheres.
              </p>
              <div className="flex items-center gap-4 text-gray-600 mb-4">
                <Calendar size={20} className="text-gold-600" />
                <span>Currently pursuing International Relations and Diplomacy at Daystar University</span>
              </div>
              <div className="text-gray-600 text-base">
                His academic journey at Daystar University has equipped him with a strong foundation in global affairs and strategic thinking. His passion for learning and personal growth is evident in his continuous pursuit of knowledge.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative flex flex-col items-center justify-center">
                <img
                  src="/Walubengo.png"
                  alt="Bennyhinn Walubengo portrait"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-gold-600">9+</div>
                  <div className="text-gray-600">Years of Impact</div>
                </div>
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
              As the founder of <span className='font-semibold text-gold-600'>iSpeak Academy</span>, Bennyhinn has dedicated his life to empowering the next generation through mentorship, speaking engagements, and transformational programs. His mission is clear and ambitious: to impact 10 million youth across Africa by 2029.
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

      {/* Add new sections for Founder, Chief Visionary, Core Pillars, Core Values, Impact Footprint */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founder & Chief Visionary Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col justify-center h-full"
            >
              <div className="flex items-center mb-6">
                <UsersIcon size={28} className="text-gold-600 mr-2" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Founder & Chief Visionary</h2>
              </div>
              <div className="space-y-6 text-lg text-gray-700">
                {/* iSpeak Society */}
                <div className="flex items-start gap-4">
                  <UsersIcon size={22} className="text-gold-600 mt-1" />
                  <div>
                    <span className="font-semibold text-gold-700 text-lg">iSpeak Society</span>
                    <div className="text-gray-700">Empowers African youth with communication skills to advocate for themselves, their communities, and the continent's future. <span className='text-gray-500'>(Nairobi-based, digital media across Africa)</span></div>
                  </div>
                </div>
                <div className="border-t border-gold-200 my-2" />
                {/* iSpeak Academy */}
                <div className="flex items-start gap-4">
                  <Mic size={22} className="text-gold-600 mt-1" />
                  <div>
                    <span className="font-semibold text-gold-700 text-lg">iSpeak Academy</span>
                    <div className="text-gray-700">Global platform for raising culture shapers through public speaking, leadership, and mindset transformation. <span className='text-gray-500'>(Storytelling, identity, cultural intelligence)</span></div>
                  </div>
                </div>
                <div className="border-t border-gold-200 my-2" />
                {/* Double B Consultancy */}
                <div className="flex items-start gap-4">
                  <Briefcase size={22} className="text-gold-600 mt-1" />
                  <div>
                    <span className="font-semibold text-gold-700 text-lg">Double B Consultancy</span>
                    <div className="text-gray-700">Strategic firm blending digital packaging and speech training. <span className='text-gray-500'>(Prepares for corporate, government, NGO spaces)</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Core Pillars & Awards Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col justify-center h-full"
            >
              <div className="flex items-center justify-center mb-4">
                <Award size={28} className="text-gold-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 text-center">Core Pillars & Awards</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full">
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center text-center">
                  <Star size={24} className="text-gold-600 mb-2" />
                  <span className="font-bold text-gold-700 text-lg mb-1">14 Awards</span>
                  <span className="text-gray-500 text-sm">in Public Speaking</span>
                </div>
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center text-center">
                  <Mic size={24} className="text-gold-600 mb-2" />
                  <span className="font-semibold text-gray-900 text-lg mb-1">Public Speaking</span>
                </div>
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center text-center">
                  <UsersIcon size={24} className="text-gold-600 mb-2" />
                  <span className="font-semibold text-gray-900 text-lg mb-1 whitespace-normal">Leadership &amp; Mentorship</span>
                </div>
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center text-center">
                  <Briefcase size={24} className="text-gold-600 mb-2" />
                  <span className="font-semibold text-gray-900 text-lg mb-1">Brand Packaging</span>
                </div>
              </div>
            </motion.div>
            {/* Core Values Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col justify-center h-full"
            >
              <div className="flex items-center justify-center mb-4">
                <CheckCircle size={28} className="text-gold-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 text-center">Core Values</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full">
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center">
                  <span className="text-3xl mb-2">💪</span>
                  <span className="font-semibold text-gray-900 text-lg mb-1">Empowerment</span>
                  <span className="text-gray-500 text-sm text-center">Especially youth, through communication</span>
                </div>
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center">
                  <span className="text-3xl mb-2">🏆</span>
                  <span className="font-semibold text-gray-900 text-lg mb-1">Excellence</span>
                  <span className="text-gray-500 text-sm text-center">High standards in training and mentorship</span>
                </div>
              </div>
            </motion.div>
            {/* Impact Footprint Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gold-100 flex flex-col justify-center h-full"
            >
              <div className="flex items-center justify-center mb-4">
                <Globe size={28} className="text-gold-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900 text-center">Impact Footprint</h2>
              </div>
              <p className="text-lg text-gray-700 text-center mb-6">Walubengo has worked with individuals and organizations across:</p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-full">
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center">
                  <Globe size={24} className="text-gold-600 mb-2" />
                  <span className="font-semibold text-gray-900 text-lg mb-1">Africa</span>
                </div>
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center">
                  <Globe size={24} className="text-gold-600 mb-2" />
                  <span className="font-semibold text-gray-900 text-lg mb-1">Europe</span>
                </div>
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center">
                  <Globe size={24} className="text-gold-600 mb-2" />
                  <span className="font-semibold text-gray-900 text-lg mb-1">Asia</span>
                </div>
                <div className="flex flex-col items-center bg-gold-50 border border-gold-100 rounded-xl p-6 shadow-sm h-full justify-center">
                  <Globe size={24} className="text-gold-600 mb-2" />
                  <span className="font-semibold text-gray-900 text-lg mb-1">America</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries Visited Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Countries <span className="text-gold-600">Visited</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Bennyhinn Walubengo has shared his message and inspired audiences across the globe. Here are some of the countries he has visited:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {/* Kenya */}
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full max-w-xs mx-auto">
                <span className="flag-icon flag-icon-ke text-7xl mb-2 drop-shadow-lg" style={{ fontSize: '5rem' }}></span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Kenya</span>
                <span className="text-gray-500 text-sm">Home country and base of operations</span>
              </div>
              {/* Uganda */}
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full max-w-xs mx-auto">
                <span className="flag-icon flag-icon-ug text-7xl mb-2 drop-shadow-lg" style={{ fontSize: '5rem' }}></span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Uganda</span>
                <span className="text-gray-500 text-sm">Business Executive Masterclass</span>
              </div>
              {/* Ethiopia */}
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full max-w-xs mx-auto">
                <span className="flag-icon flag-icon-et text-7xl mb-2 drop-shadow-lg" style={{ fontSize: '5rem' }}></span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Ethiopia</span>
                <span className="text-gray-500 text-sm">National youth conference</span>
              </div>
              {/* Mozambique */}
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full max-w-xs mx-auto">
                <span className="flag-icon flag-icon-mz text-7xl mb-2 drop-shadow-lg" style={{ fontSize: '5rem' }}></span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Mozambique</span>
                <span className="text-gray-500 text-sm">National youth outreach program</span>
              </div>
              {/* South Africa */}
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full max-w-xs mx-auto">
                <span className="flag-icon flag-icon-za text-7xl mb-2 drop-shadow-lg" style={{ fontSize: '5rem' }}></span>
                <span className="font-semibold text-gray-900 text-lg mb-1">South Africa</span>
                <span className="text-gray-500 text-sm">Youth education strategy meeting</span>
              </div>
              {/* Zambia */}
              <div className="bg-white border border-gold-100 rounded-2xl p-6 flex flex-col items-center shadow-lg w-full max-w-xs mx-auto">
                <span className="flag-icon flag-icon-zm text-7xl mb-2 drop-shadow-lg" style={{ fontSize: '5rem' }}></span>
                <span className="font-semibold text-gray-900 text-lg mb-1">Zambia</span>
                <span className="text-gray-500 text-sm">Building faith and exemplary business</span>
              </div>
            </div>
          </motion.div>
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