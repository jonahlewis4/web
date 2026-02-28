import "./globals.css";
import type { ReactNode } from "react";
import { ConvexClientProvider } from "./ConvexClientProvider";

export const metadata = {
  title: "Convex Demo",
  description: "Simple Next.js + Convex demo app"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}

