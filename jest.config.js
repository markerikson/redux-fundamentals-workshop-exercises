const path = require("path");

const config = require('kcd-scripts/config').jest

config.snapshotSerializers = config.snapshotSerializers || []
config.snapshotSerializers.push('enzyme-to-json/serializer')
delete config.coverageThreshold

config.testPathIgnorePatterns = [
  ...config.testPathIgnorePatterns,
  '/workshop-templates/',
]

config.coveragePathIgnorePatterns = [
  ...config.coveragePathIgnorePatterns,
  '/workshop-templates/',
  'index.js',
]

config.moduleNameMapper = Object.assign({}, config.moduleNameMapper, {
  '^.+\\.css$': '<rootDir>/other/css-mock.js',
})

config.roots = ['.']
config.testMatch = [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
]
config.setupFiles = config.setupFiles || []
config.setupFiles.push('<rootDir>/other/setup-tests.js')
config.transform = { '^.+\\.jsx?$': path.resolve("node_modules/kcd-scripts/dist/config/babel-transform")};

module.exports = config