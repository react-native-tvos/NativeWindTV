import {
  Tabs,
  TabSlot,
  TabList,
  TabTrigger,
  TabTriggerSlotProps,
} from 'expo-router/ui';
import React from 'react';
import { Pressable, Text } from 'react-native';

import '../global.css';

function CustomTabButton(props: TabTriggerSlotProps) {
  return (
    <Pressable className="flex-1 justify-center items-center" {...props}>
      <Text
        className={
          props.isFocused
            ? 'text-[3vh] text-[--color-green] active:text-blue-500'
            : 'text-[3vh] text-[--color-text] active:text-blue-500'
        }
      >
        {props.children}
      </Text>
    </Pressable>
  );
}
CustomTabButton.displayName = 'CustomTabButton';

export default function TabLayout() {
  return (
    <Tabs>
      <TabList className="flex flex-row absolute top-0 width-full h-[10vh] bg-[--color-background]">
        <TabTrigger name="index" href="/" asChild>
          <CustomTabButton>Home</CustomTabButton>
        </TabTrigger>
        <TabTrigger name="two" href="/(tabs)/two" asChild>
          <CustomTabButton>Two</CustomTabButton>
        </TabTrigger>
        <TabTrigger name="tvdemo" href="/(tabs)/tvdemo" asChild>
          <CustomTabButton>TV demo</CustomTabButton>
        </TabTrigger>
      </TabList>
      <TabSlot />
    </Tabs>
  );
}
