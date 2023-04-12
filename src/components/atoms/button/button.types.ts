import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SpaceProps } from 'styled-system';

import { TIconNames } from '@components/atoms/icon';

import { TFontSizes, TFontWeights } from '@theme/fonts';

export type TButton = 'default' | 'rounded';

export interface IButton extends SpaceProps {
  text?: string;
  textColor?: string;
  isRow?: boolean;
  isDisabled?: boolean;
  iconType?: TIconNames;
  iconSize?: number;
  fontSize?: TFontSizes;
  fontWeight?: TFontWeights;
  iconColor?: string;
  height?: number;
  bgColor?: string;
  activeOpacity?: number;
  isLoading?: boolean;
  isFullSizeButton?: boolean;
  activityIndicatorColor?: string;
  activityIndicatorSize?: number | 'small' | 'large' | undefined;
  isDisabledWithOpacity?: boolean;
  style?: StyleProp<ViewStyle>;
  iconSpacingLeft?: number;
  type?: TButton;
  wrapperSize?: number;
  children?: React.ReactNode;
  onPress: () => void;
}
