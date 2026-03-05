# WhiteSpace Clarity Framework - Interactive Brand Mockups

Interactive mockups showcasing the WhiteSpace Clarity Framework brand system across 8 real-world applications.

**Live Demo:** [Your Vercel URL will go here]

---

## 📋 Project Overview

This project contains interactive React mockups demonstrating the WhiteSpace Clarity Framework brand identity in production contexts:

- ✅ Website Hero
- ✅ Certification Platform Dashboard
- ✅ Curriculum Module
- ✅ Email Signature
- ✅ Social Media Posts
- ✅ Certificate Design
- ✅ Presentation Slide
- ✅ Workshop Materials

Each mockup is fully interactive—click the tabs to explore different applications.

---

## 🚀 Quick Start (Local Development)

### 1. Clone or Download This Project

```bash
# If using git
git clone https://github.com/yourusername/whitespace-clarity-mockups.git
cd whitespace-clarity-mockups

# Or just download and extract the files
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🌐 Deploy to Vercel (Easiest - 2 minutes)

### Option A: Via GitHub (Recommended)

**Step 1: Create a GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit: WhiteSpace Clarity mockups"
git branch -M main
git remote add origin https://github.com/yourusername/whitespace-clarity-mockups.git
git push -u origin main
```

**Step 2: Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Connect your GitHub account
5. Select the `whitespace-clarity-mockups` repository
6. Click "Deploy"

✨ **Done!** Vercel will give you a live URL like: `https://whitespace-clarity-mockups.vercel.app`

---

### Option B: Direct Vercel CLI Deploy (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the prompts, accept defaults
```

Vercel will assign you a URL automatically.

---

## 📤 Share Your Live Mockups

Once deployed to Vercel, you'll have a shareable URL:

**Share with Bill:**
> "Review the WhiteSpace Clarity Framework brand system mockups: https://whitespace-clarity-mockups.vercel.app"

**Include in presentations:**
- Email link to stakeholders
- Share in Slack/Teams
- Embed in project documentation
- Use in design presentations

---

## 📁 Project Structure

```
whitespace-clarity-mockups/
├── app/
│   ├── layout.jsx          # Root layout with fonts
│   ├── page.jsx            # Entry point
│   ├── mockups.jsx         # Main mockups component
│   ├── globals.css         # Global styles
│
├── public/                 # Static assets (if needed)
│
├── package.json            # Dependencies
├── next.config.js          # Next.js config
├── .gitignore              # Git ignore rules
├── tsconfig.json           # TypeScript config (optional)
└── README.md               # This file
```

---

## 🎨 Brand Specifications Reference

### Colors
- **Navy:** #475569 (Primary)
- **Teal:** #00bfa5 (Systemization)
- **Gold:** #fbbf24 (Realization)

### Typography
- **Lora** (serif) — "WhiteSpace" wordmark
- **DM Sans** (sans-serif) — "Clarity Framework" and body copy

### Icon Mark
- 4-bracket system representing 4 pillars
- Negative space forms the letter "W"
- Fully responsive, works at any size

---

## 🔧 Customization

### Edit Mockups
Edit `app/mockups.jsx` to:
- Change content/copy
- Add new mockup sections
- Update colors/styling
- Adjust layouts

### Update Colors
Update the color values in `app/mockups.jsx`:
```javascript
style={{ backgroundColor: '#475569' }} // Change Navy color
```

### Change Fonts
Fonts are imported in `app/layout.jsx`. Update the Google Fonts link if needed.

---

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm run start
```

Vercel handles this automatically—just push to main branch.

---

## 🚢 Auto-Deploy from GitHub

Once connected to Vercel via GitHub:
- Every push to `main` branch auto-deploys
- Vercel creates preview URLs for pull requests
- No manual deployment needed

---

## ❓ Troubleshooting

**"Module not found" error:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Fonts not loading:**
- Check internet connection
- Verify Google Fonts link in `app/layout.jsx`
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

**Styles not applying:**
- Restart dev server: `npm run dev`
- Clear `.next` folder: `rm -rf .next`

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

---

## 📚 Project Files Reference

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `next.config.js` | Next.js configuration |
| `app/layout.jsx` | Root layout, fonts, metadata |
| `app/page.jsx` | Entry point |
| `app/mockups.jsx` | All mockup components |
| `app/globals.css` | Global styles, Tailwind |
| `.gitignore` | Files to exclude from git |

---

## 🔗 Useful Links

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)

---

## 📞 Support

For questions about:
- **Deployment:** Refer to Vercel docs or contact Vercel support
- **Code:** Check Next.js and React documentation
- **Design/Brand:** Refer to WhiteSpace Clarity Brand Guidelines

---

## 📄 License

This project showcases the WhiteSpace Clarity Framework brand identity. All brand assets are proprietary to Consult WhiteSpace LLC.

---

## ✅ Deployment Checklist

- [ ] Project downloaded/cloned locally
- [ ] Dependencies installed (`npm install`)
- [ ] Tested locally (`npm run dev`)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Connected to Vercel
- [ ] Deployment successful
- [ ] Live URL shared with stakeholders
- [ ] Mockups reviewed and approved

---

**Status:** Ready to deploy ✨

**Next Steps:**
1. Follow deployment steps above
2. Share live URL with Bill Adams Jr.
3. Get design approval
4. Brief development team with brand guidelines

Good luck! 🚀
