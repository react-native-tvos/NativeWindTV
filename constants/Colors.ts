/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#aaa';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    link: '#0a7ea4',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    link: '#0a7ea4',
  },
};

export const nativewindColorTheme = {
  '--text-light': Colors['light'].text,
  '--background-light': Colors['light'].background,
  '--tint-light': Colors['light'].tint,
  '--link-light': Colors['light'].link,
  '--icon-light': Colors['light'].icon,
  '--text-dark': Colors['dark'].text,
  '--background-dark': Colors['dark'].background,
  '--tint-dark': Colors['dark'].tint,
  '--link-dark': Colors['dark'].link,
  '--icon-dark': Colors['dark'].icon,
};
