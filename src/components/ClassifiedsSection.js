'use client';
import { useState } from 'react';

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
    <section id="contact" className="bg-white py-12 px-4 border-t-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="border-b border-t border-black py-4 mb-6">
            <h2 className="font-heathergreen text-5xl font-bold tracking-wider">
              CLASSIFIED ADVERTISEMENTS
            </h2>
            <p className="font-serif italic mt-2">Professional Services • Contact Information</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sample classified ads */}
          <div className="space-y-6">
            <div className="border-2 border-black p-4">
              <div className="bg-black text-white p-2 text-center mb-3">
                <p className="font-bold text-sm">SERVICES OFFERED</p>
              </div>
              <div className="font-serif text-sm space-y-2">
                <p className="font-bold">WEB DEVELOPMENT</p>
                <p>Custom websites, e-commerce platforms, web applications. Modern frameworks, responsive design, SEO optimization.</p>
                <p className="text-xs">Call for consultation</p>
              </div>
            </div>

            <div className="border border-gray-400 p-4">
              <div className="font-serif text-sm space-y-2">
                <p className="font-bold">FULL-STACK SOLUTIONS</p>
                <p>Database design, API development, server configuration, deployment services.</p>
                <p className="text-xs italic">Competitive rates available</p>
              </div>
            </div>

            <div className="border-2 border-black p-4">
              <div className="bg-gray-100 p-2 text-center mb-3">
                <p className="font-bold text-sm">FREELANCE AVAILABLE</p>
              </div>
              <div className="font-serif text-sm space-y-2">
                <p>Experienced developer seeking new projects. React, Next.js, Node.js specialist.</p>
                <p className="text-xs">Portfolio references upon request</p>
              </div>
            </div>
          </div>

          {/* Main contact form */}
          <div className="md:col-span-2">
            <div className="border-4 border-black p-8 bg-gray-50">
              <div className="text-center mb-6">
                <h3 className="font-heathergreen text-3xl font-bold mb-2">
                  PLACE YOUR MESSAGE
                </h3>
                <p className="font-serif text-sm italic">
                  Professional inquiries welcome • Quick response guaranteed
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="border-4 border-black p-6 bg-white">
                    <h4 className="font-heathergreen text-2xl font-bold mb-2">
                      MESSAGE RECEIVED!
                    </h4>
                    <p className="font-serif">
                      Your classified ad has been submitted to The Farooq Times editorial desk. 
                      Response within 24 hours guaranteed.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-serif font-bold text-sm mb-2">
                        ADVERTISER NAME*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block font-serif font-bold text-sm mb-2">
                        CONTACT TELEGRAPH*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-black p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                        placeholder="your.email@address.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif font-bold text-sm mb-2">
                      ADVERTISEMENT CONTENT*
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border-2 border-black p-3 font-serif text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                      placeholder="Compose your professional inquiry here. Include project details, timeline, and requirements..."
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white px-8 py-3 font-mono text-sm tracking-wider hover:bg-gray-800 disabled:opacity-50 transition-colors"
                    >
                      {isSubmitting ? 'SUBMITTING TO PRESS...' : 'SUBMIT CLASSIFIED AD'}
                    </button>
                  </div>

                  <div className="text-center text-xs font-serif text-gray-600 mt-4">
                    <p>* All fields required • Responses typically within 24 hours</p>
                    <p>The Farooq Times reserves the right to edit submissions for clarity</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Contact info footer */}
        <div className="mt-12 border-t border-black pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-bold mb-2">EDITORIAL OFFICE</h4>
              <p className="font-serif text-sm">Available for freelance projects</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">CIRCULATION DEPT</h4>
              <p className="font-serif text-sm">Follow on GitHub & LinkedIn</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">ADVERTISING RATES</h4>
              <p className="font-serif text-sm">Competitive pricing • Quality guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}