import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  Pressable,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import '../../global.css';

const data: number[] = [...Array(10).keys()];

const TVDemo: () => React.JSX.Element = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900 flex-1';

  const buttonStyleAndroid = `relative m-1.5 bg-blue-500 w-[800px] h-[50px] text-white p-2 font-bold overflow-hidden transition duration-200 hover:bg-blue-300 focus:bg-blue-300 active:bg-green-600`;
  const buttonStyleTVOS = `relative m-3 bg-blue-500 w-[1600px] h-[100px] text-white p-4 font-bold overflow-hidden transition duration-200 hover:bg-blue-300 focus:bg-blue-300 active:bg-green-600`;
  const buttonStyle =
    Platform.OS === 'ios' ? buttonStyleTVOS : buttonStyleAndroid;

  const buttonTextStyleTVOS = 'text-white text-5xl';
  const buttonTextStyleAndroid = 'text-white text-xl';
  const buttonTextStyle =
    Platform.OS === 'ios' ? buttonTextStyleTVOS : buttonTextStyleAndroid;

  const ribbonStyleTVOS = 'ribbonstyletvos ribbontransformtvos';
  const ribbonStyleAndroid = 'ribbonstyleandroid ribbontransformandroid';
  const ribbonStyle =
    Platform.OS === 'ios' ? ribbonStyleTVOS : ribbonStyleAndroid;

  const ribbonTextStyleTVOS = 'text-white text-xl';
  const ribbonTextStyleAndroid = 'text-white text-s';
  const ribbonTextStyle =
    Platform.OS === 'ios' ? ribbonTextStyleTVOS : ribbonTextStyleAndroid;

  const blockTextStyleTVOS = 'text-blue-800 font-bold text-4xl p-4';
  const blockTextStyleAndroid = 'text-blue-800 font-bold text-2xl p-2';
  const blockTextStyle =
    Platform.OS === 'ios' ? blockTextStyleTVOS : blockTextStyleAndroid;

  const renderRow = ({ item }: { item: number }) => {
    return (
      <View key={item}>
        <Text className={blockTextStyle}>{`Block ${item}`}</Text>
        <Pressable
          onPress={() => console.log('onPress')}
          onLongPress={() => console.log('onLongPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          className={buttonStyle}
        >
          <Text className={buttonTextStyle}>Button 1</Text>
          <View className={ribbonStyle}>
            <Text className={ribbonTextStyle}>Press me</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log('onPress')}
          onLongPress={() => console.log('onLongPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          tvParallaxProperties={{
            magnification: 1.05,
            pressMagnification: 1.1,
          }}
          className={buttonStyle}
        >
          <Text className={buttonTextStyle}>Button 2</Text>
          <View className={ribbonStyle}>
            <Text className={ribbonTextStyle}>Cool ribbon style</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => console.log('onPress')}
          onLongPress={() => console.log('onLongPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          tvParallaxProperties={{
            enabled: false,
          }}
          className={buttonStyle}
        >
          <Text className={buttonTextStyle}>Button 3</Text>
          <View className={ribbonStyle}>
            <Text className={ribbonTextStyle}>ABCDEFG</Text>
          </View>
        </Pressable>
        <TouchableHighlight
          onPress={() => console.log('onPress')}
          onLongPress={() => console.log('onLongPress')}
          onPressIn={() => console.log('onPressIn')}
          onPressOut={() => console.log('onPressOut')}
          className={buttonStyle}
        >
          <View>
            <Text className={buttonTextStyle}>TouchableHighlight</Text>
            <View className={ribbonStyle}>
              <Text className={ribbonTextStyle}>LMNOP</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };
  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={data}
        renderItem={renderRow}
      ></FlatList>
    </SafeAreaView>
  );
};

export default TVDemo;
