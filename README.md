# Voidstrap Website

Modern, minimal website for Voidstrap - a next-generation Roblox bootstrapper.

## Features

- **Clean minimal design** - Inspired by modern tech websites
- **Purple & black theme** - Matches Voidstrap branding
- **Fully responsive** - Works on all devices
- **Smooth animations** - GSAP-powered transitions
- **Accessible** - Semantic HTML5, keyboard navigation
- **Fast & lightweight** - No build process required

## Quick Start

Open `index.html` in your browser or run a local server:

```bash
cd C:\Users\FSOS\voidstrap-website
python -m http.server 3000
```

Then visit: http://localhost:3000

## Structure

```
voidstrap-website/
├── index.html      # Main HTML
├── style.css       # All styling
├── main.js         # Animations & interactions
├── logo.svg        # Voidstrap logo
└── README.md       # This file
```

## Customization

### Colors

Edit these CSS variables in `style.css`:

```css
:root {
  --purple: #BA7AF2;
  --blue: #5b6df5;
  --black: #0a0a0f;
}
```

### Content

- Hero section: Edit `.hero-content` in HTML
- Stats: Update `data-count` attributes
- Features: Modify `.feature` blocks

## Deployment

Upload all files to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting

## License

MIT License - See LICENSE file

Built on Bloxstrap by pizzaboxer
Not affiliated with Roblox Corporation

## Links

- GitHub: https://github.com/voidstrap/Voidstrap
- Bloxstrap: https://github.com/pizzaboxer/bloxstrap
