# Georg Studio

Georg Studio is the additive enterprise AI workspace layer for Grigori Saks. The first product slice is a dark, professional chat and preview workspace that leaves Supabase Studio's existing control-plane pages unchanged.

## Product direction

- Georg AI chat with model selection and safe approval boundaries.
- Private GitHub repository context with branch, change and commit review.
- Isolated build and preview jobs before Vercel deployment.
- Vercel adapter behind server-side credentials and explicit deployment approval.
- Enterprise auth, RBAC, audit events and secret isolation before production integrations.

The working preview implementation is developed in the companion managed project while this repository receives the additive product boundary. Do not place provider tokens in the browser, chat history, logs or preview environment.
