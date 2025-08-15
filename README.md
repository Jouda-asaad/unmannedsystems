# Unmanned Systems — Minimal Website

A lightweight, fast, terminal-style static site for Raspberry Pi hosting.

## Files
- `index.html`: Single-page site with sections for about, tech, platforms, use-cases, demos, safety, and contact
- `styles.css`: Minimal styles with terminal vibes and gradient background
- `script.js`: Tiny typewriter + year
- `favicon.svg`: Small vector icon

All assets are local and tiny for fast loads on a Raspberry Pi with 4GB RAM.

## Run locally (any OS)
- Double-click `index.html` to open in a browser, or use a simple server:

```bash
# Python 3
python -m http.server 8080
# or Node
npx serve --single --listen 8080
```

## Raspberry Pi Hosting
1. Copy the folder to the Pi, e.g., `~/sites/unmanned/`.
2. Serve with a simple static server (choose one):

```bash
# Option A: Python (built-in)
cd ~/sites/unmanned && python3 -m http.server 8080

# Option B: Busybox httpd (very light)
# sudo apt-get install busybox
cd ~/sites/unmanned && busybox httpd -f -p 8080

# Option C: Nginx (production)
# sudo apt-get update && sudo apt-get install -y nginx
# sudo rm -f /var/www/html/index.nginx-debian.html
# sudo cp -r ~/sites/unmanned/* /var/www/html/
# sudo systemctl restart nginx
```

Visit `http://<pi-ip>:8080/` (or default port 80 for Nginx).

## Edit brand/content
- Title and meta: `index.html`
- Colors and layout: `styles.css` (including gradient background settings)
- Typewriter strings: `script.js` (`messages` array)
- Sections: Add/modify sections in `index.html` (about, tech, platforms, use-cases, demos, safety, contact)

## Links and CTAs
- Instagram: `https://www.instagram.com/unmannedsystems.utmkl/`
- Demo video: Update the demo link in the demos section (currently placeholder)
- Contact: Links to the contact section for quote/demo requests

## Performance notes
- No webfonts; uses system monospace stack for terminal feel
- Minimal CSS/JS, no frameworks, deferred script
- Gradient background limited to top section for performance
- Prefers reduced motion respected

## Mobile menu
- On small screens, the top navigation collapses into a 3-dot (kebab) button.
- Tap to open/close; links auto-close the menu. Accessible via `aria-expanded` on the toggle.
