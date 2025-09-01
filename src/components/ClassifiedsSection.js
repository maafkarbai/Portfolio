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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-white py-16 px-4 border-t-4 border-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
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
                    className="w-full border-2 border-black p-4 font-mono text-base focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all"
                    placeholder="John Doe"
                  />
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
                    className="w-full border-2 border-black p-4 font-mono text-base focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all"
                    placeholder="john@example.com"
                  />
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
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full border-2 border-black p-4 font-serif text-base focus:outline-none focus:ring-4 focus:ring-gray-200 resize-none transition-all"
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
              </motion.div>

              <motion.div 
                className="text-center pt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-12 py-4 text-lg font-mono tracking-wider hover:bg-gray-800 disabled:opacity-50 transition-colors border-2 border-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
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
                className="font-mono hover:underline"
                whileHover={{ scale: 1.05 }}
              >
                📧 voilad8a@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+97433209192" 
                className="font-mono hover:underline"
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