module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": ["error", "never"],
    "semi": ["error", "always"],
    "quotes": [1, "double"],
    "yoda": [2, "never", { "exceptRange": true }],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
