# Google reCAPTCHA Setup Guide

## Overview
Google reCAPTCHA has been integrated into the contact form to prevent spam and protect against automated submissions.

## Setup Instructions

### 1. Get reCAPTCHA Keys
1. Visit [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin/)
2. Click "Create" to register a new site
3. Choose reCAPTCHA v2 "I'm not a robot" Checkbox
4. Add your domain(s):
   - For development: `localhost`
   - For production: `yourdomain.com`
5. Accept the terms and submit
6. Copy your **Site Key** and **Secret Key**

### 2. Configure Environment Variables
Add these to your `.env.local` file:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### 3. Update the Contact Form
Replace `YOUR_SITE_KEY_HERE` in `src/app/contact/page.tsx` with your actual site key:
```tsx
data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
```

### 4. Server-Side Verification (Optional)
For production, you should verify the reCAPTCHA response on the server:

```javascript
// Example API route: /api/contact
export async function POST(request) {
  const { recaptchaToken, ...formData } = await request.json();
  
  // Verify reCAPTCHA
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;
  const recaptchaResponse = await fetch(verifyUrl, { method: 'POST' });
  const recaptchaResult = await recaptchaResponse.json();
  
  if (!recaptchaResult.success) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
  }
  
  // Process form submission...
}
```

## Features Implemented

### Client-Side Integration
- ✅ Google reCAPTCHA script loaded lazily
- ✅ reCAPTCHA widget rendered in contact form
- ✅ Form validation includes reCAPTCHA verification
- ✅ Automatic reset after successful submission
- ✅ Error handling for missing reCAPTCHA response

### Security Features
- **Spam Protection**: Prevents automated form submissions
- **Bot Detection**: Identifies suspicious behavior
- **Score-based Analysis**: Uses machine learning for risk assessment
- **Privacy Compliant**: Includes Google Privacy Policy and Terms links

### User Experience
- **Non-intrusive**: Only appears when needed
- **Accessible**: Works with screen readers and keyboard navigation
- **Responsive**: Adapts to mobile and desktop layouts
- **Fast Loading**: Script loads asynchronously

## Testing

### Development Testing
1. Use `localhost` as your test domain
2. Test with different browsers and devices
3. Verify form submission works with completed reCAPTCHA
4. Test error handling when reCAPTCHA is not completed

### Production Checklist
- [ ] Update site key in production environment
- [ ] Add production domain to reCAPTCHA console
- [ ] Test on live site
- [ ] Monitor reCAPTCHA analytics in Google Console
- [ ] Set up server-side verification

## Troubleshooting

### Common Issues
1. **"Invalid site key"**: Check that the site key matches your domain
2. **reCAPTCHA not loading**: Verify the script URL is correct
3. **Form not submitting**: Ensure reCAPTCHA response is being captured
4. **Mobile display issues**: Check responsive styling

### Debug Mode
To enable debug mode, add this to your reCAPTCHA parameters:
```html
data-callback="onRecaptchaSuccess"
data-expired-callback="onRecaptchaExpired"
```

## Best Practices
1. Always verify reCAPTCHA responses on the server
2. Handle network failures gracefully
3. Provide clear error messages
4. Test regularly to ensure functionality
5. Monitor for false positives and adjust settings if needed

## Support
- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/display)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/)
- [Troubleshooting Guide](https://developers.google.com/recaptcha/docs/faq)