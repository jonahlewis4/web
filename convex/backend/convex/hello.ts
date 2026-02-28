import { query } from "./_generated/server";

// Simple Convex query that returns a static message.
export const hello = query({
  args: {},
  handler: async () => {
    return "Hello from Convex!";
  }
});

