module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve(
        "./tests/mocks/fileMock.js",
      ),
      "\\.(css|less)$": require.resolve("./tests/mocks/styleMock.js"),
    },
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    transform: {
      ".(ts|tsx)": "ts-jest",
    }
  }