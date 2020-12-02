const alias = ['shared', 'screens', 'components', 'assets']

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
    'react-native-reanimated/plugin',
  ],
}
