module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:prettier/recommended"],
  plugins: [],
  rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2016,
  },
};
