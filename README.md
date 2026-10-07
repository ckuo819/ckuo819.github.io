# Cindy Kuo — UX Research Portfolio

A responsive, static portfolio for GitHub Pages. No build tools or external font services are required.

## Pages

- `index.html`: positioning, selected work, research strengths, and contact.
- `about-me.html`: background, education, and research toolkit.
- `projects/google-payments.html`: Google Consumer Payments internship overview.
- `projects/proj1.html`: Workday research.
- `projects/proj2.html`: SCU Pulse Survey.
- `projects/proj3.html`: 826LA program evaluation.

All pages use `css/portfolio.css`. The homepage also uses `css/project-visuals.css` for research artifact covers and illustrations. All four case studies use `css/case-story.css` for outcome-led storytelling, chapter navigation, evidence diagrams, and expandable research details. The Google case adds `css/google-case.css` for original process illustrations. The older stylesheets are retained but are no longer loaded. The resume is at `img/resume_cindy.pdf`.

Homepage visuals combine existing Workday, survey, and demographic-analysis artifacts with original SVG illustrations. The Google shopping illustration depicts study scope, not an internal product screen. Each project retains a prominent impact statement.

## Local preview

From this folder, run:

```sh
python3 -m http.server 8190 --bind 127.0.0.1
```

Open `http://127.0.0.1:8190/`. Navigation and mobile case-study contents work without JavaScript.

## Content updates

Keep project scope, personal contribution, recommendations, and demonstrated outcomes distinct. Case-study detail draws from the supplied portfolio write-up, detailed project notes, resume, and existing research artifacts. Google content describes the study scope, contributions, and documented research uptake; add specific approved findings and decision examples when available. Do not imply a shipped feature or measured engagement improvement from strategic influence alone.

Before publishing, check local links, image loading, mobile layouts, and the current resume. Deploy through this repository's GitHub Pages configuration.

Case studies lead with the outcome, role, and scope, followed by the problem, research judgment, evidence-to-decision story, and optional methods. Scope numbers are labeled as participant counts or design targets, not impact metrics. Original research images can be opened at full size.

The Google case is a selected process overview. Internal presentation photos, document identifiers, study findings, specific competitor conclusions, and product recommendations are excluded. Prior resume-level scope is retained without implying company disclosure approval.

The Pulse Survey case uses `css/pulse-workflow.css` to present scope, planning, review, launch, analysis, and handoff as a project lifecycle. The new portraits are browser-compatible exports of user-provided photos; originals remain unchanged. The 826LA case header uses the organization’s logo from its [official website](https://www.826la.org/), downloaded on October 4, 2026. Its existing research charts remain in the evidence section.

The About page adds original cherry-blossom SVG accents and a sparse CSS petal animation via `css/about-sakura.css`. `js/about-sakura.js` provides a pause/resume control and pauses motion in background tabs. Reduced-motion and print layouts omit the falling petals; the static illustration remains available without JavaScript.
