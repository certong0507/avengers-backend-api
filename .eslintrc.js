module.exports = {
   env: {
      node: true,
      commonjs: true,
      es6: true
   },
   extends: "eslint:recommended",
   parserOptions: {
      ecmaVersion: 8,
      sourceType: "module"
   },
   rules: {
      "no-unused-vars": ["warn", { args: "none" }],
      "no-console": "off",
   }
};
