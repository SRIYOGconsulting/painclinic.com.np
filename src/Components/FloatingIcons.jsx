import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaArrowUp, FaFacebook } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/floating-icons.css';

const FloatingIcons = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-icons">
      <motion.a
        href="tel:+9779701012345"
        className="floating-icon phone"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Call us now"
      >
        <FaPhone size={24} />
      </motion.a>
      
      <motion.a
        href="https://www.facebook.com/painclinicbirtamode"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon facebook"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Visit our Facebook page"
      >
        <FaFacebook size={24} />
      </motion.a>
      
      <motion.a
        href="https://wa.me/+9779701012345"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </motion.a>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="floating-icon back-to-top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingIcons;
