import { vars } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

import '../../global.css';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const theme = vars({
  '--theme-fg': Colors['light'].tint,
  '--theme-bg': Colors['light'].background,
  '--theme-fg-dark': Colors['dark'].tint,
  '--theme-bg-dark': Colors['dark'].background,
});

const App = () => {
  const router = useRouter();
  return (
    <View
      className="flex-1 justify-center items-center gap-10 bg-[--theme-bg] dark:bg-[--theme-bg-dark]"
      style={theme}
    >
      <Text className="text-[5vh] text-green-600">Variables!!!</Text>
      <Pressable
        onPress={() => {}}
        tvParallaxProperties={{ enabled: false }}
        className="transition duration-500 focus:scale-125 active:scale-150"
      >
        {({ focused, pressed, hovered }) => {
          return (
            <Text className="text-[5vh] text-[--theme-fg] focus:text-blue-600 hover:text-blue-600">{`Transitions button${
              pressed
                ? ' pressed'
                : hovered
                ? ' hovered'
                : focused
                ? ' focused'
                : ''
            }`}</Text>
          );
        }}
      </Pressable>
      <Text className="text-[5vh] animate-bounce">Animations!!!</Text>
      <Pressable onPress={() => router.navigate('/modal')} className="">
        <Text className="text-[3vh] text-[--theme-fg] hover:text-bold focus:text-bold active:text-[--theme-bg]">
          About
        </Text>
      </Pressable>
    </View>
  );
};

export default App;
