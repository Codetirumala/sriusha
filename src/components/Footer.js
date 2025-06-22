import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRocket, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, 
  FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', path: '/services' },
      { name: 'Mobile Development', path: '/services' },
      { name: 'Digital Marketing', path: '/services' },
      { name: 'IT Consulting', path: '/services' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Careers', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ],
    resources: [
      { name: 'Blog', path: '#' },
      { name: 'Case Studies', path: '#' },
      { name: 'Whitepapers', path: '#' },
      { name: 'Support', path: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' }
  ];

  return (
    <>
      <div className="footer-bg-hex"></div>
      <footer className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="footer-grid">
              {/* Company Info */}
              <motion.div
                className="footer-section company-info"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="footer-logo">
                  <FaRocket className="logo-icon" />
                  <span>Dynamic</span>
                </div>
                <p>
                  Empowering businesses through innovative technology solutions. 
                  We help companies transform their digital presence and achieve 
                  remarkable growth.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaEnvelope />
                    <span>hello@dynamic.com</span>
                  </div>
                  <div className="contact-item">
                    <FaPhone />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt />
                    <span>123 Tech Street, Innovation District</span>
                  </div>
                </div>
              </motion.div>

              {/* Services Links */}
              <motion.div
                className="footer-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3>Services</h3>
                <ul>
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company Links */}
              <motion.div
                className="footer-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3>Company</h3>
                <ul>
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources Links */}
              <motion.div
                className="footer-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3>Resources</h3>
                <ul>
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Newsletter Section */}
            <motion.div
              className="newsletter-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="newsletter-content">
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter for the latest insights and updates</p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="newsletter-input"
                  />
                  <button className="btn btn-primary newsletter-btn">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="social-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <p>&copy; {currentYear} Dynamic. All rights reserved.</p>
              <div className="footer-bottom-links">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms of Service</Link>
                <Link to="#">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 