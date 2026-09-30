import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://garrettkadillak.com",
  trailingSlash: "ignore",
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  build: { format: "directory" },
});
