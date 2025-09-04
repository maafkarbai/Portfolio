"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { FullScreenFooter } from "@/components/ui/full-screen-footer";
import { Dropdown } from "@/components/ui/dropdown";
import Script from "next/script";

// Declare global grecaptcha interface
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (element: string | Element, options: any) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
    onRecaptchaLoad: () => void;
    onRecaptchaSuccess: (token: string) => void;
    onRecaptchaExpired: () => void;
    onRecaptchaError: () => void;
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaWidgetId, setRecaptchaWidgetId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if reCAPTCHA is required and available
      if (RECAPTCHA_SITE_KEY && window.grecaptcha && recaptchaLoaded) {
        const recaptchaResponse = window.grecaptcha.getResponse(recaptchaWidgetId || undefined);
        
        if (!recaptchaResponse) {
          setSubmitMessage("Please complete the reCAPTCHA verification.");
          setIsSubmitting(false);
          return;
        }
        
        console.log("reCAPTCHA Response:", recaptchaResponse);
      } else if (RECAPTCHA_SITE_KEY && !recaptchaLoaded) {
        setSubmitMessage("reCAPTCHA is still loading. Please try again in a moment.");
        setIsSubmitting(false);
        return;
      }

      // Simulate form submission with reCAPTCHA token
      console.log("Form Data:", formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });

      // Reset reCAPTCHA if it was used
      if (RECAPTCHA_SITE_KEY && window.grecaptcha && recaptchaLoaded && recaptchaWidgetId !== null) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId);
        } catch (resetError) {
          console.warn("reCAPTCHA reset failed:", resetError);
        }
      }

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Initialize reCAPTCHA when script loads
  useEffect(() => {
    if (RECAPTCHA_SITE_KEY) {
      // Define global callback functions
      (window as any).onRecaptchaLoad = () => {
        console.log("reCAPTCHA global callback triggered");
        initializeRecaptcha();
      };

      (window as any).onRecaptchaSuccess = (token: string) => {
        console.log("reCAPTCHA completed successfully");
        setSubmitMessage(""); // Clear any previous error messages
      };

      (window as any).onRecaptchaExpired = () => {
        console.warn("reCAPTCHA token expired");
        setSubmitMessage("reCAPTCHA verification expired. Please complete it again.");
      };

      (window as any).onRecaptchaError = () => {
        console.error("reCAPTCHA error occurred");
        setSubmitMessage("reCAPTCHA verification failed. Please try again.");
      };
    }

    return () => {
      // Cleanup global functions
      if ((window as any).onRecaptchaLoad) delete (window as any).onRecaptchaLoad;
      if ((window as any).onRecaptchaSuccess) delete (window as any).onRecaptchaSuccess;
      if ((window as any).onRecaptchaExpired) delete (window as any).onRecaptchaExpired;
      if ((window as any).onRecaptchaError) delete (window as any).onRecaptchaError;
    };
  }, []);

  const initializeRecaptcha = () => {
    console.log("Initializing reCAPTCHA...");
    if (window.grecaptcha && RECAPTCHA_SITE_KEY) {
      window.grecaptcha.ready(() => {
        try {
          const container = document.getElementById('recaptcha-container');
          if (container) {
            const widgetId = window.grecaptcha.render('recaptcha-container', {
              'sitekey': RECAPTCHA_SITE_KEY,
              'theme': 'light',
              'size': 'normal',
              'callback': (window as any).onRecaptchaSuccess,
              'expired-callback': (window as any).onRecaptchaExpired,
              'error-callback': (window as any).onRecaptchaError
            });
            setRecaptchaWidgetId(widgetId);
            setRecaptchaLoaded(true);
            console.log("reCAPTCHA widget rendered with ID:", widgetId);
          } else {
            console.error("reCAPTCHA container not found");
          }
        } catch (error) {
          console.error("Failed to render reCAPTCHA:", error);
          setSubmitMessage("reCAPTCHA failed to load. You can still submit the form.");
        }
      });
    } else {
      console.error("reCAPTCHA not available:", { grecaptcha: !!window.grecaptcha, siteKey: !!RECAPTCHA_SITE_KEY });
    }
  };

  const onRecaptchaLoadScript = () => {
    console.log("reCAPTCHA script loaded successfully");
    // Script has loaded, but the global callback will be triggered by Google's API
    // Try to initialize directly if the callback wasn't triggered
    setTimeout(() => {
      if (!recaptchaLoaded && window.grecaptcha) {
        console.log("Directly initializing reCAPTCHA...");
        initializeRecaptcha();
      }
    }, 1000);
  };
  
  const onRecaptchaErrorScript = () => {
    console.error("reCAPTCHA script failed to load");
    setSubmitMessage("reCAPTCHA failed to load. You can still submit the form.");
  };

  return (
    <div className="min-h-screen bg-white">
      {RECAPTCHA_SITE_KEY && (
        <Script
          src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
          onLoad={onRecaptchaLoadScript}
          onError={onRecaptchaErrorScript}
          strategy="lazyOnload"
        />
      )}
      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-[#4A90E2] via-[#2EC4B6] to-[#4A90E2] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl leading-8 text-white/90 max-w-2xl mx-auto">
            Ready to transform your business with technology? Get in touch and let's discuss your project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Get In Touch
                </h2>
                <div className="w-20 h-1 bg-[#4A90E2] mb-6 rounded-full"></div>
                <p className="text-lg leading-8 text-gray-600 mb-8">
                  We'd love to hear about your project and discuss how we can help bring your vision to life.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#4A90E2]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">hello@techlogies.com</p>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#2EC4B6]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF9505]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FF9505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-1">123 Tech Street, Suite 100</p>
                    <p className="text-gray-600 mb-1">Innovation District, NY 10001</p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1C1C1C]/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#1C1C1C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                    <p className="text-gray-600 mb-1">Available on our website</p>
                    <p className="text-sm text-gray-500">For quick questions and support</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#4A90E2] text-white rounded-full flex items-center justify-center hover:bg-[#3a7bd5] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#2EC4B6] text-white rounded-full flex items-center justify-center hover:bg-[#28a99c] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1C1C1C] text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Start Your Project</h3>
              
              {submitMessage && (
                <div 
                  className={`mb-6 p-4 rounded-xl border-2 ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-center">
                    <svg 
                      className={`w-5 h-5 mr-3 ${
                        submitMessage.includes('Thank you') ? 'text-green-600' : 'text-red-600'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {submitMessage.includes('Thank you') ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                    <p className="font-medium">{submitMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl input-enhanced text-high-contrast transition-all duration-300"
                      placeholder="John Smith"
                      aria-describedby="name-help"
                    />
                    <div id="name-help" className="sr-only">
                      Enter your full name for contact purposes
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl input-enhanced text-high-contrast transition-all duration-300"
                      placeholder="john@company.com"
                      aria-describedby="email-help"
                    />
                    <div id="email-help" className="sr-only">
                      Enter a valid email address where we can reach you
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl input-enhanced text-high-contrast transition-all duration-300"
                      placeholder="Your Company"
                      aria-describedby="company-help"
                    />
                    <div id="company-help" className="sr-only">
                      Optional: Enter your company or organization name
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl input-enhanced text-high-contrast transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                      aria-describedby="phone-help"
                    />
                    <div id="phone-help" className="sr-only">
                      Optional: Enter your phone number for direct contact
                    </div>
                  </div>
                </div>

                <Dropdown
                  label="Project Type"
                  required
                  value={formData.projectType}
                  onChange={(value) => setFormData({ ...formData, projectType: value })}
                  placeholder="Select a service"
                  options={[
                    { 
                      value: "website", 
                      label: "Web Development",
                      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    },
                    { 
                      value: "ecommerce", 
                      label: "E-commerce Solution",
                      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    },
                    { 
                      value: "software", 
                      label: "Custom Software",
                      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    },
                    { 
                      value: "cms", 
                      label: "Content Management System",
                      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    },
                    { 
                      value: "maintenance", 
                      label: "Website Maintenance",
                      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    },
                    { 
                      value: "consulting", 
                      label: "Digital Strategy Consulting",
                      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    },
                    { 
                      value: "other", 
                      label: "Other",
                      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    }
                  ]}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Dropdown
                    label="Budget Range"
                    value={formData.budget}
                    onChange={(value) => setFormData({ ...formData, budget: value })}
                    placeholder="Select budget range"
                    options={[
                      { 
                        value: "under-5k", 
                        label: "Under $5,000",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      },
                      { 
                        value: "5k-10k", 
                        label: "$5,000 - $10,000",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      },
                      { 
                        value: "10k-25k", 
                        label: "$10,000 - $25,000",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      },
                      { 
                        value: "25k-50k", 
                        label: "$25,000 - $50,000",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      },
                      { 
                        value: "50k-plus", 
                        label: "$50,000+",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      }
                    ]}
                  />

                  <Dropdown
                    label="Timeline"
                    value={formData.timeline}
                    onChange={(value) => setFormData({ ...formData, timeline: value })}
                    placeholder="Select timeline"
                    options={[
                      { 
                        value: "asap", 
                        label: "ASAP",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      },
                      { 
                        value: "1-2-months", 
                        label: "1-2 months",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      },
                      { 
                        value: "3-6-months", 
                        label: "3-6 months",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      },
                      { 
                        value: "6-plus-months", 
                        label: "6+ months",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      },
                      { 
                        value: "flexible", 
                        label: "Flexible",
                        icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>
                      }
                    ]}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl input-enhanced text-high-contrast transition-all duration-300 resize-none"
                    placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                    aria-describedby="message-help"
                  />
                  <div id="message-help" className="sr-only">
                    Provide detailed information about your project including goals, requirements, and timeline
                  </div>
                </div>

                {/* reCAPTCHA - Only show if site key is configured */}
                {RECAPTCHA_SITE_KEY && (
                  <div className="flex justify-center">
                    <div className="text-center">
                      {recaptchaLoaded ? (
                        <div 
                          id="recaptcha-container"
                          className="flex justify-center"
                        ></div>
                      ) : (
                        <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                          <div className="animate-pulse flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-gray-600">Loading security verification...</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-white font-semibold py-4 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-describedby="submit-help"
                >
                  <div id="submit-help" className="sr-only">
                    {isSubmitting ? 'Submitting your contact form' : 'Submit contact form to send your message'}
                  </div>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                  {RECAPTCHA_SITE_KEY && (
                    <>
                      <br />
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4A90E2] hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#4A90E2] hover:underline">
                        Terms of Service
                      </a>{" "}
                      apply.
                    </>
                  )}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Techlogies?
            </h2>
            <div className="w-20 h-1 bg-[#4A90E2] mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4A90E2]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fast Turnaround</h3>
              <p className="text-gray-600">
                We deliver projects on time without compromising quality. Most websites completed in 4-8 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#2EC4B6]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">
                100% satisfaction guarantee. We work until you're completely happy with the results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF9505]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#FF9505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Comprehensive maintenance and support packages to keep your website running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FullScreenFooter />
    </div>
  );
}