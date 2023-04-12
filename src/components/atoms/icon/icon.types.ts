import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

import { TIconNames } from './icon';

export interface IIconProps {
  type: TIconNames;
  color?: string;
  size?: number;
  delayLongPress?: number;
  width?: number;
  height?: number;
  isDisabledWithOpacity?: boolean;
  activeOpacity?: number;
  isWithoutPadding?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
}
