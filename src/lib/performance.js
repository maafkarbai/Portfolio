// Performance monitoring utilities
export const measurePerformance = (name, fn) => {
  if (typeof window !== 'undefined' && window.performance) {
    const startTime = performance.now();
    const result = fn();
    const endTime = performance.now();
    
    console.log(`${name} took ${endTime - startTime} milliseconds`);
    return result;
  }
  return fn();
};

// Web Vitals reporting
export const reportWebVitals = (metric) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
};

// Image optimization helper
export const getOptimizedImageSizes = (width) => {
  const sizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  return sizes.find(size => size >= width) || 3840;
};

// Lazy loading utilities
export const createIntersectionObserver = (callback, options = {}) => {
  if (typeof window === 'undefined') return null;
  
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Error boundary logging
export const logError = (error, errorInfo) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service like Sentry
    console.error('Portfolio Error:', error, errorInfo);
  }
};