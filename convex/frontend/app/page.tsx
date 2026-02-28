"use client";

import { useQuery } from "convex/react";
import { anyApi } from "convex/server";

export default function HomePage() {
  const message = useQuery(anyApi.hello.hello, {});

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Convex Demo (useQuery)</h1>
      <p>
        <strong>Message from Convex:</strong>{" "}
        {message ?? "Loading message from Convex..."}
      </p>
    </main>
  );
}

