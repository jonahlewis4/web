## Convex Demo App

This is a minimal demo showing a **Next.js frontend** calling a **Convex backend**.

### Structure

- `backend`: Convex backend project (Convex functions live in `backend/convex`).
- `frontend`: Next.js app that calls a Convex function on the server.

### Backend (Convex)

From the `backend` folder:

```bash
npm install
npx convex dev
```

Copy the printed Convex deployment URL and set it as `NEXT_PUBLIC_CONVEX_URL` in the frontend.

**Clerk (auth):** In the [Convex Dashboard](https://dashboard.convex.dev) for this project, set the environment variable `CLERK_JWT_ISSUER_DOMAIN` to your Clerk JWT Issuer URL (from Clerk Dashboard → JWT Templates → create a "Convex" template and copy the Issuer URL).

### Frontend (Next.js)

From the `frontend` folder:

```bash
npm install
npm run dev
```

In `frontend/.env.local` set:

- `NEXT_PUBLIC_CONVEX_URL` – your Convex deployment URL (from `npx convex dev`)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` – from [Clerk Dashboard](https://dashboard.clerk.com) → API Keys

Visit `http://localhost:3000` for the main page and `http://localhost:3000/auth-status` for the auth status page (green ✓ when signed in via Clerk/Convex, red ✗ when signed out).

