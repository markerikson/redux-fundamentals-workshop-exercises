const config = require('kcd-scripts/config').jest

config.snapshotSerializers = config.snapshotSerializers || []
config.snapshotSerializers.push('enzyme-to-json/serializer')
delete config.coverageThreshold

config.testPathIgnorePatterns = [
  ...config.testPathIgnorePatterns,
  '/workshop-templates/',
  '/exercises/',
]

config.collectCoverageFrom = ['src/exercises/**/*.js']
config.coveragePathIgnorePatterns = [
  ...config.coveragePathIgnorePatterns,
  '/workshop-templates/',
  'index.js',
]

config.moduleNameMapper = Object.assign({}, config.moduleNameMapper, {
  '^.+\\.css$': '<rootDir>/other/css-mock.js',
})

config.roots = ['.']
config.testMatch = ['<rootDir>/other/tests/**/*.js']
config.setupFiles = config.setupFiles || []
config.setupFiles.push('<rootDir>/other/setup-tests.js')

module.exports = config
