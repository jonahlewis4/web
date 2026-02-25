import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import SecretData from "./SecretData";

export default function App() {
  return (
    <div className="app-container">
      <nav>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>

      <main>
        <h1>Vite + Clerk + Python</h1>

        <SignedOut>
          <p>Please sign in to access the backend.</p>
        </SignedOut>

        <SignedIn>
          <p>Welcome back!</p>
          <SecretData />
        </SignedIn>
      </main>
    </div>
  );
}