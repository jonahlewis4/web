"use client";

import { useQuery } from "convex/react";
import { anyApi } from "convex/server";
import { SignInButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";

const styles = {
  main: {
    padding: "2rem",
    fontFamily: "system-ui, sans-serif",
    maxWidth: "32rem",
    margin: "0 auto",
  },
  status: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "1.125rem",
  },
  check: { color: "green", fontWeight: "bold" },
  x: { color: "#c00", fontWeight: "bold" },
  link: { color: "#06c", marginTop: "1rem", display: "inline-block" },
};

export default function AuthStatusPage() {
  const identity = useQuery(anyApi.auth.getIdentity, {});
  console.log(identity);

  const isLoading = identity === undefined;
  const isSignedIn = identity !== null && identity !== undefined;

  console.log('isSignedIn', isSignedIn);

  return (
    <main style={styles.main}>
      <h1>Auth status</h1>
      <p>This page uses a Convex query to read the current user identity.</p>

      <div style={styles.status}>
        {isLoading ? (
          <span>Loading…</span>
        ) : isSignedIn ? (
          <>
            <span style={styles.check}>✓</span>
            <span>Signed in (Convex identity present)</span>
          </>
        ) : (
          <>
            <span style={styles.x}>✗</span>
            <span>Signed out</span>
          </>
        )}
      </div>

      {isSignedIn ? (
      <div>
          <UserButton afterSignOutUrl="/auth-status" />
      </div>

        ) : (
        <SignInButton mode="modal" />
      )}



      <Link href="/" style={styles.link}>
        ← Back to home
      </Link>
    </main>
  );
}
