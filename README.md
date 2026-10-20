# Avirup Mazumder — Portfolio

A self-contained, responsive, single-page portfolio. No framework, install, build, or API keys needed.

## Open the website

The website uses ES modules, so run it from a local web server (opening index.html with `file://` may not work in every browser):

```sh
cd avirup-portfolio-site
python3 -m http.server 8000
```

Visit http://localhost:8000.

## Customize

- **Text, socials, portfolio**: edit `assets/content.js`.
- **Portrait**: place your photograph at `images/portrait.jpg` (create the directory), then change `portrait: null` to `portrait: './images/portrait.jpg'` in `assets/content.js`.
- **Project images**: place screenshots/stills in `images/`, then set each project's `image` to `./images/filename.jpg`.
- **Styles**: edit `assets/styles.css`.
- **Résumé**: replace `avirup-resume.pdf` with a newer PDF using the same filename.

The artwork currently shown on project cards is deliberately illustrative placeholder artwork, not real campaign imagery. Project details are drawn from the supplied résumé. Email links use the address supplied on that résumé, and Instagram/LinkedIn use the URLs supplied with the request.

## Publish

Upload the directory's contents to a static host such as GitHub Pages, Netlify, Cloudflare Pages, or Vercel. The site requires no server-side functionality.

## Source images
The portrait, trophies, Sid’s Farm booth, film stills and two marketing samples are extracted from the supplied 67-page presentation. Slides 60 and 62 do not contain clickable video URLs, so their video stills and copy are included instead. Replace their `href` fields in `assets/content.js` when video URLs become available.
