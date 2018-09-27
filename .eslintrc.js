module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { trailingComma: "all" }],
  },
};
