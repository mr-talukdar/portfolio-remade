# >_ portfolio-remade

> Because my last portfolio was built with HTML, a dream, and zero design sense.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/mr-talukdar/portfolio-remade)

---

## So you found my portfolio code. Congratulations.

You're either:

- 🔍 **A recruiter** — Welcome. Yes, I wrote all of this. No, I don't use WordPress.
- 👨‍💻 **A developer** — Stealing ideas? Respect. At least star the repo first. It's the least you can do.
- 🤖 **A bot** — `console.log("I see you, crawler. Move along.")`
- 🫣 **Me, 3 months from now** — "Why the hell did I structure it like this?"

---

## What's Under the Hood

This isn't your average "I centered a div and called it a portfolio" situation.

| Tech | Why |
|---|---|
| **Next.js 16** | Because I like living on the edge. App Router, RSC, the whole shebang. |
| **TypeScript** | Because `any` is not a personality trait. |
| **Tailwind CSS v4** | CSS-first config. No more `tailwind.config.ts` the size of a novel. |
| **Framer Motion** | Things move. Smoothly. Unlike my dating life. |
| **MDX** | For when I pretend I write blog posts regularly. |
| **Vercel Analytics** | So I can see the 3 people who visit my site (hi mom). |

---

## Project Structure

```
src/
├── app/                    # Pages. The App Router kind.
│   ├── page.tsx            # Home. The one that matters.
│   ├── projects/           # Things I've shipped (or abandoned gracefully)
│   │   └── helix/          # My magnum opus. An AI gym copilot.
│   ├── lab/                # Experiments. Some work. Some don't. Science.
│   ├── writing/            # Blog posts I'll "definitely write more of"
│   ├── now/                # What I'm doing rn. Updated... eventually.
│   └── about/              # The "I'm not like other devs" page
├── components/
│   ├── home/               # HeroSection, ProjectCards, the good stuff
│   ├── layout/             # Navbar, Footer. The skeleton.
│   └── shared/             # Reusable bits. DRY or die.
├── data/                   # Static content. No CMS needed. I'm not a masochist.
└── public/images/          # Actual images. Not placeholder.svg. We're adults here.
```

---

## Features That Slap

- **🌑 Dark mode only** — Light mode is a hate crime against developers at 2 AM.
- **⚡ Zero layout shift** — Because CLS is a war crime and I have standards.
- **🎭 Scroll animations** — Subtle. Tasteful. Not a PowerPoint from 2003.
- **📱 Responsive** — Works on your phone. Works on your grandma's tablet. Works on a smart fridge, probably.
- **🖼️ Real images** — Generated & sourced. No gray boxes with "Image Placeholder" text.
- **🏋️ HeliX showcase** — Full Stitch-designed mobile app screenshots embedded. Fancy.

---

## Running Locally

```bash
# Clone it
git clone https://github.com/mr-talukdar/portfolio-remade.git
cd portfolio-remade

# Install deps (we use pnpm here because we're not animals)
pnpm install

# Run it
pnpm dev

# Open http://localhost:3000 and try not to be impressed
```

> **Note:** If you're still using `npm install`, please close this tab and reflect on your life choices.

---

## Deployment

Push to `main`. Vercel handles the rest. That's literally it.

If you're deploying to anything other than Vercel, I respect your bravery but question your judgment.

---

## Design Philosophy

This portfolio follows the **"Linear / Vercel / leerob.io"** school of thought:

1. **Dark.** Always dark.
2. **Typography-driven.** If your font choice doesn't spark joy, you've failed.
3. **Whitespace is a feature,** not a bug.
4. **Motion should feel like breathing,** not like an earthquake.
5. **If it doesn't load in under 2 seconds,** it doesn't deserve to exist.

---

## FAQ

**Q: Can I fork this?**
A: Yes. But if you don't change the content, I *will* find you at a tech conference and it *will* be awkward.

**Q: Why no CMS?**
A: I write 3 blog posts a year. I don't need a $20/month headless CMS for that. Markdown files go brr.

**Q: Why pnpm?**
A: Have you *seen* the `node_modules` folder with npm? I don't have that kind of disk space or emotional bandwidth.

**Q: Is this over-engineered for a portfolio?**
A: Absolutely. But show me a dev whose portfolio *isn't* over-engineered and I'll show you a liar.

---

## License

Do whatever you want with it. MIT License. Just don't claim you designed it. My ego is fragile enough already.

---

<p align="center">
  <sub>Built with ☕, mass amounts of mass gained from sitting, and an unhealthy obsession with border-radius: 8px.</sub>
</p>
<p align="center">
  <sub>📍 Kolkata, India — where the code is hot and so is the weather.</sub>
</p>
