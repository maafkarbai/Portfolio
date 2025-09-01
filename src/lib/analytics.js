// Google Analytics 4 implementation
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Portfolio-specific tracking events
export const trackProjectView = (projectTitle) => {
  event({
    action: 'view_project',
    category: 'Portfolio',
    label: projectTitle,
  });
};

export const trackContactSubmission = () => {
  event({
    action: 'submit_contact_form',
    category: 'Contact',
    label: 'Contact Form Submission',
  });
};

export const trackResumeDownload = () => {
  event({
    action: 'download_resume',
    category: 'Resume',
    label: 'Resume Download',
  });
};

export const trackSocialClick = (platform) => {
  event({
    action: 'click_social_link',
    category: 'Social',
    label: platform,
  });
};