import { Text, View, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="bg-neutral-300 dark:bg-slate-900 flex-1"
    >
      <View className="m-20">
        <Text className="text-orange-400 text-5xl dark:text-green-200">
          Tab two!!
        </Text>
      </View>
    </ScrollView>
  );
}
