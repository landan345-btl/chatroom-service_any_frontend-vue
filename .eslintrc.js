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
    quotes: [1, "double"] // 引号类型 `` "" ''
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
