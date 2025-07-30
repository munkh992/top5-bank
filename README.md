# Investor Relations Website

A modern, professional investor relations website built with HTML5, CSS3, JavaScript, and PHP. Features a premium corporate design with animated backgrounds, responsive layout, and comprehensive functionality for global financial institutions.

## 🌟 Features

- **Premium Corporate Design** - Professional dark theme with blue/cyan accents
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - CSS keyframe animations and JavaScript interactions
- **Global Bank Links** - Access to 8+ major international bank investor relations
- **Contact Integration** - Meeting scheduler and contact forms
- **PHP Backend** - Contact form and newsletter handlers

## 🚀 Quick Start

1. **Download and Upload**
   ```bash
   # Upload all files to your web server
   # Ensure PHP 7.4+ is enabled
   ```

2. **Configure Email**
   ```php
   // Update in api/contact.php and api/newsletter.php
   $to = 'your-email@domain.com';
   ```

3. **Test**
   - Open `index.html` in your browser
   - Test contact form and newsletter subscription

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── assets/
│   ├── css/               # Modular CSS files
│   └── js/                # JavaScript functionality
├── api/                   # PHP backend handlers
└── documentation/         # Detailed guides
```

## 📚 Documentation

- **[Setup Guide](./documentation/setup-guide.md)** - Detailed installation and configuration
- **[API Reference](./documentation/api-reference.md)** - Backend API documentation
- **[Customization Guide](./documentation/customization-guide.md)** - Theming and customization

## 🎨 Customization

Update CSS variables in `assets/css/main.css`:

```css
:root {
  --color-primary: #3b82f6;    /* Primary blue */
  --color-secondary: #1e40af;  /* Secondary blue */
  --color-accent: #06b6d4;     /* Accent cyan */
}
```

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: PHP 7.4+
- **Animations**: CSS keyframes with JavaScript controls
- **Responsive**: Mobile-first design approach

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting for form submissions
- CSRF protection
- XSS prevention

## 📈 Performance

- Optimized animations using CSS transforms
- Efficient particle system
- Lazy loading for off-screen content
- Minified CSS/JS for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🆘 Support

For issues and questions:
- Check the [Setup Guide](./documentation/setup-guide.md)
- Review the [API Reference](./documentation/api-reference.md)
- Open an issue on the repository

## 📊 Analytics Integration

The website is ready for integration with:
- Google Analytics
- Adobe Analytics
- Custom tracking solutions

See the [Setup Guide](./documentation/setup-guide.md) for details.

---

**Built with ❤️ for the financial services industry**