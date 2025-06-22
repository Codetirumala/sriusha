import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaMobile, FaCloud, FaChartLine, FaShieldAlt, 
  FaBrain, FaDatabase, FaUsers, FaCog, FaRocket 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('development');

  const serviceCategories = [
    { id: 'development', label: 'Development', icon: <FaCode /> },
    { id: 'marketing', label: 'Marketing', icon: <FaChartLine /> },
    { id: 'consulting', label: 'Consulting', icon: <FaUsers /> },
    { id: 'innovation', label: 'Innovation', icon: <FaRocket /> }
  ];

  const services = {
    development: [
      {
        icon: <FaCode />,
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies',
        features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimized'],
        price: 'From $5,000'
      },
      {
        icon: <FaMobile />,
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications for iOS and Android',
        features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
        price: 'From $8,000'
      },
      {
        icon: <FaCloud />,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment solutions',
        features: ['AWS/Azure/GCP', 'DevOps Automation', 'CI/CD Pipelines', 'Monitoring'],
        price: 'From $3,000'
      }
    ],
    marketing: [
      {
        icon: <FaChartLine />,
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies to grow your business',
        features: ['SEO & SEM', 'Social Media', 'Content Marketing', 'Analytics'],
        price: 'From $2,000'
      },
      {
        icon: <FaUsers />,
        title: 'Social Media Management',
        description: 'Professional social media presence and engagement strategies',
        features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Performance Reports'],
        price: 'From $1,500'
      },
      {
        icon: <FaCog />,
        title: 'Marketing Automation',
        description: 'Automated marketing workflows and lead generation systems',
        features: ['Email Marketing', 'Lead Nurturing', 'CRM Integration', 'Analytics Dashboard'],
        price: 'From $3,500'
      }
    ],
    consulting: [
      {
        icon: <FaUsers />,
        title: 'IT Strategy Consulting',
        description: 'Strategic technology planning and digital transformation guidance',
        features: ['Technology Assessment', 'Digital Roadmap', 'Process Optimization', 'Change Management'],
        price: 'From $150/hour'
      },
      {
        icon: <FaDatabase />,
        title: 'Data Analytics',
        description: 'Data-driven insights and business intelligence solutions',
        features: ['Data Collection', 'Analysis & Reporting', 'Predictive Analytics', 'Dashboard Creation'],
        price: 'From $4,000'
      },
      {
        icon: <FaShieldAlt />,
        title: 'Cybersecurity',
        description: 'Comprehensive security assessments and protection strategies',
        features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
        price: 'From $5,000'
      }
    ],
    innovation: [
      {
        icon: <FaBrain />,
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions powered by artificial intelligence',
        features: ['Custom AI Models', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'],
        price: 'From $15,000'
      },
      {
        icon: <FaRocket />,
        title: 'Innovation Labs',
        description: 'Rapid prototyping and innovation workshops',
        features: ['Design Thinking', 'Rapid Prototyping', 'MVP Development', 'Innovation Strategy'],
        price: 'From $10,000'
      },
      {
        icon: <FaCog />,
        title: 'IoT Solutions',
        description: 'Internet of Things integration and smart device solutions',
        features: ['IoT Architecture', 'Sensor Integration', 'Data Processing', 'Remote Monitoring'],
        price: 'From $12,000'
      }
    ]
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Services</h1>
            <p>Comprehensive IT solutions tailored to your business needs</p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="service-categories">
        <div className="container">
          <div className="category-tabs">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="tab-icon">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <motion.div
            className="services-grid"
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {services[activeTab].map((service, index) => (
              <motion.div
                key={index}
                className="service-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-footer">
                  <div className="service-price">{service.price}</div>
                  <button className="btn btn-primary">Get Quote</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          
          <div className="process-steps">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and objectives' },
              { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap' },
              { step: '03', title: 'Development', desc: 'Building your solution with precision' },
              { step: '04', title: 'Launch', desc: 'Deploying and optimizing for success' }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{process.step}</div>
                <h3>{process.title}</h3>
                <p>{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and find the perfect solution for your business</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Schedule Consultation</button>
              <button className="btn btn-secondary">Download Brochure</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 