A react native template with these changes:

- [TypeScript](typescriptlang.org)
- [Prettier](https://prettier.io/) (with [@youjinbu/prettier](https://github.com/youjinbu/config/tree/master/packages/prettier))
- [ESLint](https://eslint.org/) (with [@youjinbu/eslint-config](https://github.com/youjinbu/config/tree/master/packages/eslint))
- [@shopify/restyle](https://github.com/Shopify/restyle)
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) (baseUrl in ts)
- [react-navigation](https://reactnavigation.org/)
- [react-native-unimodules](https://github.com/expo/expo/tree/master/packages/react-native-unimodules)
- [expo-updates](https://github.com/expo/expo/tree/master/packages/expo-updates)
- [expo-splash-screen](https://github.com/expo/expo/tree/master/packages/expo-splash-screen)
- [react-native-config](https://github.com/luggit/react-native-config)
- rm xcodeproj ([thanks](https://github.com/pvinis/react-native-xcodegen) to [xcodegen](https://github.com/yonaskolb/XcodeGen))
- rm useless ios targets and tests
- rm [flipper](https://fbflipper.com/) in iOS
- rm [BUCK](https://github.com/facebook/buck) files

## Usage

```
npx react-native init projectName --template @youjinbu/react-native

// or in the next release of react-native-cli
npx react-native init projectName --template youjinbu/react-native-template
```

## License

MIT
