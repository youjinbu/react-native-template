const alias = ['theme', 'screens', 'navigation', 'components']

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: alias.reduce((r, i) => ({...r, [i]: `./src/${i}`}), {}),
      },
    ],
  ],
}
