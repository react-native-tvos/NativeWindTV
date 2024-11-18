import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { withLayoutContext } from 'expo-router';
import { createNativeBottomTabNavigator } from 'react-native-bottom-tabs/react-navigation';
import { Platform } from 'react-native';

export const Tabs = withLayoutContext(
  createNativeBottomTabNavigator().Navigator,
);

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  return (
    <Tabs
      transparent
      tabBarActiveTintColor={colors.tabIconSelected}
      tabBarInactiveTintColor={colors.tabIconDefault}
      rippleColor={colors.tint}
      labeled={true}
      barTintColor={colors.background}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () =>
            Platform.OS === 'android'
              ? require('@/assets/bar_icons/home.png')
              : null,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Two',
          tabBarIcon: () =>
            Platform.OS === 'android'
              ? require('@/assets/bar_icons/code.png')
              : null,
        }}
      />
      <Tabs.Screen
        name="tvdemo"
        options={{
          title: 'TV styling demo',
          tabBarIcon: () =>
            Platform.OS === 'android'
              ? require('@/assets/bar_icons/tv.png')
              : null,
        }}
      />
    </Tabs>
  );
}
