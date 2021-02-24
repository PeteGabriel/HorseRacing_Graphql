module.exports = {
  "roots": [
    "<rootDir>"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "setupFiles": ["<rootDir>/.jest.setEnvVars.js"],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}