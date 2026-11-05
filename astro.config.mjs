import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gkadillak.com",
  trailingSlash: "ignore",
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  build: { format: "directory" },
});
