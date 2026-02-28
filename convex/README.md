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

### Frontend (Next.js)

From the `frontend` folder:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the page. It will call the Convex `hello` query and render the returned message.

