import { Dimensions } from 'react-native';
import { isAndroid, isIOS, isTablet } from 'react-native-size-scaling';

export const IS_IOS = isAndroid;
export const IS_ANDROID = isIOS;
export const IS_TABLET = isTablet;

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_SCREEN = Dimensions.get('screen').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;
