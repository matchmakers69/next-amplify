module.exports = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	globals: {
		"ts-jest": {
			tsconfig: "./tsconfig.jest.json",
		},
	},

	setupFilesAfterEnv: ["./jest.setup.ts"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
	},
	moduleNameMapper: {
		"src/(.*)": "<rootDir>/src/$1",
		"pages/(.*)": "<rootDir>/src/pages/$1",
		"^components(.*)$": "<rootDir>/components/$1",
	},
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
};
