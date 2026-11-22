# Georg Studio Architecture

Georg Studio is an additive workspace layer, not a replacement for Supabase's existing Studio. The UI communicates with a separate control-plane API. GitHub OAuth/App installation, Vercel OAuth, workspace metadata, jobs and audit events belong to that service. Build and preview work happens in short-lived, non-root workers with allowlisted commands and no Docker socket.

The first delivery milestone is read-only chat and repository context. Later milestones add typed patch/test operations, commit and pull request approval, Vercel preview deployment, and production deployment gates. Provider tokens stay server-side and are encrypted; untrusted previews use a separate origin with restrictive CSP and no shared cookies.
