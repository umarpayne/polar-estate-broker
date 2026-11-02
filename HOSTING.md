# Static hosting

Build with `npx vite build --config vite.static.config.ts` after installing dependencies.
This prerenders pages and linked blog articles into `.output/public`. Publish only
that directory; `.output/server` is not part of the static deployment. The normal
Lovable Vite configuration is unchanged. Rebuild whenever content changes.

## Cloudflare Workers Static Assets

Connect this GitHub repository in Cloudflare Workers Builds. Use the static build
command above, then `npx wrangler deploy --config wrangler.static.jsonc` as the deploy
command. Authenticate through your Cloudflare account for local CLI deployments.
The configuration serves prerendered HTML; it does not run the generated SSR Worker.

## Firebase Hosting

Create or select a Firebase project, then authenticate with `npx firebase-tools login`.
After the static build, run `npx firebase-tools deploy --only hosting --project YOUR_PROJECT_ID`.
The supplied firebase.json publishes `.output/public` with clean URLs.

## Required before launch

- Connect the enquiry form to an actual submission service. Its current handler
  only displays success and does not transmit or save anything.
- Replace the placeholder phone/address and verify the contact mailbox.
- Verify business claims, market figures, rental benchmarks and comparables;
  add sources, methodology and an as-of date where appropriate.
- Verify mobile menus, keyboard navigation, contact delivery, direct page loads,
  unknown URLs and logo loading on the deployed preview before adding a domain.

## Verification performed

- Normal Vite production build: passed.
- Static build: passed; 17 rendered route entries, including /insights and
  /insights/ plus six blog articles.
- TypeScript: passed after fixing the root error component parameter type.
- Dependencies were installed with pnpm without changing the Bun lockfile;
  this validates the resolved package ranges, not an exact Bun frozen install.
- Deployed to https://polar-estate-broker.webstudio-67d.workers.dev with self-hosted logo and the supplied polar bear favicon. Key routes, favicon and 404 responses were verified.

References:
- https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering
- https://developers.cloudflare.com/workers/static-assets/
- https://firebase.google.com/docs/hosting/full-config

Live deployments require user approval after preview and review. GitHub automatic deployment is not configured.

