'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HireMeSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(1);
  const [userCountry, setUserCountry] = useState('US');

  // Mock services data (will be replaced with API call)
  const services = [
    {
      id: 1,
      name: 'Tech Support & Consultation',
      description: 'Professional technical support and consultation services for your existing projects, troubleshooting, code reviews, and technical guidance.',
      basePrice: 20.0,
      category: 'tech-support',
      duration: '1-2 days',
      features: [
        'Code review and debugging',
        'Technical troubleshooting', 
        'Performance optimization advice',
        'Best practices consultation',
        'Technology stack recommendations',
        '24-48 hour response time'
      ],
      icon: '🛠️'
    },
    {
      id: 2,
      name: 'Full-Stack Web Development',
      description: 'Complete web application development from concept to deployment. Modern, responsive, and scalable solutions using cutting-edge technologies.',
      basePrice: 500.0,
      category: 'fullstack',
      duration: '2-6 weeks',
      features: [
        'Full-stack web application development',
        'Modern React/Next.js frontend',
        'Robust backend API development',
        'Database design and implementation',
        'Responsive mobile-first design',
        'Deployment and hosting setup',
        'Code documentation and handover',
        'Post-launch support included'
      ],
      icon: '💻'
    }
  ];

  // Currency detection and conversion
  useEffect(() => {
    const detectUserLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          setUserCountry(data.country_code);
          
          // Set currency based on country
          const currencyMap = {
            'US': 'USD',
            'GB': 'GBP', 
            'EU': 'EUR',
            'CA': 'CAD',
            'AU': 'AUD',
            'IN': 'INR',
            'QA': 'QAR', // Qatar
            'AE': 'AED', // UAE
            'SA': 'SAR', // Saudi Arabia
            'EG': 'EGP', // Egypt
            'JP': 'JPY',
            'CN': 'CNY',
            'BR': 'BRL'
          };
          
          const userCurrency = currencyMap[data.country_code] || 'USD';
          setCurrency(userCurrency);
          
          if (userCurrency !== 'USD') {
            // Fetch exchange rate
            try {
              const exchangeResponse = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
              const exchangeData = await exchangeResponse.json();
              if (exchangeData.rates[userCurrency]) {
                setExchangeRate(exchangeData.rates[userCurrency]);
              }
            } catch (error) {
              console.log('Exchange rate fetch failed, using USD');
            }
          }
        }
      } catch (error) {
        console.log('Location detection failed, using defaults');
      }
    };

    detectUserLocation();
  }, []);

  const formatPrice = (priceUSD) => {
    const localPrice = priceUSD * exchangeRate;
    const currencySymbols = {
      'USD': '$',
      'GBP': '£',
      'EUR': '€',
      'CAD': 'C$',
      'AUD': 'A$',
      'INR': '₹',
      'QAR': 'QR',
      'AED': 'AED',
      'SAR': 'SR',
      'EGP': 'E£',
      'JPY': '¥',
      'CNY': '¥',
      'BRL': 'R$'
    };
    
    const symbol = currencySymbols[currency] || currency + ' ';
    
    if (currency === 'JPY' || currency === 'INR') {
      return `${symbol}${Math.round(localPrice).toLocaleString()}`;
    }
    
    return `${symbol}${localPrice.toFixed(2)}`;
  };

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  return (
    <>
      <section 
        id="hire-me" 
        className="bg-white py-12 px-4 border-t-4 border-black"
        aria-label="Hire Abdulla Farooq - Professional Services"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-b border-t border-black py-6 mb-8">
              <h2 className="font-heathergreen text-6xl font-bold tracking-wider mb-4">
                HIRE ME
              </h2>
              <p className="font-serif italic text-xl text-gray-700">
                Professional services tailored to your needs
              </p>
              <div className="mt-4 text-sm text-gray-600">
                💳 Prices shown in {currency} for your region ({userCountry})
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gray-50 border-4 border-black p-8 hover:shadow-lg transition-all group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                      <h3 className="font-heathergreen text-2xl font-bold">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>⏱️ {service.duration}</span>
                        <span className="font-bold text-lg text-black">
                          Starting at {formatPrice(service.basePrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="font-serif text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">What&apos;s included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 font-bold">✓</span>
                        <span className="font-serif">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => handleBookNow(service)}
                  className="w-full bg-black text-white py-4 px-6 font-mono text-lg tracking-wide hover:bg-gray-800 transition-colors border-2 border-black cursor-pointer group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  BOOK NOW →
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Me Section */}
          <motion.div 
            className="border-4 border-black bg-gray-50 p-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heathergreen text-3xl font-bold mb-6">
              Why Choose My Services?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <motion.div 
                  className="text-3xl"
                  animate={{ 
                    y: [0, -8, 0] 
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🚀
                </motion.div>
                <h4 className="font-bold text-lg">Fast Delivery</h4>
                <p className="font-serif text-sm text-gray-700">
                  Quick turnaround times without compromising quality
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">💡</div>
                <h4 className="font-bold text-lg">Modern Tech Stack</h4>
                <p className="font-serif text-sm text-gray-700">
                  Using the latest technologies and best practices
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🎯</div>
                <h4 className="font-bold text-lg">Tailored Solutions</h4>
                <p className="font-serif text-sm text-gray-700">
                  Custom solutions designed for your specific needs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <BookingModal
            service={selectedService}
            currency={currency}
            exchangeRate={exchangeRate}
            formatPrice={formatPrice}
            onClose={() => setShowBookingModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function BookingModal({ service, currency, exchangeRate, formatPrice, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          serviceId: service.id,
          currency,
          localPrice: service.basePrice * exchangeRate
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Booking failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white border-4 border-black p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center py-8">
            <h3 className="font-heathergreen text-3xl font-bold mb-4 text-green-600">
              BOOKING SUBMITTED! ✓
            </h3>
            <p className="font-serif text-lg mb-6">
              Thank you for your interest! I&apos;ll review your requirements and get back to you within 24 hours with a detailed proposal.
            </p>
            <button
              onClick={onClose}
              className="bg-black text-white px-8 py-3 font-mono tracking-wide hover:bg-gray-800 transition-colors"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-heathergreen text-2xl font-bold">
                  Book {service?.name}
                </h3>
                <p className="text-lg font-bold text-gray-700">
                  Starting at {formatPrice(service?.basePrice)}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-2xl hover:bg-gray-200 p-2 transition-colors"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border-2 p-3 font-mono ${errors.name ? 'border-red-500' : 'border-black'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-2 p-3 font-mono ${errors.email ? 'border-red-500' : 'border-black'}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block font-bold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-3 font-mono"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full border-2 p-3 font-serif resize-none ${errors.description ? 'border-red-500' : 'border-black'}`}
                  placeholder="Please describe your project requirements, goals, and any specific features you need..."
                />
                {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full border-2 border-black p-3 font-mono"
                  >
                    <option value="">Select budget range</option>
                    <option value={`${formatPrice(service?.basePrice)} - ${formatPrice(service?.basePrice * 2)}`}>
                      {formatPrice(service?.basePrice)} - {formatPrice(service?.basePrice * 2)}
                    </option>
                    <option value={`${formatPrice(service?.basePrice * 2)} - ${formatPrice(service?.basePrice * 5)}`}>
                      {formatPrice(service?.basePrice * 2)} - {formatPrice(service?.basePrice * 5)}
                    </option>
                    <option value={`${formatPrice(service?.basePrice * 5)}+`}>
                      {formatPrice(service?.basePrice * 5)}+
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2">Preferred Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full border-2 border-black p-3 font-mono"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="3-4 weeks">3-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border-2 border-black py-3 px-6 font-mono tracking-wide hover:bg-gray-100 transition-colors"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-black text-white py-3 px-6 font-mono tracking-wide hover:bg-gray-800 disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT BOOKING'}
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}