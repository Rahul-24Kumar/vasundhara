module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(axios)/)',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
    ],
};
