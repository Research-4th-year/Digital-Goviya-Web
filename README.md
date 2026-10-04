# Digital Goviya: Research Portfolio Website

Research portfolio website for **AI Driven Privacy Preserving Digital Ecosystem for Modernizing Sri Lanka's Paddy Supply Chain**, a final-year research project at SLIIT.

The site presents the research gap, objectives, methodology, milestones, project documents, and team behind **Digital Goviya** (Smart Paddy Management System), our mobile app for Android and iOS.

## About the research

Sri Lanka's paddy supply chain is fragmented. Farmers lack localized guidance, price forecasts are short-term and unexplained, warehouse monitoring relies on manual reporting, and marketplaces offer no privacy or negotiation support. Our project proposes an AI-driven, privacy-preserving ecosystem with four components:

| Component | Focus |
| --- | --- |
| AI Driven Paddy Price Forecasting | XGBoost forecasts with causal explanations and AI-powered explanations |
| IOT Based Digital Dashboard for Paddy Farming | Yield prediction, crop health analysis, and RAG-based advisory |
| AI Powered Farmer Miller Marketplace | Federated learning and LLM-based negotiation |
| Secure, Disaster Aware Warehouse Coordination | Blockchain, decentralized identity, and zero-knowledge proofs |

## Website sections

- **Home**: project overview, four components, and the mobile app screens
- **Project Scope**: research gap, problem and solution, objectives, methodology
- **Milestones**: project timeline, with status updated automatically from today's date
- **Downloads**: proposals, presentations, final report, and research paper
- **About Us**: supervisors and team members
- **Contact Us**: contact details and a message form

## Tech stack

- [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) icons
- Fonts: Fraunces and Poppins (Google Fonts)

## Getting started

Requirements: Node.js 18 or later.

```bash
# 1. Clone the repository
git clone <repository-url>
cd <repository-folder>

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Build for production:

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Project structure

```
├─ public/
│  ├─ assets/
│  │  ├─ images/              Logo and mobile app screenshots
│  │  └─ team/                Photos of team members and supervisors
│  └─ downloads/
│     ├─ proposals/           Project proposal, topic assessment
│     ├─ presentations/       Proposal, progress 1 and 2, final presentations
│     ├─ reports/             Individual reports, final thesis
│     └─ papers/              Research paper
└─ src/
   ├─ App.jsx                 Page layout
   ├─ paddy.css               Colors, fonts, paddy animations
   ├─ data/
   │  └─ siteData.js          All text, links, and file names
   └─ components/
      ├─ Navbar.jsx
      ├─ Home.jsx
      ├─ ProjectScope.jsx
      ├─ Milestones.jsx
      ├─ Downloads.jsx
      ├─ AboutUs.jsx
      ├─ ContactUs.jsx
      ├─ Footer.jsx
      ├─ PaddyDecor.jsx       Animated paddy field, floating grains, wave dividers
      ├─ SectionHeading.jsx
      └─ icons.js
```

## Updating the content

Almost everything is edited in one file: `src/data/siteData.js`.

### Add downloadable files

1. Place the file in the matching folder under `public/downloads/` using the name listed in `siteData.js`, for example `public/downloads/presentations/final-presentation.pptx`.
2. In `siteData.js`, set `available: true` for that item in `DOWNLOADS`. Items with `available: false` show "Coming soon".
3. To add a new file, add a `{ title, file, available }` entry to the right group.

### Add team photos

Place photos in `public/assets/team/` using the file names in `SUPERVISORS` and `TEAM` (for example `sasin-ransara.jpg`). If a photo is missing, the card shows the person's initials. To use a different name or a `.png`, change the `photo` value in `siteData.js`.

### Update milestones

Edit `MILESTONES` in `siteData.js`. Each item's status (completed, in progress, upcoming) is worked out from its `date` (`YYYY-MM`). To set one manually, add `status: 'done' | 'current' | 'upcoming'`.

### Contact form

By default, the form opens the visitor's email app with the message filled in. To receive messages directly in your inbox:

1. Create a free form at [Formspree](https://formspree.io/).
2. Paste its URL into `CONTACT.formEndpoint` in `siteData.js`.

### Theme

| Name | Hex |
| --- | --- |
| Deep green | `#05301c` |
| Forest green | `#0a4a2b` |
| Field green | `#14683b` |
| Gold | `#f2b01e` |
| Light gold | `#ffd25a` |
| Mist (light background) | `#f3f7ee` |

Animations (swaying stalks, floating grains, sun glow) live in `src/paddy.css` and are turned off automatically for visitors who prefer reduced motion.

## Deployment

Any static host works: Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

- Build command: `npm run build`
- Output folder: `dist`

For GitHub Pages under a repository path, set `base: '/<repository-name>/'` in `vite.config.js`. The site reads Vite's base path, so images and download links keep working.

## Team

**Supervisors**

- Dr. Mahima Weerasinghe, Supervisor
- Mr. Eishan Weerasinghe, Co-Supervisor
- Mr. Suranga Senanayake, External Supervisor

**Research team**

- Ransara N.S. (Group Leader)
- Kumarasingha P.A.N.D.
- Chamudi K. S. I.
- Senarathne S.M.B.V.B.

Contact details and LinkedIn profiles are on the website's About Us section.

## License

Copyright © SLIIT Research 2026. All rights reserved. Add a license file here if you plan to open-source the code.
