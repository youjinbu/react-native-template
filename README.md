A react native template with these changes:

- [TypeScript](typescriptlang.org)
- [Prettier](https://prettier.io/) (with [@youjinbu/prettier](https://github.com/youjinbu/config/tree/master/packages/prettier))
- [ESLint](https://eslint.org/) (with [@youjinbu/eslint-config](https://github.com/youjinbu/config/tree/master/packages/eslint))
- [@shopify/restyle](https://github.com/Shopify/restyle)
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) (baseUrl in ts)
- [react-navigation](https://reactnavigation.org/)
- [react-native-unimodules](https://github.com/expo/expo/tree/master/packages/react-native-unimodules)
- rm xcodeproj ([thanks](https://github.com/pvinis/react-native-xcodegen) to [xcodegen](https://github.com/yonaskolb/XcodeGen))
- rm useless ios targets and tests
- rm flipper in iOS
- rm BUCK files

## Usage

```
npx react-native init projectName --template @youjinbu/react-native
```

## License

MIT
