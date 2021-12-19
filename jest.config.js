module.exports = {
    verbose: true,
    clearMocks: true,
    projects: [
        {
            displayName: "Browser",
            testEnvironment: "jsdom",
            rootDir: "./",
            testMatch: ["<rootDir>/src/tests/**/*.[jt]s"],
            testURL: "http://localhost",
            moduleNameMapper: {
                "\\.(css|less|sass|scss)$": "<rootDir>/mocks/styleMock.js",
                "\\.(gif|ttf|eot|svg)$": "<rootDir>/mocks/fileMock.js",
            },
        },
    ],
};