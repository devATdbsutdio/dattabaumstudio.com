# Log

A dated record of changes to the site and its setup, newest first. Each entry says what changed and why.

---

## `2026-10-28`: store closed, clean-up

> [!Important]
> The Shopify store is closed. The site no longer sells online. People who want a watch are sent to the contact page.

### Site

1. The buy buttons on the watch page now say "Get in touch" and link to `/contact`. This covers the hero, the specs section and the sticky section nav.
2. The strap size picker no longer opens. Its code is kept.
3. The Cart link in the header is still shown but does nothing.
4. The contact page lists one address, `hi@dattabaumstudio.com`, with a general text. The other addresses were retired.
5. A build warning about `localStorage` on the cart page is fixed. The page is built on the server, where there is no browser storage.

Why: with the store closed, every path that led to a checkout had to lead to a conversation instead.

The old store code stays in the repo, unused. See the "Store (closed)" section in the [README](/README.md).

### Policy pages

1. Every email address on the policy pages is now `hi@dattabaumstudio.com`.
2. Terms: the online ordering, payment and pricing sections are replaced by a short Purchases section. Past purchases are still covered and point to the Returns policy.
3. Returns: the return terms stay for people who already bought a watch. The shop wording is gone.
4. Privacy: payment providers, email marketing, analytics and ad remarketing are removed, because the site uses none of them. The California (CCPA) part now says we do not sell or share personal data. A short note on hosting is added.
5. "Last updated" on all four pages is `October 28, 2026`.

Why: the pages described services the site no longer uses. A policy should say what the site actually does.

### Dependencies

1. Astro 5 to 7, the React integration 4 to 7, the Vercel adapter 8 to 11.
2. React 18 to 19, and Headless UI 1 to 2, since version 1 does not support React 19.
3. `firebase-admin` 13 to 14, `sharp` 0.34 to 0.35.
4. `@astrojs/cloudflare` removed. It was installed but never used. The site builds with the Vercel adapter.
5. `npm audit` went from 54 findings to 0.

A few fixes sit inside packages we do not control. The `overrides` block in `package.json` pins patched versions of them:

```json
{
	"@vercel/routing-utils": { "path-to-regexp": "^6.3.0" },
	"@vercel/cli-config": { "zod": "^4.6.7" },
	"@tailwindcss/typography": { "postcss-selector-parser": "^6.1.5" },
	"rimraf": "^6.1.3"
}
```

> [!Tip]
> When the parent packages ship these fixes, remove the matching override, run `npm install`, then `npm audit`. If audit stays at 0, the override is no longer needed.

> [!Note]
> One notice stays in the Vercel build log: `npm warn deprecated node-domexception`. It comes from inside `firebase-admin` and is harmless. It goes away when Google updates that package.

How it was checked: each upgrade went to its own branch first. Vercel built a preview of it, and the home, watch, FAQ, contact and privacy pages were checked there, including the carousel, the craftsmanship cards, the FAQ answers and the mobile menu. Only then was it merged into `main`.

### Repo and docs

1. README: the store section now describes the closed store, photos and videos are noted as served from Firebase Storage, the diagram no longer shows Shopify or the waiting list, and the Terms link is fixed.
2. `architechture_graph.mmd` removed. It described a checkout that was never built.
3. Old branches deleted: `dev`, `development`, `cart-fix`, `firebase-hosting`. The one unmerged commit on `firebase-hosting` is kept as the tag `archive/firebase-hosting`.
4. The open Dependabot pull requests are covered by the updates above. Dependabot closes them after its next scan.

### Accounts and access

1. Shopify settings removed from the Vercel project.
2. Team access on Vercel and Firebase reviewed, and trimmed to the people who need it.
3. The Firebase service account key was rotated. A new key was made, the Vercel project was updated and redeployed, and every older key was deleted. The key is stored as a Secret in Vercel, and no copy of the key file is kept anywhere else.

Why: access to the project changed, and keys made years ago never expire. Rotating means only the current setup holds a working key.

> [!Note]
> The site's pages, photos and videos do not use this key. Rotating it did not change anything visitors see.

### Open

- [ ] Decide whether to remove the unused store code and the `shopify-api-node` package.
- [ ] If the waiting list ever comes back, move Firebase sign-in to keyless access (Workload Identity Federation), so no key needs storing at all.
- [ ] Remove the npm overrides once the upstream fixes ship.
- [ ] Read the new Terms and Privacy wording together with Benjamin.
