import { vars } from 'nativewind';
import { Text, View } from 'react-native';

import '../../global.css';

const theme = vars({
  '--theme-fg': 'green',
});

const App = () => {
  return (
    <View className="flex-1 justify-center items-center gap-10" style={theme}>
      <Text className="text-5xl text-[--theme-fg]">Variables!!!</Text>
      <Text
        suppressHighlighting
        className="active:scale-150 text-5xl active:text-[--theme-fg] transition"
      >
        Transitions
      </Text>
      <Text className="text-5xl animate-bounce">Animations!!!</Text>
    </View>
  );
};

export default App;
