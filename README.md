# Antique Accessories Website

A premium antique accessories storefront built with React + Vite and designed to feel boutique, historic, and elegant.

## Features

- Responsive luxury storefront with home, shop, services, about, refund policy, and contact pages
- Product catalogue with search and category filtering
- Request forms for product and service enquiries
- Refund policy page with refund request form
- Mobile-friendly navigation and accessible controls
- Demo messaging clarifying that forms are frontend examples unless connected to a backend or service

## Project structure

```bash
antique-accessories-website/
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Install and run

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal, usually:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

## Replace sample content

- Update business contact placeholders in the footer and contact page.
- Replace Unsplash image URLs in `src/data/catalog.js` and page components with branded or licensed imagery.
- Update product names, prices, and categories in `src/data/catalog.js`.
- Adjust the contact form or refund policy messaging if a real legal review is needed.

## Connect a real form backend

This project is intentionally a frontend demo. Before publishing, connect the inquiry forms to a real backend or form service such as:

- Formspree
- Netlify Forms
- EmailJS
- Microsoft Forms or a custom API endpoint
- CRM-driven workflow or email automation

## Testing checklist

- All navigation links work on desktop and mobile.
- Search and category filtering update product lists.
- Request forms validate required fields and show errors.
- Success messages display after valid submission.
- Service request buttons prefill the right enquiry type when supported.
- Refund policy page and refund form load without console errors.
- Mobile menu opens and closes correctly.
