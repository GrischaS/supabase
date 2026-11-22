# Georg Studio

Enterprise AI workspace for Grigori Saks. This additive preview layer keeps the existing Supabase Studio intact and introduces Georg AI chat, private project context, build status, preview inspection, and deployment approval affordances.

## Run

```bash
pnpm --filter @grischa/georg-studio install
pnpm --filter @grischa/georg-studio dev
```

The current UI is a product preview. Real GitHub OAuth/App installation, isolated build workers, Vercel OAuth, RBAC, audit logs and secret storage must be connected through a separate server-side control plane before production use.
