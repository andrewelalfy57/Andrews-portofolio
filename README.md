# Andrew Alalfy — Portfolio

Personal portfolio site for Andrew Alalfy, Senior Software Engineer based in Dubai, UAE.

**Live URL:** [andrewelalfy.com](https://andrewelalfy.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Syne + Space Mono (Google Fonts)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment to andrewelalfy.com via Vercel

### Step 1 — Push to GitHub

```bash
cd /Users/andrew/Desktop/portofolio
git init
git add .
git commit -m "Initial portfolio"
gh repo create andrew-portfolio --public --push --source=.
```

### Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up / log in with GitHub
2. Click **"Add New Project"** → Import your `andrew-portfolio` repo
3. Leave all defaults → click **Deploy**
4. Vercel gives you a URL like `andrew-portfolio.vercel.app`

### Step 3 — Connect Your GoDaddy Domain

**In Vercel:**
1. Go to your project → **Settings** → **Domains**
2. Add `andrewelalfy.com` and `www.andrewelalfy.com`
3. Vercel will show you DNS records to add

**In GoDaddy:**
1. Log in to GoDaddy → My Products → Domains → `andrewelalfy.com` → **DNS**
2. Delete the existing A records pointing to GoDaddy's "coming soon" page
3. Add the following records as shown by Vercel:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

4. Wait 10–30 minutes for DNS to propagate
5. Vercel auto-provisions an SSL certificate (HTTPS)

## Adding Your Resume PDF

Place your resume PDF at:
```
public/andrew-alalfy-resume.pdf
```

The "Download Resume" button in the navbar will automatically link to it.

## Customization

- **Content:** Edit the data arrays in each component file under `/components/`
- **Colors:** Adjust CSS variables in `app/globals.css`
- **Projects:** Update `components/Projects.tsx` with real links when available
- **Contact form:** Integrate [EmailJS](https://emailjs.com) (free) — replace the `handleSubmit` simulation in `components/Contact.tsx`
