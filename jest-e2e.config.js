module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  cacheDirectory: './.cache/jest',
  coverageDirectory: './coverage/e2e',
  collectCoverageFrom: ['src/**/*.ts'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/e2e/**/*.e2e-spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coveragePathIgnorePatterns: ['.module.ts', 'interface', 'type', 'index.ts', 'main.ts', '.spec.ts', '.port.ts'],
};
