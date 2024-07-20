module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prefer-arrow'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'projects/**/*', 'node_modules/**/*', 'coverage/**/*', 'dist/**/*'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info']}],
    '@typescript-eslint/no-empty-interface': [
      'error' ,
      {
        allowSingleExtends: false
      }
    ],
    '@typescritp-eslint/prefer-as-conts': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescrpit-eslint/no-explicit-any': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: ['static-field', 'instance-field', 'static-method', 'instance-method']
      }
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ],
    'prettier/prettier': [
      "error",
      {
        singleQuote: true,
        trailingComma: 'none',
        endOfLine: 'auto',
        tabWidth
        "endOfLine": "auto"
      }
    ]
  },
};
