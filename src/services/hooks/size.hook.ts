import {
  height,
  isAndroid,
  isIOS,
  isTablet,
  scale,
  width,
} from 'react-native-size-scaling';

export const SMALL_DEVICE_HEIGHT = 732;

export const useSizes = () => {
  const deviceHeight = height;
  const deviceWidth = width;

  const isSmallScreen = deviceHeight <= SMALL_DEVICE_HEIGHT;

  const imageSize = deviceWidth / 2.5 > 216 ? 216 : deviceWidth / 2.5;

  return {
    scale,
    isIOS,
    isTablet,
    isAndroid,
    deviceHeight,
    deviceWidth,
    isSmallScreen,
    imageSize,
  };
};
