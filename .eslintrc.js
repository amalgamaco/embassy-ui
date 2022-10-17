module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true
	},
	'extends': [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jest/recommended',
		'plugin:testing-library/react'
	],
	'parser': '@typescript-eslint/parser',
	'plugins': [ '@typescript-eslint', 'jest', 'react', 'testing-library' ],
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'settings': {
		'import/parsers': {
			'@typescript-eslint/parser': [ '.ts', '.tsx' ]
		},
		'import/resolver': {
			'typescript': {
				'alwaysTryTypes': true,
				'project': './tsconfig.json'
			}
		},
		'react': {
			'version': 'detect'
		}
	},
	'overrides': [
		{
			'files': [ 'src/**/*.ts', 'src/**/*.tsx' ],
			'parserOptions': {
				'project': './tsconfig.json'
			},
			'excludedFiles': '*.js',
			'extends': [
				'plugin:@typescript-eslint/recommended-requiring-type-checking'
			],
			'rules': {
				'@typescript-eslint/no-unsafe-assignment': 'off'
			}
		},
		{
			'files': [ 'tests/**/*.ts' ],
			'parserOptions': {
				'project': './tsconfig.tests.json'
			},
			'excludedFiles': '*.js',
			'extends': [
				'plugin:@typescript-eslint/recommended-requiring-type-checking'
			],
			'rules': {
				'@typescript-eslint/no-unsafe-assignment': 'off'
			}
		},
		{
			'files': [ 'example/src/**/*.ts', 'example/src/**/*.tsx' ],
			'parserOptions': {
				'project': './example/tsconfig.json'
			},
			'excludedFiles': '*.js',
			'extends': [
				'plugin:@typescript-eslint/recommended-requiring-type-checking'
			],
			'rules': {
				'@typescript-eslint/no-unsafe-assignment': 'off'
			}
		},
		{
			'files': [ 'web_example/src/**/*.ts', 'web_example/src/**/*.tsx' ],
			'parserOptions': {
				'project': './web_example/tsconfig.json'
			},
			'excludedFiles': '*.js',
			'extends': [
				'plugin:@typescript-eslint/recommended-requiring-type-checking'
			],
			'rules': {
				'@typescript-eslint/no-unsafe-assignment': 'off'
			}
		},
		{
			'files': [ 'docs/src/**/*.ts', 'docs/src/**/*.tsx' ],
			'parserOptions': {
				'project': './docs/tsconfig.json'
			},
			'excludedFiles': '*.js',
			'extends': [
				'plugin:@typescript-eslint/recommended-requiring-type-checking'
			],
			'rules': {
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'react/jsx-filename-extension': [ 1, { extensions: [ '.ts', '.tsx', '.js', '.jsx' ] } ]
			}
		},
		{
			'files': [ 'example/**/*', 'web_example/**/*', 'docs/**/*' ],
			'rules': {
				'import/no-extraneous-dependencies': 'off',
				'no-alert': 'off'
			}
		},
		{
			'files': [ 'docs/**/*' ],
			'rules': {
				'import/no-unresolved': 'off',
				'global-require': 'off',
				'@typescript-eslint/no-var-requires': 'off'
			}
		},
		{
			'files': [ 'tests/**/*' ],
			'rules': {
				'@typescript-eslint/no-var-requires': 'off',
				'react/jsx-filename-extension': 'off'
			}
		}
	],
	'ignorePatterns': [ 'build/**/*', 'node_modules/**/*', 'android/**/*', 'ios/**/*' ],
	'rules': {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'js': 'never',
				'jsx': 'never',
				'ts': 'never',
				'tsx': 'never'
			}
		],
		'import/prefer-default-export': 'off',
		'import/no-dynamic-require': 0,
		'import/no-extraneous-dependencies': [
			'error',
			{ 'devDependencies': true }
		],
		'import/no-named-as-default': 'off',
		'no-tabs': [ 'error', { allowIndentationTabs: true } ],
		'indent': [ 'error', 'tab' ],
		'comma-dangle': [ 'error', 'never' ],
		'space-in-parens': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'no-underscore-dangle': [
			'error',
			{ 'allowAfterThis': true }
		],
		'computed-property-spacing': [ 'error', 'always' ],
		'quote-props': [ 'error', 'consistent' ],
		'prefer-const': 'off',
		'no-param-reassign': 'off',
		'function-paren-newline': 'off',
		'arrow-parens': [
			2,
			'as-needed',
			{ 'requireForBlockBody': true }
		],
		'lines-between-class-members': [
			'error',
			'always',
			{ 'exceptAfterSingleLine': true }
		],
		// Typescript
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [ 'error' ],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [ 'error' ],
		'@typescript-eslint/type-annotation-spacing': [
			'error',
			{
				before: false,
				after: true,
				overrides: { arrow: { before: true, after: true } }
			}
		],
		'@typescript-eslint/no-unsafe-assignment': 'off',
		// Jest
		'jest/expect-expect': [
			'error',
			{ assertFunctionNames: [ 'expect' ] }
		],
		'jest/no-disabled-tests': 'error',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/prefer-to-have-length': 'error',
		'jest/valid-expect': 'error',
		// Testing library
		'testing-library/prefer-screen-queries': 'off',
		// JSX
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': [ 2, 'tab' ],
		'react/jsx-filename-extension': [ 1, { extensions: [ '.ts', '.tsx' ] } ],
		'react/function-component-definition': [ 2, {
			namedComponents: 'arrow-function',
			unnamedComponents: 'arrow-function'
		} ],
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-tag-spacing': 'error',
		'react/prop-types': 'off',
		'react/require-default-props': 'off'
	}
};
