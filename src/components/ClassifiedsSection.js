'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClassifiedsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setApiError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setApiError('Network error. Please check your connection and try again.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    // Clear API error
    if (apiError) {
      setApiError('');
    }
  };

  return (
    <section 
      id="contact" 
      className="bg-white py-12 px-4 border-t-4 border-black"
      aria-label="Contact Abdulla Farooq - Full-Stack Developer for Hire"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-b border-t border-black py-4 mb-6">
            <h2 className="font-heathergreen text-5xl font-bold tracking-wider">
              GET IN TOUCH
            </h2>
            <p className="font-serif italic mt-2 text-lg">Ready to work together?</p>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div 
          className="bg-gray-50 border-4 border-black p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {submitted ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="border-4 border-black p-8 bg-white">
                <h4 className="font-heathergreen text-3xl font-bold mb-4">
                  MESSAGE SENT! ✓
                </h4>
                <p className="font-serif text-lg">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-serif font-bold text-lg mb-3">
                    YOUR NAME*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full border-2 p-4 font-mono text-base focus:outline-none focus:ring-4 transition-all cursor-text ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-black focus:ring-gray-200'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <motion.p 
                      className="text-red-600 text-sm mt-2 font-serif"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block font-serif font-bold text-lg mb-3">
                    YOUR EMAIL*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full border-2 p-4 font-mono text-base focus:outline-none focus:ring-4 transition-all cursor-text ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-black focus:ring-gray-200'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <motion.p 
                      className="text-red-600 text-sm mt-2 font-serif"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block font-serif font-bold text-lg mb-3">
                  YOUR MESSAGE* 
                  <span className="text-sm font-normal text-gray-600">({formData.message.length}/1000)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  maxLength={1000}
                  className={`w-full border-2 p-4 font-serif text-base focus:outline-none focus:ring-4 resize-none transition-all cursor-text ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-200' 
                      : 'border-black focus:ring-gray-200'
                  }`}
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
                {errors.message && (
                  <motion.p 
                    className="text-red-600 text-sm mt-2 font-serif"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div 
                className="text-center pt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                {apiError && (
                  <motion.div 
                    className="mb-6 p-4 border-2 border-red-500 bg-red-50 text-red-700"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-serif text-sm">{apiError}</p>
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                  className="bg-black text-white px-12 py-4 text-lg font-mono tracking-wider hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-2 border-black cursor-pointer"
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      SENDING MESSAGE...
                    </span>
                  ) : (
                    'SEND MESSAGE'
                  )}
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>

        {/* Direct contact info */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="border-t border-black pt-8">
            <h3 className="font-bold text-xl mb-6">OR REACH OUT DIRECTLY:</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
              <motion.a 
                href="mailto:voilad8a@gmail.com" 
                className="font-mono hover:underline cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                📧 voilad8a@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+97433209192" 
                className="font-mono hover:underline cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                📱 +974 3320 9192
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}