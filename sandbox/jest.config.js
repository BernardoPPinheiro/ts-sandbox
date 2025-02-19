/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Point to a setup file instead
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
};

module.exports = config;
