import React, { FC } from 'react';
import { scale } from 'react-native-size-scaling';

import { ICON_MAP } from './icon.map';
import { IIconProps } from './icon.types';

import { HIT_SLOP_BIG } from '@constants/hit-slop';
import { ACTIVE_OPACITY } from '@constants/props';

import { IconStyles as Styled } from './icon.styles';

export type TIconNames = keyof typeof ICON_MAP;

export const Icon: FC<IIconProps> = ({
  type,
  size,
  style,
  height,
  width,
  color,
  delayLongPress,
  isWithoutPadding,
  isDisabledWithOpacity,
  activeOpacity = ACTIVE_OPACITY,
  onPress,
  onLongPress,
}) => {
  const SelectedIcon = ICON_MAP[type];
  const IconProps = SelectedIcon({})?.props;

  const iconHeight = size ?? height ?? IconProps.height;
  const iconWidth = size ?? width ?? IconProps.width;

  return onPress || onLongPress ? (
    <Styled.Press
      disabled={isDisabledWithOpacity}
      isWithoutPadding={isWithoutPadding}
      isDisabledWithOpacity={isDisabledWithOpacity}
      onPress={onPress && onPress}
      onLongPress={onLongPress && onLongPress}
      delayLongPress={delayLongPress}
      hitSlop={HIT_SLOP_BIG}
      activeOpacity={activeOpacity}
      style={[{ height: iconHeight, width: iconWidth }, style]}
    >
      <SelectedIcon
        fill={color}
        color={color}
        style={{ height: scale(iconHeight), width: scale(iconWidth) }}
      />
    </Styled.Press>
  ) : (
    <Styled.Wrapper style={[{ height: iconHeight, width: iconWidth }, style]}>
      <SelectedIcon
        fill={color}
        color={color}
        style={{ height: scale(iconHeight), width: scale(iconWidth) }}
      />
    </Styled.Wrapper>
  );
};
