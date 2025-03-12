import {
  SafeAreaView,
  Text,
  Pressable,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import '../../global.css';

const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900 flex-1 w-screen';

const buttonStyle = `relative m-[0.5vw] bg-blue-500 w-[80vw] h-[10vh] text-white p-[1vw] font-bold overflow-hidden transition duration-500 hover:bg-blue-300 focus:bg-blue-300 active:bg-green-600`;

const buttonTextStyle = 'text-white text-[2.5vw]';

const ribbonStyle = 'ribbonstyle';

const ribbonTextStyle = 'text-white text-[1vw]';

const blockTextStyle = 'text-blue-800 font-bold text-[2.5vw] p-[1.5vw]';

const data: number[] = [...Array(10).keys()];

const TVDemo: () => React.JSX.Element = () => {
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
          tvParallaxProperties={{ enabled: false }}
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
    <View className={backgroundStyle}>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          data={data}
          renderItem={renderRow}
        ></FlatList>
      </SafeAreaView>
    </View>
  );
};

export default TVDemo;
