module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  overrides: [{
    files: ['vite.config.ts'],
    rules: {
      'import/no-default-export': 'off'
    }
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  },
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports'
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },
      {
        selector: [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember'
        ],
        format: null,
        modifiers: ['requiresQuotes']
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE']
      },
      {
        selector: ['variable'],
        types: ['function'],
        format: ['PascalCase', 'camelCase']
      },
      {
        selector: 'variable',
        modifiers: ['global'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      },
      {
        selector: ['variable', 'typeProperty', 'parameter'],
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: [
          'is',
          'was',
          'should',
          'has',
          'had',
          'can',
          'did',
          'will',
          'allow'
        ]
      },
      {
        selector: ['variable', 'method', 'parameter'],
        types: ['function'],
        format: ['PascalCase', 'camelCase']
      },
      {
        selector: ['enum'],
        format: ['PascalCase'],
        custom: {
          regex:
            '((people|men|women|children)|(s|ss|sh|ch|x|z|o)es|[^aiu]s)(?<!series|lens|news)$',
          match: false
        }
      },
      {
        selector: ['property'],
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE']
      },
      {
        selector: ['property'],
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allowDouble',
        filter: {
          regex: '^__html$',
          match: true
        }
      },
      {
        selector: ['property'],
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        filter: {
          regex:
            '^_(active|activeLink|checked|light|dark|disabled|first|focus|focusVisible|hover|last|notFirst|notLast|placeholder|selected)$',
          match: true
        }
      },
      {
        selector: ['typeLike', 'enumMember'],
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z0-9]{4,}$',
          match: false
        }
      },
      {
        selector: ['typeProperty'],
        format: ['camelCase', 'snake_case', 'PascalCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: ['typeProperty'],
        format: ['UPPER_CASE'],
        filter: {
          regex: '^VITE_',
          match: true
        }
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      }
    ],
    '@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/require-description': [
      'error',
      { ignore: ['eslint-enable'] }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        groups: [
          'unknown',
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index']
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          }
        ],
        alphabetize: { order: 'asc', caseInsensitive: true }
      }
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: true }
    ],
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true }
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-fragments': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'react/no-danger-with-children': 'error',
    'react/no-find-dom-node': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          '/^handle.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    'react/static-property-placement': 'off',
    'unicorn/filename-case': [
      'error',
      {
        'ignore': [
          'vite-env.d.ts'
        ],
        'cases': {
          'camelCase': true,
          'pascalCase': true
        }
      }
    ],
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          ProcessEnv: true,
          env: true
        }
      }
    ],
    camelcase: 'off'
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    },
    react: {
      version: 'detect'
    }
  }
};
