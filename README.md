# Naman Lunia — Portfolio

A fast, accessible, lightweight personal portfolio built with React and Vite. Designed with a calm "Dark Game-Editor" aesthetic, zero external font or script requests, WCAG AA compliance, and a total JS bundle size of ~52 KB gzipped.

---

## Quick Start

### 1. Requirements
- Node.js (v18+)
- npm

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
This produces an optimized production build in the `dist/` directory with zero build warnings.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## How to Update Any Text, Project, or Link

**Single source of truth:** All visible copy, projects, certificates, social links, labels, and metadata are maintained strictly in:
```
src/data/content.js
```
You do not need to touch any React components or styles to update the content.

### Examples:
- **Change Bio or Introduction:** Edit the `about.bio` array or `hero.tagline` in `content.js`.
- **Add or Update a Project:** Modify the `projects` array. Each project accepts:
  - `title`: Project title.
  - `status`: `"In progress"` (amber badge) or `"Earlier project"` (neutral badge).
  - `problem`: Short description of the problem solved.
  - `whatIDid`: Description of your contributions and tools.
  - `tools`: Array of tool names (e.g. `["Antigravity", "OpenCode"]`). If empty, no tags are rendered.
  - `links`: Array of `{ label: "Live site", url: "https://..." }`. If empty or null, no placeholder or link is rendered.
- **Add or Update Certificates:** Add entries to `learning.certificates` with `title`, `issuer`, `date`, and `url`.
- **Update Social Links or Email:** Update `contact.email`, `contact.channels`, or `navigation.socialLinks`.

> **Important Limitation:** Content changes require a rebuild and republish (`npm run build`). The site is intentionally static and compiled for maximum speed, security, and zero server maintenance; there is no on-page CMS or backend database.

---

## Deploying to Vercel

The project is structured and pre-configured for one-click deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub (`https://github.com/namanlunia/<repo-name>`).
2. Log into **Vercel** and select **Add New Project**.
3. Import your GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. Any future commit to your `main` branch will trigger an automatic preview and production deployment.

---

## How to Test

Perform these essential checks before presenting the portfolio to recruiters, professors, or mentors:

1. **The 10-Second Visitor Test:**
   - Open the first screen on desktop or mobile.
   - Confirm that within 10–15 seconds, a first-time visitor immediately understands:
     - Naman's name and role (`CSE (AI & ML) student · aspiring game developer`).
     - What he is currently learning (`Game development`).
     - Two clear next actions (`View projects` and `Contact me`).
     - Real, honest status panel details (studying, focus, building, interests).

2. **Phone Width Responsiveness (320px to 480px):**
   - Open DevTools, switch to Device Mode, and resize to 320px wide (e.g., iPhone SE).
   - Ensure there is no horizontal scrollbar or clipped text.
   - Tap the hamburger menu button: check that it toggles smoothly, all navigation links close the menu when tapped, and the Escape key closes it.
   - Verify all touch targets are at least 44px × 44px.

3. **Keyboard Accessibility (Tab and Enter Only):**
   - Reload the page and press `Tab` once.
   - Verify the "Skip to content" link appears at the top left and pressing `Enter` skips directly to `#main-content`.
   - Continue pressing `Tab` through all navigation items, CTA buttons, project links, certificate links, and contact buttons.
   - Verify that every focused element displays a high-contrast 2px violet focus ring (`#7c5cff`).

4. **Link Destination Verification:**
   - Click "Live site", "Frontend repo", and "Backend repo" on the clothing brand project to verify they open in a new tab with `rel="noopener noreferrer"`.
   - Click "Verify" on each IBM SkillsBuild certificate card to ensure it routes to the correct Credly badge URL.
   - Test the "Email me" link (triggers `mailto:namanlunia229@gmail.com`).
   - Test the "Copy email" button: verify that it copies `namanlunia229@gmail.com` to your clipboard and temporarily displays the accessible "Copied" feedback.

5. **Privacy & Honesty Verification:**
   - Confirm that no phone numbers, private home addresses, fake statistics, or embellishments appear anywhere on the site.

