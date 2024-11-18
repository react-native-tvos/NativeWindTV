# NativeWindTV

This is an [Expo Router](https://docs.expo.dev/router/introduction/) SDK 52 project demonstrating how Tailwind CSS styles can be used in a React Native app for TV.

Some of the packages used:

- The [React Native TV fork](https://github.com/react-native-tvos/react-native-tvos), which supports both phone (Android and iOS) and TV (Android TV and Apple TV) targets
- The [React Native TV config plugin](https://github.com/react-native-tvos/config-tv/tree/main/packages/config-tv), to allow Expo prebuild to modify the project's native files for TV builds
- The [NativeWind](https://www.nativewind.dev/) package which lets you use Tailwind CSS in react-native.
- The [react-native-bottom-tabs](https://github.com/okwasniewski/react-native-bottom-tabs) package that provides a fully native tab bar (top bar for Apple TV, bottom bar for Android TV).

## 🚀 How to use

- `cd` into the project

- TV builds:

```sh
yarn
yarn prebuild:tv # Executes Expo prebuild with TV modifications
yarn ios # Build and run for Apple TV
yarn android # Build and run for Android TV
```

- Mobile builds:

```sh
yarn
yarn prebuild # Executes Expo prebuild without TV modifications
yarn ios # Build and run for iOS
yarn android # Build and run for Android mobile
```

## 📝 Notes

The UI is derived from the [NativeWind example app](https://github.com/nativewind/nativewind/tree/main/examples/expo-router) plus [this Tailwind CSS example](https://tailwindcomponents.com/component/premium-banner-around-button). It includes [custom CSS transforms](./global.css).

In `tvdemo.tsx`, note that the button style includes `focus:bg-blue-300` and `active:bg-green-600`. On TV, the `focus` prefix causes the style to be applied to controls when `onFocus()` is invoked, and the style is removed when `onBlur()` is invoked. On both TV and mobile, the `active` prefix applies the style when `onPressIn()` is invoked, and removes it when `onPressOut()` is invoked.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/learn): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [Building Expo apps for TV](https://docs.expo.dev/guides/building-for-tv/)

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
