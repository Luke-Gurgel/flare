module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: { jsx: true },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      // eslint-plugin-react will automatically detect what version of React to use
      version: 'detect',
    },
    "import/resolver": {
      alias: {
        map: [["src", "./src/"]],
        extensions: [".js", ".jsx", ".ts", ".tsx", "json"]
      }
    }
  },
};