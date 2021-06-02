module.exports = {
  extends: '@youjinbu',
  parserOptions: {
    project: ['template/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['node_modules', 'dist'],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  rules: {
    'import/extensions': ['error', {'json': 'always'}]
  }
}
