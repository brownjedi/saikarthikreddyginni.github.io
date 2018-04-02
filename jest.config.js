module.exports = {
  "globals": {
    "__PATH_PREFIX__": ""
  },
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.d.ts",
    "!src/setup-tests.ts"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/src/setup-tests.ts",
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.ts?(x)",
    "<rootDir>/src/**/?(*.)(spec|test).ts?(x)"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^(?!.*\\.(js|jsx|ts|tsx|css|scss|json)$)": "<rootDir>/__mocks__/jest/file-transform.js"
  },
  "transformIgnorePatterns": [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "<rootDir>/.cache/"
  ],
  "moduleNameMapper": {
    // CSS Modules - match files that end with 'module.css'
    "^.+\\.(s)?css$": "identity-obj-proxy",
    "^react-native$": "react-native-web"
  },
  "moduleFileExtensions": [
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "web.js",
    "js",
    "web.jsx",
    "jsx",
    "json",
    "node"
  ]
}
