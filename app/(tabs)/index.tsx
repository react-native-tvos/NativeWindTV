import { vars } from 'nativewind';
import { Pressable, Text, View } from 'react-native';

import { nativewindColorTheme } from '@/constants/Colors';
import { useRouter } from 'expo-router';

import '../../global.css';

const theme = vars(nativewindColorTheme);

const App = () => {
  const router = useRouter();
  return (
    <View
      className="flex-1 justify-center items-center gap-10 bg-[--background-light] dark:bg-[--background-dark]"
      style={theme}
    >
      <Text className="text-[5vh] text-[--icon-light] dark:text-[--icon-dark]">
        Variables!!!
      </Text>
      <Pressable
        onPress={() => {}}
        tvParallaxProperties={{ enabled: false }}
        className="transition duration-500 focus:scale-125 active:scale-150"
      >
        {({ focused, pressed, hovered }) => {
          return (
            <Text className="text-[5vh] text-[--link-light] dark:text-[--link-dark] transition duration-500 active:text-green-500 active:scale-110  focus:text-blue-600 hover:text-blue-600">{`Transitions button${
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
        {() => (
          <Text className="text-[3vh] text-[--link-light] dark:text-[--link-dark] hover:font-bold focus:font-bold active:text-blue-500">
            About
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default App;
