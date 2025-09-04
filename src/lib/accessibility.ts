/**
 * Accessibility utility functions for ensuring WCAG compliance
 */

// Color contrast utilities
export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (color: string) => {
    const rgb = hexToRgb(color);
    if (!rgb) return 0;
    
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function isContrastCompliant(
  foreground: string, 
  background: string, 
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal'
): boolean {
  const contrast = getContrastRatio(foreground, background);
  
  const requirements = {
    AA: { normal: 4.5, large: 3 },
    AAA: { normal: 7, large: 4.5 }
  };
  
  return contrast >= requirements[level][size];
}

// Focus management utilities
export function trapFocus(element: HTMLElement): () => void {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };
  
  element.addEventListener('keydown', handleKeyDown);
  firstElement?.focus();
  
  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

// Screen reader announcements
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const liveRegion = document.getElementById('live-region') || createLiveRegion();
  
  // Clear previous message
  liveRegion.textContent = '';
  liveRegion.setAttribute('aria-live', priority);
  
  // Add new message with slight delay to ensure it's announced
  setTimeout(() => {
    liveRegion.textContent = message;
  }, 100);
  
  // Clear message after announcement
  setTimeout(() => {
    liveRegion.textContent = '';
  }, 1000);
}

function createLiveRegion(): HTMLElement {
  const liveRegion = document.createElement('div');
  liveRegion.id = 'live-region';
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  document.body.appendChild(liveRegion);
  return liveRegion;
}

// Keyboard navigation helpers
export function isNavigationKey(key: string): boolean {
  const navigationKeys = [
    'Tab', 'Enter', ' ', 'Space', 'Escape', 'Esc',
    'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
    'Up', 'Down', 'Left', 'Right',
    'Home', 'End', 'PageUp', 'PageDown'
  ];
  return navigationKeys.includes(key);
}

export function getNextFocusableElement(
  current: Element, 
  direction: 'forward' | 'backward' = 'forward'
): HTMLElement | null {
  const focusableSelector = 
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  
  const focusableElements = Array.from(document.querySelectorAll(focusableSelector)) as HTMLElement[];
  const currentIndex = focusableElements.indexOf(current as HTMLElement);
  
  if (currentIndex === -1) return null;
  
  const nextIndex = direction === 'forward' 
    ? (currentIndex + 1) % focusableElements.length
    : (currentIndex - 1 + focusableElements.length) % focusableElements.length;
  
  return focusableElements[nextIndex];
}

// ARIA helpers
export function setAriaExpanded(element: Element, expanded: boolean): void {
  element.setAttribute('aria-expanded', expanded.toString());
}

export function setAriaSelected(element: Element, selected: boolean): void {
  element.setAttribute('aria-selected', selected.toString());
}

export function setAriaChecked(element: Element, checked: boolean | 'mixed'): void {
  element.setAttribute('aria-checked', checked.toString());
}

// Accessibility validation
export interface AccessibilityIssue {
  element: Element;
  issue: string;
  severity: 'error' | 'warning';
  suggestion: string;
}

export function validateAccessibility(container: Element = document.body): AccessibilityIssue[] {
  const issues: AccessibilityIssue[] = [];
  
  // Check for missing alt attributes on images
  container.querySelectorAll('img:not([alt])').forEach(img => {
    issues.push({
      element: img,
      issue: 'Image missing alt attribute',
      severity: 'error',
      suggestion: 'Add descriptive alt text for the image content'
    });
  });
  
  // Check for empty alt attributes on decorative images
  container.querySelectorAll('img[alt=""]').forEach(img => {
    if (!img.getAttribute('role') && !img.getAttribute('aria-hidden')) {
      issues.push({
        element: img,
        issue: 'Decorative image should be marked as such',
        severity: 'warning',
        suggestion: 'Add role="presentation" or aria-hidden="true" for decorative images'
      });
    }
  });
  
  // Check for missing form labels
  container.querySelectorAll('input:not([type="hidden"]), textarea, select').forEach(input => {
    const id = input.getAttribute('id');
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledBy = input.getAttribute('aria-labelledby');
    const label = id ? document.querySelector(`label[for="${id}"]`) : null;
    
    if (!label && !ariaLabel && !ariaLabelledBy) {
      issues.push({
        element: input,
        issue: 'Form input missing label',
        severity: 'error',
        suggestion: 'Add a label element, aria-label, or aria-labelledby attribute'
      });
    }
  });
  
  // Check for insufficient color contrast (simplified check)
  container.querySelectorAll('[style*="color"]').forEach(element => {
    const style = window.getComputedStyle(element);
    const color = style.color;
    const backgroundColor = style.backgroundColor;
    
    if (color && backgroundColor && color !== backgroundColor) {
      // This is a simplified check - in a real implementation,
      // you'd want to use the contrast checking functions above
      issues.push({
        element,
        issue: 'Potential color contrast issue',
        severity: 'warning',
        suggestion: 'Verify that color contrast meets WCAG AA standards (4.5:1 ratio)'
      });
    }
  });
  
  // Check for missing headings hierarchy
  const headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  let currentLevel = 0;
  
  headings.forEach(heading => {
    const level = parseInt(heading.tagName.charAt(1));
    
    if (level > currentLevel + 1) {
      issues.push({
        element: heading,
        issue: 'Heading level skipped',
        severity: 'warning',
        suggestion: `Heading levels should be sequential. Found h${level} after h${currentLevel}`
      });
    }
    
    currentLevel = level;
  });
  
  // Check for clickable elements without proper ARIA roles
  container.querySelectorAll('[onclick], [role="button"]').forEach(element => {
    if (element.tagName.toLowerCase() !== 'button' && !element.getAttribute('role')) {
      issues.push({
        element,
        issue: 'Clickable element missing proper role',
        severity: 'warning',
        suggestion: 'Add role="button" and ensure keyboard accessibility'
      });
    }
  });
  
  return issues;
}

// Motion preferences
export function respectsReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function respectsHighContrast(): boolean {
  return window.matchMedia('(prefers-contrast: high)').matches;
}

// Touch target validation
export function validateTouchTargets(container: Element = document.body): AccessibilityIssue[] {
  const issues: AccessibilityIssue[] = [];
  const interactiveElements = container.querySelectorAll('button, a, input, select, textarea, [role="button"]');
  
  interactiveElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const minSize = 44; // Minimum touch target size in pixels
    
    if (rect.width < minSize || rect.height < minSize) {
      issues.push({
        element,
        issue: 'Touch target too small',
        severity: 'warning',
        suggestion: `Interactive elements should be at least ${minSize}x${minSize} pixels`
      });
    }
  });
  
  return issues;
}

export default {
  getContrastRatio,
  isContrastCompliant,
  trapFocus,
  announceToScreenReader,
  isNavigationKey,
  getNextFocusableElement,
  setAriaExpanded,
  setAriaSelected,
  setAriaChecked,
  validateAccessibility,
  validateTouchTargets,
  respectsReducedMotion,
  respectsHighContrast
};