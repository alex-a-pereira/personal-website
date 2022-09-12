module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom'
}
