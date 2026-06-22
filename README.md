# Mahesh Perera Portfolio Website

A production-ready, highly optimized, and visually stunning software engineering portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 How to Run the Project Locally

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Install Dependencies
Open your terminal in the root directory (`Portfolio_Website`) and run:
```bash
npm install
```

### 3. Start the Development Server
Run the local dev server using:
```bash
npm run dev
```
Once started, open your browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

### 4. Build for Production
To build the application for production (optimizing pages, minifying assets, and verifying TypeScript types):
```bash
npm run build
```

To run the production-built website locally:
```bash
npm run start
```

---

## 🛠️ Tech Stack & Key Files
* **Next.js 15 (App Router)**: Core framework config in `app/layout.tsx` and `app/page.tsx`.
* **Framer Motion v12**: Hardware-accelerated animations for smooth transitions.
* **Tailwind CSS v4**: Theme tokens and styling rules defined in `app/globals.css`.
* **Central Data Store**: Update text, achievements, and assets from `data/portfolio.ts`.
* **SEO Metadata**: Automatic sitemap generation in `app/sitemap.ts` and crawler instructions in `app/robots.ts`.
