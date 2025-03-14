import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const tabBarActiveTintColor = Colors.light.tint;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor,
        tabBarPosition: 'top',
        tabBarIcon: () => null,
        tabBarLabelStyle: {
          fontSize: 30,
          lineHeight: 60,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Two',
        }}
      />
      <Tabs.Screen
        name="tvdemo"
        options={{
          title: 'TV styling demo',
        }}
      />
    </Tabs>
  );
}
