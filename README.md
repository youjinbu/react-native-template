A react native template with these changes:

### dependencies
- [@shopify/restyle](https://github.com/Shopify/restyle)
- [expo-splash-screen](https://github.com/expo/expo/tree/master/packages/expo-splash-screen)
- [expo-updates](https://github.com/expo/expo/tree/master/packages/expo-updates)
- [expo-web-browser](https://github.com/expo/expo/tree/master/packages/expo-web-browser)
- [react-native-config](https://github.com/luggit/react-native-config)
- [react-navigation](https://reactnavigation.org/)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- [react-native-screens](https://github.com/software-mansion/react-native-screens)

### devDependencies
- [TypeScript](typescriptlang.org)
- [Prettier](https://prettier.io/) ([@youjinbu/prettier](https://github.com/youjinbu/config/tree/master/packages/prettier))
- [ESLint](https://eslint.org/) ([@youjinbu/eslint-config](https://github.com/youjinbu/config/tree/master/packages/eslint))
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

### feature flags
- enable [hermes](https://hermesengine.dev/)
- enable proguard

### others
- [patch-package](https://github.com/ds300/patch-package)
- rm ~~xcodeproj~~ ([thanks](https://github.com/pvinis/react-native-xcodegen) to [xcodegen](https://github.com/yonaskolb/XcodeGen))
- rm ~~useless ios targets and tests~~
- rm ~~[flipper](https://fbflipper.com/)~~
- rm ~~[BUCK](https://github.com/facebook/buck) files~~
- rm ~~[jsc-android](https://www.npmjs.com/package/jsc-android)~~ deps

## Usage

### Install
```
npx react-native init projectName --template https://github.com/youjinbu/react-native-template
mv .env.example .env // and update the apple DEVELOPMENT_TEAM in .env
```

### iOS
```
yarn xcodegen
npx pod-install
yarn ios --simulator "iPhone 12"
```

### Android
```
npx app-icon init // or cp your icon.png to project root
npx app-icon generate -p android
yarn android
```

## License

[MIT](/LICENSE)
