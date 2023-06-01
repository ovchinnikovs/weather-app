import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { ACTIVE_OPACITY } from '@constants/props';

import { COLOR } from '@theme/colors';

import { IButton } from './button.types';
import { ButtonStyles as Styled } from './button.styles';

export const Button: FC<IButton> = (props) => {
  const {
    type,
    text,
    style,
    isRow,
    height,
    bgColor,
    textColor,
    iconType,
    iconColor,
    fontSize,
    fontWeight,
    isDisabled,
    iconSize,
    isLoading,
    children,
    wrapperSize,
    iconSpacingLeft,
    isFullSizeButton,
    isDisabledWithOpacity,
    activityIndicatorSize,
    activityIndicatorColor,
    activeOpacity = ACTIVE_OPACITY,
    onPress,
    ...systemProps
  } = props;

  return (
    <Styled.Button
      type={type}
      style={style}
      isRow={isRow}
      height={height}
      onPress={onPress}
      bgColor={bgColor}
      isDisabled={isDisabled}
      activeOpacity={activeOpacity}
      isFullSizeButton={isFullSizeButton}
      disabled={isDisabled || isDisabledWithOpacity}
      isDisabledWithOpacity={isDisabledWithOpacity}
      wrapperSize={wrapperSize}
      {...systemProps}
    >
      {isLoading ? (
        <ActivityIndicator
          color={activityIndicatorColor}
          size={activityIndicatorSize}
        />
      ) : (
        <>
          {!!text && (
            <Styled.Text
              fontSize={fontSize}
              weight={fontWeight}
              color={textColor || COLOR.mono.white}
            >
              {text}
            </Styled.Text>
          )}
          {iconType && (
            <Styled.Icon
              type={iconType}
              color={iconColor || COLOR.primary.main}
              iconSpacingLeft={iconSpacingLeft}
              size={iconSize || 24}
            />
          )}
        </>
      )}
      {children}
    </Styled.Button>
  );
};
