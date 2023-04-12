import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { SpaceProps } from 'styled-system';

import { THitSlop } from '@constants/hit-slop';

import { TFontFamilies, TFontSizes, TFontWeights } from '@theme/fonts';

export interface IText extends SpaceProps {
  children: ReactNode;
  color?: string;
  hitSlop?: THitSlop;
  family?: TFontFamilies;
  weight?: TFontWeights;
  fontSize?: TFontSizes;
  style?: StyleProp<TextStyle>;
  url?: string;
  numberOfLines?: number;
  onPress?: () => void;
}
