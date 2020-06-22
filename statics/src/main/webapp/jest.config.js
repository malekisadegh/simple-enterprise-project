// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  coverageDirectory: 'reports',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/app/$1',
    '@core': ['<rootDir>/app/@core'],
    '@core/(.*)': ['<rootDir>/app/@core/$1'],
    '@shared': ['<rootDir>/app/@shared'],
    '@shared/(.*)': ['<rootDir>/app/@shared/$1'],
    '@env': '<rootDir>/environments',
  },
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
  transformIgnorePatterns: ['node_modules/(?!(jest-test|@ng-bootstrap))'],
};
