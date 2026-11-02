import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Separate static export so Lovable's normal development/build stays intact.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
