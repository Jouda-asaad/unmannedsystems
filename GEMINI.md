# Project: Unmanned Systems — Minimal Website

## Project Overview

This project is a lightweight, fast, and terminal-inspired static website. It is designed to be hosted on a Raspberry Pi, emphasizing performance and minimal resource usage. The entire site is self-contained with no external dependencies, making it ideal for offline use and quick loading times.

The website is a single page (`index.html`) with several sections detailing the "Unmanned Systems" brand, including information about their technology, platforms, use-cases, and contact details. The styling (`styles.css`) is intentionally minimalistic, evoking a terminal or command-line interface aesthetic. The JavaScript (`script.js`) is vanilla, dependency-free, and provides a typewriter effect for the main headline, updates the copyright year, and handles a mobile navigation menu. A light/dark theme toggle is also implemented.

## Building and Running

This is a static website and does not require a build process. It can be run in several ways:

**1. Directly in the Browser:**

*   Open the `index.html` file in any modern web browser.

**2. Using a Local Development Server:**

*   **With Python 3:**
    ```bash
    python -m http.server 8080
    ```
*   **With Node.js (requires `serve` package):**
    ```bash
    npx serve --single --listen 8080
    ```

The site will be available at `http://localhost:8080`.

## Development Conventions

*   **Dependencies:** The project is intentionally dependency-free. All assets are local.
*   **Styling:** CSS variables are used for theming (colors, spacing, etc.) and are defined in the `:root` selector in `styles.css`. A `light-theme` class is available to switch to a light color scheme.
*   **JavaScript:** The JavaScript is written as an IIFE (Immediately Invoked Function Expression) in `script.js` to avoid polluting the global namespace. It is vanilla JavaScript with no external libraries.
*   **Mobile First:** The site includes a mobile-friendly navigation menu that collapses into a "kebab" icon on smaller screens.
*   **Performance:** The site is optimized for performance with a focus on small file sizes, no web fonts (uses a system monospace stack), and deferred script loading.
