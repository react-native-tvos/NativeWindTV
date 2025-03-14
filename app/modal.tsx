import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { reactNativeInfo } from '@/constants/ReactNativeInfo';
import { ExternalLink } from '@/components/ExternalLink';

function ThemedText({ type, children }: { type?: string; children: any }) {
  if (type === 'title') {
    return (
      <Text className="text-[5vh] leading-[6vh] text-bold">{children}</Text>
    );
  }
  if (type === 'link') {
    return (
      <Text className="text-[3vh] leading-[4vh] text-bold text-blue-700">
        {children}
      </Text>
    );
  }
  return <Text className="text-[3vh] leading-[4vh]">{children}</Text>;
}
export default function Modal() {
  const { rnVersion, routerVersion, nativewindVersion } = reactNativeInfo;
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  return (
    <View className="flex-1 items-start justify-center ml-[4vh]">
      <View className="mb-[4vh]">
        <ThemedText type="title">About this demo</ThemedText>
      </View>
      <ThemedText>{`expo-router: ${routerVersion}`}</ThemedText>
      <ThemedText>{`react-native-tvos: ${rnVersion}`}</ThemedText>
      <ThemedText>{`nativewind: ${nativewindVersion}`}</ThemedText>
      <ExternalLink href="https://github.com/react-native-tvos/NativeWindTV">
        <View className="flex-row mb-[2vh]">
          <ThemedText>Repository:</ThemedText>
          <View className="ml-[2vw]">
            <ThemedText type="link">
              https://github.com/react-native-tvos/NativeWindTV
            </ThemedText>
          </View>
        </View>
      </ExternalLink>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      <Link href="/" asChild>
        <Pressable className="hover:bg-blue-400">
          <Text className="text-[3vh] text-green-500">Dismiss</Text>
        </Pressable>
      </Link>
    </View>
  );
}
