import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@domain/(.*)$': '<rootDir>/src/core/domain/$1',
    '^@application/(.*)$': '<rootDir>/src/core/application/$1',
    '^@presentation/(.*)$': '<rootDir>/src/presentation/$1',
    '^@infrastructure/(.*)$': '<rootDir>/external/infrastructure/$1',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    'external/**/*.ts',
    '!**/*.d.ts',
    '!**/index.ts',
  ],
};

export default config;
