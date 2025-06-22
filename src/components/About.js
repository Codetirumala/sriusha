import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, FaUsers, FaLightbulb, FaHandshake, 
  FaAward, FaGlobe, FaHeart, FaStar 
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology solutions'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working together to achieve exceptional results'
    },
    {
      icon: <FaLightbulb />,
      title: 'Excellence',
      description: 'Delivering outstanding quality in everything we do'
    },
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'Building trust through honest and transparent relationships'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years in tech industry'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Technology expert specializing in scalable solutions'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative director with passion for user experience'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in modern frameworks'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: <FaAward /> },
    { number: '50+', label: 'Happy Clients', icon: <FaHeart /> },
    { number: '5+', label: 'Years Experience', icon: <FaGlobe /> },
    { number: '100%', label: 'Client Satisfaction', icon: <FaStar /> }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About TechVision</h1>
            <p>Empowering businesses through innovative technology solutions since 2019</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2019, TechVision emerged from a simple belief: technology should 
                empower businesses, not complicate them. What started as a small team of 
                passionate developers has grown into a comprehensive IT services and 
                consulting agency.
              </p>
              <p>
                We've helped hundreds of businesses transform their digital presence, 
                streamline operations, and achieve remarkable growth through innovative 
                technology solutions. Our commitment to excellence and client success 
                remains at the heart of everything we do.
              </p>
            </motion.div>
            
            <motion.div
              className="story-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="story-image">
                <FaRocket className="story-icon" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-member"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link">LinkedIn</a>
                      <a href="#" className="social-link">Twitter</a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Achievements
          </motion.h2>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3 className="achievement-number">{achievement.number}</h3>
                <p className="achievement-label">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <motion.div
              className="mission-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and digital transformation. We believe in creating lasting 
                partnerships and delivering exceptional value to our clients.
              </p>
              <div className="mission-stats">
                <div className="mission-stat">
                  <h3>Innovation</h3>
                  <p>Cutting-edge solutions</p>
                </div>
                <div className="mission-stat">
                  <h3>Quality</h3>
                  <p>Excellence in delivery</p>
                </div>
                <div className="mission-stat">
                  <h3>Partnership</h3>
                  <p>Long-term relationships</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;