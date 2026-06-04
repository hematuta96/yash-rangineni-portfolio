# Yash Rangineni — Cinematic Film Producer Portfolio

A premium, cinematic portfolio website built for **Yash Rangineni** featuring a luxurious dark palette (Black, Deep Brown, and Gold highlights), smooth parallax effects, scroll-triggered fade animations, and responsive mobile-first structures.

## Technology Stack & Fonts
- **Structure:** Semantic HTML5
- **Styling:** Custom Vanilla CSS3 (luxury dark-mode cinematic style)
- **Interactions:** Vanilla JavaScript ES6 (IntersectionObserver, sticky nav, parallax scrolling, mobile menus)
- **Typography:**
  - Headings: `Cormorant Garamond` (Google Font)
  - Body Text: `Montserrat` (Google Font)
  - Accent / Branding: `Cinzel` (Google Font)
- **Architecture:** Static website built with HTML, CSS, and Vanilla JS. Runs directly on Live Server, GitHub Pages, Netlify, Vercel, or any other static hosting platform. No compilation or package manager is required to run this project.

## Project Directory Structure

```
portfolio/
├── index.html                   # Homepage (Hero, About, Theater, Gallery, Reviews, Contact)
├── filmography.html             # Filmography Page (Featured movies & All projects grid)
├── style.css                    # Design system tokens, variables, typography, animations
├── script.js                    # Scroll effects, parallax, back-to-top button, navigation
├── README.md                    # Setup and documentation (This file)
└── images/                      # Image assets directory (User-supplied)
```

## Image Assets Mapping

Ensure all of your images are placed in the `images/` directory inside this folder. Below is the mapping of filenames to their placements on the website:

| Section | Image Filename | Description |
| :--- | :--- | :--- |
| **Hero Background** | `images/hero.jpg` | Main full-screen visual overlay behind the header. |
| **About Section** | `images/about.jpg` | High-quality portrait of Yash Rangineni on the Left-column. |
| **Filmography Featured** | `images/pellichoopulu.jpg` | Cover poster for *Pellichoopulu (2016)*. |
| **Filmography Featured** | `images/dear-comrade.jpg` | Banner/poster for *Dear Comrade (2019)*. |
| **Filmography Featured** | `images/annapurna-photo-studio.jpg` | Cover/poster for *Annapurna Photo Studio (2023)*. |
| **Filmography Cards** | `images/dorasani.jpg` | Grid card poster for *Dorasani (2019)*. |
| **Filmography Cards** | `images/abcd.jpg` | Grid card poster for *ABCD (2019)*. |
| **Filmography Cards** | `images/8-vasantalu-32.jpg` | Grid card poster for *8 Vasantalu (2024)*. |
| **Gallery Section** | `images/gallery2.jpg` | Behind the Scenes shot. |
| **Gallery Section** | `images/gallery4.jpg` | Shoot setup details. |
| **Gallery Section** | `images/gallery6.jpg` | Camera angle setup. |
| **Gallery Section** | `images/photo5.jpg` | Press conference celebrations. |
| **Gallery Section** | `images/photo6.jpg` | Crew & direction on-site. |
| **Gallery Section** | `images/photo7.jpg` | Rural location design. |
| **Gallery Section** | `images/photo8.jpg` | Official release meet. |
| **Gallery Section** | `images/VD-1.webp` | Main featured action still of Vijay Deverakonda. |
| **Gallery Section** | `images/VD-2.webp` (or `VD-2.jpg`) | Character still of Vijay Deverakonda. |
| **Gallery Section** | `images/VD-3.webp` | Cinematic portrait framing of Vijay Deverakonda. |
| **Gallery / Profile** | `images/yash-profile.jpg` | Producer portrait (used in Gallery & Reviews). |
| **Contact Visual** | `images/yash-contact.jpg` | Side portrait showcased in the Contact Me section. |
| **Reviews Avatar** | `images/raj-kandukuri.webp` | Avatar photo for reviewer Raj Kandukuri (Co-Producer). |

> [!IMPORTANT]
> Keep the exact file extensions (`.jpg`, `.webp`) and lowercase/case-sensitive names as listed above to ensure image loader integrity.

## How to Run Locally

You can launch a lightweight static server using `Node.js` and `npx`. Run the following command in your terminal from the `portfolio/` directory:

```powershell
# Start a simple local server
npx -y serve ./
```

Or you can use any standard static server (like VS Code Live Server or Python's `http.server`).
