import { ConvexHttpClient } from "convex/browser";
import { anyApi } from "convex/server";

// This is a **server component** that calls Convex on the server.
// Make sure NEXT_PUBLIC_CONVEX_URL is set to your Convex deployment URL.

export default async function HomePage() {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!convexUrl) {
    return (
      <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
        <h1>Convex Demo</h1>
        <p>
          Set <code>NEXT_PUBLIC_CONVEX_URL</code> in <code>.env.local</code> to
          point to your Convex dev deployment.
        </p>
      </main>
    );
  }

  const client = new ConvexHttpClient(convexUrl);

  // Call the Convex `hello` query defined in `backend/convex/hello.ts`.
  const message = await client.query(anyApi.hello.hello, {});

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Convex Demo</h1>
      <p>
        <strong>Message from Convex:</strong> {message}
      </p>
    </main>
  );
}

