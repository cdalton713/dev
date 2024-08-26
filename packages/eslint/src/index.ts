import * as eslint from "eslint";

const config: eslint.Linter.Config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "eslint-plugin-node",
    "simple-import-sort",
    "@emotion",
  ],
  rules: {
    "import/default": "off",
    "import/named": "off",
    "jest/no-commented-out-tests": "off",
    "import/namespace": "off",
    "import/no-cycle": "off",
    "import/no-deprecated": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unused-modules": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-misused-promises": ["error"],
    "@typescript-eslint/promise-function-async": ["error"],
    "@typescript-eslint/ban-ts-comment": "off",
    "node/handle-callback-err": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "node/no-sync": "off",
    "no-use-before-define": "off",
    "simple-import-sort/exports": "warn",
    "n/no-unpublished-import": "off",
    "n/no-unsupported-features/node-builtins": ["off"],
    "n/no-missing-import": ["off"],
    "n/no-process-exit": ["off"],
    "@typescript-eslint/no-var-require": ["off"],
    "@emotion/pkg-renaming": "error",
    "react/display-name": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/no-children-prop": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // Packages
          ["^\\w"],
          // Internal packages.
          ["^(@|config/)(/*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "async",
    "async/node",
    "async/typescript",
    "plugin:n/recommended",
  ],
  overrides: [
    {
      files: ["__tests__/**"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {},
    },
  ],
  ignorePatterns: [
    "tsup.config.ts",
    ".esbuild",
    ".babelrc.js",
    "babel.config.js",
    "jest.config.*",
    "generated.ts",
    "*.json",
    "*.js",
    "*.d.ts",
    "dist",
    "output",
    "lib",
    "/sst.config.ts",
    "vite.config.mts",
    "/web/shop-handler/**/*",
    "/replace-in-file.cjs",
    "/codemods/**/*",
  ],
};

export default config;
