# Datta Baum Studio

The Studio's public facing website with built in store.

Built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/).

## Editing policy pages

The policy pages are written in markdown and can be found:

1. [Terms](/src/pages/disclaimer.md)
2. [Privacy](/src/pages/privacy.md)
3. [Returns](/src/pages/returns.md)
4. [Disclaimer](/src/pages/disclaimer.md)

## Editing other content

Most of the other content is either inline in code or as JavaScript Objects. When editing any of these care must be taken to ensure that the content is valid HTML/JavaScript.

## Deployment

The site is automatically deployed on every push to the `main` branch. To create preview deployments before making it live, create a new branch, push to it and then create a pull request to `main`. This will create a preview deployment that can be shared with others. Once satified with the changes, merge the pull request into `main` to make it live.
