import { Href, Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';

const pressableStyle = `flex-3 align-center items-center p-[1vw] h-[10vh]`;
const labelStyle = ` text-[2.5vw]`;

export default function TabLayout() {
  const router = useRouter();

  const TabLayoutButton = ({
    label,
    route,
  }: {
    label: string;
    route: Href;
  }) => {
    return (
      <Pressable
        className={pressableStyle}
        onPress={() => {
          router.navigate(route);
        }}
      >
        <Text className={labelStyle}>{label}</Text>
      </Pressable>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarPosition: 'top',
        tabBarIcon: () => null,
        tabBarStyle: {
          height: '10%',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarButton: () => <TabLayoutButton label="Home" route="/(tabs)" />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Two',
          tabBarButton: () => (
            <TabLayoutButton label="Two" route="/(tabs)/two" />
          ),
        }}
      />
      <Tabs.Screen
        name="tvdemo"
        options={{
          title: 'TV styling demo',
          tabBarButton: () => (
            <TabLayoutButton label="TV styling demo" route="/(tabs)/tvdemo" />
          ),
        }}
      />
    </Tabs>
  );
}
