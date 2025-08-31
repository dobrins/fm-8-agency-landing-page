/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-clean-order" // keeps property order tidy
  ],
  customSyntax: "postcss-scss",
  ignoreFiles: ["dist/**", "node_modules/**"],
  rules: {
    "selector-class-pattern": [
      "^[a-z0-9]+(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$",
      { message: "Expected class selector to be BEM (block, block__element, block--modifier)" }
    ]
  }
};
