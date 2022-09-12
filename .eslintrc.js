module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'standard-jsx'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
  overrides: [
    {
      files: ['*.test.tsx'],
      globals: {
        expect: true,
        test: true,
        describe: true,
        afterEach: true,
        jest: true,
        it: true,
        beforeEach: true,
        beforeAll: true,
        afterAll: true,
        shallow: true,
        snapshot: true,
        all: true
      }
    }
  ]
}
