A react native template with these changes:

### dependencies
- [@shopify/restyle](https://github.com/Shopify/restyle)
- [react-navigation](https://reactnavigation.org/)
- [react-native-unimodules](https://github.com/expo/expo/tree/master/packages/react-native-unimodules)
- [react-native-config](https://github.com/luggit/react-native-config)
- [expo-updates](https://github.com/expo/expo/tree/master/packages/expo-updates)
- [expo-web-browser](https://github.com/expo/expo/tree/master/packages/expo-web-browser)
- [expo-splash-screen](https://github.com/expo/expo/tree/master/packages/expo-splash-screen)

### devDependencies
- [TypeScript](typescriptlang.org)
- [Prettier](https://prettier.io/) (with [@youjinbu/prettier](https://github.com/youjinbu/config/tree/master/packages/prettier))
- [ESLint](https://eslint.org/) (with [@youjinbu/eslint-config](https://github.com/youjinbu/config/tree/master/packages/eslint))
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

### feature flags
- enable [hermes](https://hermesengine.dev/) (Android only)
- enable proguard

### others
- rm xcodeproj ([thanks](https://github.com/pvinis/react-native-xcodegen) to [xcodegen](https://github.com/yonaskolb/XcodeGen))
- rm useless ios targets and tests
- rm [flipper](https://fbflipper.com/) in iOS
- rm [BUCK](https://github.com/facebook/buck) files

## Usage

### Install
```
npx react-native init projectName --template @youjinbu/react-native
mv .env.example .env
```

### iOS
```
DEVELOPMENT_TEAM=your_apple_team_id yarn xcodegen
npx pod-install
yarn ios --simulator "iPhone 12"
```

### Android
```
yarn android
```

## License

[MIT](/LICENSE)
