import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaCode, FaChartLine, FaUsers, FaArrowRight, 
  FaStar, FaArrowUp, FaSearch, FaLaptopCode, FaMousePointer, 
  FaShareAlt, FaEnvelopeOpenText, FaPenNib
} from 'react-icons/fa';
import { FiArrowUp, FiBarChart2, FiUsers, FiArrowRight } from 'react-icons/fi';
import heroImage from '../images/image.png';
import googleIcon from '../images/home-3-hero-banner-shep-1.png';
import slackIcon from '../images/home-3-hero-banner-shep-2.png';
import elementorIcon from '../images/home-3-hero-banner-shep-3.png';
import ratingImage from '../images/rating.webp';
import underlineImage from '../images/text-shep-1.png';
import aboutUsImage from '../images/about-us.webp';
import clientSayImage from '../images/client-say.png';
import './Home.css';

const services = [
  {
    icon: <FaSearch />,
    title: 'Search Engine Optimization',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Website Development',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
    icon: <FaMousePointer />,
    title: 'Pay-Per-Click Advertising',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
    icon: <FaShareAlt />,
    title: 'Social Media Marketing',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: 'Email Marketing',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  },
  {
    icon: <FaPenNib />,
    title: 'Content Marketing',
    description: 'Share Processes And Data Secure Lona Need To Know Basis Our Team Assured Your Web Site Is Always Safe And',
  }
];

const testimonialsData = [
  {
    quote: "I'm Pleased To Say That Boyerman Agement.Com Has Drawn Rave Reviews. It Positions Us As A World-Class Organization And Adds Credibility To Our Brand. I've Seen No.",
    author: 'Aiden Markram',
    role: 'Digital Marketing'
  },
  {
    quote: 'Working with this team was a game-changer for our business. Their expertise in digital marketing is unmatched, and the results have been phenomenal.',
    author: 'Jane Doe',
    role: 'CEO, Innovate Inc.'
  },
  {
    quote: 'The return on investment has been incredible. Their strategies are not only effective but also sustainable for long-term growth.',
    author: 'John Smith',
    role: 'Marketing Manager'
  }
];

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousTestimonial = () => {
    const isFirstSlide = currentTestimonial === 0;
    const newIndex = isFirstSlide ? testimonialsData.length - 1 : currentTestimonial - 1;
    setCurrentTestimonial(newIndex);
  };

  const goToNextTestimonial = () => {
    const isLastSlide = currentTestimonial === testimonialsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentTestimonial + 1;
    setCurrentTestimonial(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  useEffect(() => {
    const createDots = () => {
      const dotsContainer = document.querySelector('.background-dots');
      if (!dotsContainer) return;
      dotsContainer.innerHTML = ''; // Clear existing dots
      for (let i = 0; i < 20; i++) { // Reduced dot count
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = Math.random() * 100 + 'vw';
        dot.style.top = Math.random() * 100 + 'vh';
        dot.style.animationDelay = Math.random() * 5 + 's';
        dot.style.animationDuration = 3 + Math.random() * 5 + 's';
        dotsContainer.appendChild(dot);
      }
    };
    createDots();
  }, []);

  const offerings = [
    {
      title: 'Design & UI/UX Experience',
      description: 'UI/UX Design, Motion, Illustration, Branding, Photography',
      icon: (
        <svg width="105" height="158" viewBox="0 0 105 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.2525 116.583L0.931396 97.8413C2.71505 103.854 7.30486 119.878 11.5198 133.881C24.3127 142.035 41.8175 153.334 49.1187 157.977L33.2525 116.583Z" fill="#CCFF00"></path>
            <path d="M61.7937 79.9978L46.3699 83.8451L38.0979 114.533L54.3777 157.005C63.6951 150.759 84.7931 136.494 94.7151 129.781L61.7937 79.9978Z" fill="#082CAF"></path>
            <path d="M53.8435 0.0422363L65.3697 75.8675L97.4639 124.398C99.2864 116.565 103.06 100.267 104.622 94.9749C94.6678 76.3773 62.8149 16.7428 53.8435 0.0422363Z" fill="#1954ED"></path>
            <path d="M45.0113 78.2514L45.9577 78.5099L59.9267 75.0259L48.5642 0.284912C43.6355 10.4526 32.7139 32.9679 23.2686 52.4818L45.0113 78.2514Z" fill="#CCFF00"></path>
            <path d="M33.6777 110.735L41.3882 82.1231L20.7096 57.613C13.048 71.1498 5.59599 85.2883 1.94971 92.3382L33.6777 110.735Z" fill="#1954ED"></path>
        </svg>
      ),
      icon_placeholder: 'ICON 1'
    },
    {
      title: 'Development & IT Solutions',
      description: 'Web Development, Mobile Apps, Software Solutions, IT Consulting',
      icon: (
        <svg width="69" height="167" viewBox="0 0 69 167" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.3163 118.899L67.5418 148.197C56.9474 165.278 33.4836 171.131 15.1337 161.269C9.02319 157.985 4.6188 153.885 1.09082 148.197L34.3163 118.899Z" fill="#1954ED"></path>
            <path d="M68.6331 118.899H0V51.0325H68.6331V118.899Z" fill="#CCFF00"></path>
            <path d="M34.3166 0L68.5104 51.0324H0.122803L34.3166 0Z" fill="#104CBA"></path>
        </svg>
      ),
      icon_placeholder: 'ICON 2'
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'SEO Optimization, Social Media Marketing, Content Strategy, Analytics',
      icon: (
        <svg width="167" height="167" viewBox="0 0 167 133" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.362901 132.428C0.135249 102.41 24.6519 77.8936 55.1229 77.6693C85.5938 77.445 110.48 101.597 110.708 131.616C110.71 131.886 110.71 132.158 110.708 132.428" fill="#082CAF"></path>
            <path d="M54.9514 0.313232C75.9962 0.313232 93.0565 17.1199 93.0565 37.8523C93.0565 58.5847 75.9962 75.3917 54.9514 75.3917C33.9065 75.3917 16.8462 58.5847 16.8462 37.8523C16.8462 17.1199 33.9065 0.313232 54.9514 0.313232Z" fill="#CCFF00"></path>
            <path d="M131.775 0.313232H166.194V132.862H131.775V0.313232Z" fill="#1954ED"></path>
        </svg>
      ),
      icon_placeholder: 'ICON 3'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="home">
      <div className="background-dots"></div>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Digital Marketing
              <span>
                For Your Business
                <img src={underlineImage} alt="underline" className="underline-img" />
              </span>
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Coalition Technologies, we tightly weave our website design and search 
              engine optimization work to exceed our clients goals.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact" className="btn btn-primary">
                Free Trail Now
              </Link>
              <div className="rating">
                <img src={ratingImage} alt="4.9 Star Rating on Google" />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-image-container">
              <img src={heroImage} alt="Digital Marketing For Your Business" className="hero-image" />
            </div>
            {/* Floating icons can be added here once you provide the main image */}
            <motion.div className="floating-icon icon-1" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1, duration: 1}}><img src={googleIcon} alt="Google Icon" /></motion.div>
            <motion.div className="floating-icon icon-2" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.2, duration: 1}}><img src={slackIcon} alt="Slack Icon" /></motion.div>
            <motion.div className="floating-icon icon-3" initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 1.4, duration: 1}}><img src={elementorIcon} alt="Elementor Icon" /></motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="section-subtitle">WHAT WE OFFER</p>
            <h2 className="section-title">
              We Offer A Wide Range Of
              <span>
                Digital Marketing
                <img src={underlineImage} alt="underline" className="underline-img" />
              </span>
            </h2>
          </motion.div>

          <div className="offer-grid">
            {offerings.map((offer, index) => (
              <motion.div
                key={index}
                className="offer-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="offer-content">
                  <p className="offer-description">{offer.description}</p>
                  <div className="offer-icon-container">
                    {offer.icon ? offer.icon : (
                      <div className="offer-icon-placeholder">
                        <span>{offer.icon_placeholder}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="offer-footer">
                  <h3 className="offer-title">{offer.title}</h3>
                  <FaArrowRight className="offer-arrow" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

               {/* About Us Section */}
      <section className="about-us-section">
        <div className="about-us-container">
          <motion.div 
            className="about-us-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img src={aboutUsImage} alt="Digital Marketing Services" className="about-us-image" />
          </motion.div>
          <motion.div 
            className="about-us-right"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="about-us-tagline">ABOUT US</p>
            <h2 className="about-us-title">The Digital Marketing Services Company</h2>
            <p className="about-us-description">
              Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry Ftyuu Ipsum Has Been The Industry's Standard Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting.
            </p>
            <div className="about-us-features">
              <div className="feature">
                <div className="feature-icon-container">
                  <FiBarChart2 />
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Guaranteed Results</h3>
                  <p className="feature-description">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon-container">
                  <FiUsers />
                </div>
                <div className="feature-text">
                  <h3 className="feature-title">Team of Industry Experts</h3>
                  <p className="feature-description">Consectetur Amet Dolor Sit Comeneer Ilremsilom Dolce Issilm Acalrm Leoinsion Duycoqun Consemlaint Lorem.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
       
      </section>
  

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="services-preview-header">
            <motion.p
              className="services-preview-super-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              TRUSTED DIGITAL AGENCY
            </motion.p>
            <motion.h2
              className="services-preview-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="typing-cursor" aria-hidden="true"></span>We offer a wide range of<br />digital <span className="highlight">marketing</span>
            </motion.h2>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="service-read-more">
                  Read More <FiArrowRight className="arrow-icon" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-section">
        <div className="marquee-container">
          <div className="marquee marquee-top">
            <div className="marquee-content">
              {[...services, ...services].map((service, index) => (
                <span key={index}>{service.title}</span>
              ))}
            </div>
          </div>
          <div className="marquee marquee-bottom">
            <div className="marquee-content reverse">
              {[...services, ...services].map((service, index) => (
                <span key={index}>{service.title}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
         <img src={clientSayImage} alt="background" className="testimonial-background" />
         <div className="testimonial-content">
            <h2>What Our Clients Say</h2>
            <p className="testimonial-quote">
              "{testimonialsData[currentTestimonial].quote}"
            </p>
            <div className="testimonial-author">
              {testimonialsData[currentTestimonial].author}
              <span>{testimonialsData[currentTestimonial].role}</span>
            </div>
         </div>

         <button onClick={goToPreviousTestimonial} className="testimonial-nav-button prev">
          &lt;
        </button>
        <button onClick={goToNextTestimonial} className="testimonial-nav-button next">
          &gt;
        </button>
      </section>

      {/* Latest Blogs Section */}
      <section className="latest-blogs-section">
        <div className="latest-blogs-container">
          <p className="latest-blogs-subtitle">OUR LATEST BLOGS</p>
          <h2 className="latest-blogs-title">
            Empowering Brands With<br />
            Digital <span className="highlight-underline">Brilliance
              <img src={require('../images/text-shep-1.png')} alt="underline" className="underline-img" />
            </span>
          </h2>
          <div className="blogs-grid">
            {/* Left large blog card */}
            <div className="blog-card blog-card-large vertical-layout">
              <img src={require('../images/post-1.webp')} alt="Blog 1" className="blog-image" />
              <div className="blog-info">
                <div className="blog-meta">
                  <span className="blog-category">Business</span>
                  <span className="blog-date">22 june 2025</span>
                </div>
                <h3 className="blog-title">How to Prepare for your First Track his consumer-focused</h3>
                <a href="#" className="blog-read-more">Read More</a>
              </div>
            </div>
            {/* Right small blog cards */}
            <div className="blog-card-group">
              <div className="blog-card">
                <img src={require('../images/post-2.webp')} alt="Blog 2" className="blog-image" />
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-category">Business</span>
                    <span className="blog-date">22 june 2025</span>
                  </div>
                  <h3 className="blog-title">Stay Ahead in the Digital Side Pocket</h3>
                  <a href="#" className="blog-read-more">Read More</a>
                </div>
              </div>
              <div className="blog-card">
                <img src={require('../images/post-3.webp')} alt="Blog 3" className="blog-image" />
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-category">Business</span>
                    <span className="blog-date">22 june 2025</span>
                  </div>
                  <h3 className="blog-title">Our Futuristic Marketing Realtor Should Read</h3>
                  <a href="#" className="blog-read-more">Read More</a>
                </div>
              </div>
              <div className="blog-card">
                <img src={require('../images/post-4.webp')} alt="Blog 4" className="blog-image" />
                <div className="blog-info">
                  <div className="blog-meta">
                    <span className="blog-category">Business</span>
                    <span className="blog-date">02 Apr 2024</span>
                  </div>
                  <h3 className="blog-title">Grow your appraisal skills and real estate career?</h3>
                  <a href="#" className="blog-read-more">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
 

      {/* CTA Section */}
      

      {/* Scroll to top button */}
      <motion.button
        className={`scroll-to-top-btn${showScroll ? ' show' : ''}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
        initial={{ scale: 0 }}
        animate={{ scale: showScroll ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp />
      </motion.button>
    </div>
  );
};

export default Home; 