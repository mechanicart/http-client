const { defaults } = require('jest-config');

module.exports = async () => {
  return {
    bail: true,
    verbose: true,
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    testMatch: ['**/*.test.ts'],
    clearMocks: true,
    coverageProvider: 'v8',
    preset: 'ts-jest',
    testEnvironment: 'node',
  };
};