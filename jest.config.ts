import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	roots: ['<rootDir>/src'],
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
	testMatch: ['<rootDir>/src/**/tests/**/*.{spec,test}.{ts,tsx}'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
	},
	transformIgnorePatterns: [
		'^.+\\.module\\.(css)$',
		'/node_modules/(?!(foo|bar)/)',
		'/bar/',
	],
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'^.+\\.module\\.(scss)$': 'identity-obj-proxy',
		'\\.svg': '<rootDir>/__mocks__/svgrMock.tsx',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js'],
};

export default config;
