import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* Pin Turbopack root so CSS @import "tailwindcss" resolves from this app, not a parent folder. */
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
