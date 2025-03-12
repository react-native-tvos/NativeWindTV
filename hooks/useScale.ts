import { useWindowDimensions } from 'react-native';

export type ScaleResult = {
  width: number;
  height: number;
  scale: number;
};
export function useScale(): ScaleResult {
  const { width, height } = useWindowDimensions();
  const scale = width > height ? width / 1000 : height / 1000;
  return {
    width,
    height,
    scale,
  };
}
