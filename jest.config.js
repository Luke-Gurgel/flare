/* eslint-disable @typescript-eslint/no-var-requires */

const { defaults: tsjPreset } = require("ts-jest/presets")

module.exports = {
  ...tsjPreset,
  preset: "react-native",
  verbose: true,
  transform: {
    ...tsjPreset.transform,
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  setupFiles: ["./jest/setup.js"],
  transformIgnorePatterns: [
    // https://github.com/kmagiera/react-native-gesture-handler/issues/344#issuecomment-488618692
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|react-navigation-header-buttons|react-navigation-stack|@react-navigation)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  // snapshotSerializers: ["enzyme-to-json/serializer"],
  // setupFilesAfterEnv: ["<rootDir>/setupEnzyme.ts"],
}
