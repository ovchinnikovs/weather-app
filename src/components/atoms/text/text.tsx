import React, { FC } from 'react';
import { Linking, TextProps, TouchableOpacity } from 'react-native';

import { HIT_SLOP_SMALL } from '@constants/hit-slop';
import { ACTIVE_OPACITY } from '@constants/props';

import { COLOR } from '@theme/colors';

import { IText } from './text.types';
import { TextStyles as Styled } from './text.styles';

export const Text: FC<IText & TextProps> = (props) => {
  const {
    url,
    style,
    color,
    family,
    weight,
    hitSlop,
    children,
    fontSize,
    numberOfLines,
    ellipsizeMode,
    onPress,
    ...systemProps
  } = props;

  const openLink = () => Linking.openURL(url as string);

  return url || onPress ? (
    <TouchableOpacity
      style={style}
      hitSlop={hitSlop || HIT_SLOP_SMALL}
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress ? onPress : openLink}
      {...systemProps}
    >
      <Styled.Text
        weight={weight}
        color={color ? color : COLOR.gray.primary}
        size={fontSize ? fontSize : 14}
        maxFontSizeMultiplier={1}
        allowFontScaling={false}
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
      >
        {children}
      </Styled.Text>
    </TouchableOpacity>
  ) : (
    <Styled.Text
      color={color}
      style={style}
      weight={weight}
      family={family}
      size={fontSize ? fontSize : 14}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
    >
      {children}
    </Styled.Text>
  );
};
