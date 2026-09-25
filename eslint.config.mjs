// Flat ESLint config (ESLint 9+ / Next.js 16 dropped `next lint` and the
// legacy `.eslintrc.json` format in favor of this). `eslint-config-next`
// ships its rule sets as ready-made flat-config arrays, so they're just
// spread in directly — no compatibility shim needed.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
