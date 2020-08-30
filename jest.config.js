module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '^pages$': '<rootDir>/src/pages/',
    '^common$': '<rootDir>/src/common/',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^components$': '<rootDir>/src/components/',
  },
};
