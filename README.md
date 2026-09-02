# Verus Nordica

A modern, multilingual corporate website for Verus Nordica, an independent marine and cargo survey agency based in Finland. The project was designed to present the company’s services clearly, improve credibility, and provide a polished digital experience for both international clients and local stakeholders.

Demo site: https://brightform-studios.github.io/Verus-Nordica/

## Overview

This website showcases Verus Nordica’s core offerings in marine surveying, cargo inspection, claims management, and damaged goods brokerage. The design focuses on a professional, trustworthy visual identity and strong service communication while maintaining a simple and responsive structure.

## Features

- Responsive multi-page website layout
- Modern company branding and premium visual styling
- English and Finnish language toggle
- Local storage persistence for selected language
- Service and contact page structure for lead generation
- Optimized static front-end architecture
- Easy deployment through GitHub Pages

## Tech Stack

- HTML5
- CSS3
- JavaScript
- GitHub Pages for deployment

## Project Structure

```text
Verus-Nordica/
├── index.html
├── about.html
├── services.html
├── contact.html
├── footer.html
├── styles.css
├── js/
│   ├── script.js
│   ├── footer.js
│   ├── translations.js
│   └── translations.json
├── assets/
│   ├── logo.svg
│   ├── picture.png
│   └── ...
├── README.md
├── TRANSLATION_SETUP.md
└── .gitignore
```

## Local Development

1. Clone the repository:

```bash
git clone https://github.com/brightform-studios/Verus-Nordica.git
```

2. Open the project folder in your preferred editor.

3. Launch a local web server or simply open the HTML files in a browser.

For a quick local preview with Python:

```bash
cd Verus-Nordica
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Language Support

The site includes a bilingual interface with English and Finnish translations. Translation strings are defined in `js/translations.json` and managed through `js/translations.js`.

## Deployment

The site is configured for static hosting via GitHub Pages. After pushing changes to the main branch, the site updates automatically using the repository’s hosted Pages deployment.

## Customization

To update company details, service descriptions, contact details, or branding:

- Edit the relevant HTML pages
- Update styling in `styles.css`
- Modify translations in `js/translations.json`
- Adjust scripts in `js/script.js` or `js/footer.js` as needed

## Credits

This project was created for Verus Nordica as part of a website renewal and brand presentation effort.

## License

This project is for internal/company use and may be subject to copyright and branding restrictions. Please confirm licensing and content rights before reusing assets or production materials externally.
