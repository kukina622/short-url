import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import yaml from "js-yaml";
import * as fs from "fs";

const configName = process.env.NODE_ENV === "production" ? "prod" : "dev";

const config = yaml.load(
  fs.readFileSync(`${__dirname}/config/${configName}.yaml`, "utf8")
);

// https://vitejs.dev/config/
export default defineConfig({
  root: "./frontend",
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "frontend", "src") }
    ]
  },
  define: {
    "process.env": {
      NODE_ENV: process.env.NODE_ENV,
      ...config.frontend
    }
  }
});
