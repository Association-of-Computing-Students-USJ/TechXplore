import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // In App Router, layout.tsx is the correct place for Google Fonts <link> tags.
      // This rule targets the Pages Router pattern and is a false positive here.
      "@next/next/no-page-custom-font": "off",
    },
  },
]);

export default eslintConfig;
