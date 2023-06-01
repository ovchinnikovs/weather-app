import React from 'react';

import { CustomStatusBar } from '@components/atoms/status-bar';
import { Title } from '@components/atoms/title';

import { useSizes } from '@services/hooks/size.hook';

import { IMAGES } from '@constants/images';

import { useOnBoardingState } from './onboarding.state';
import { OnBoardingStyled as Styled } from './onboarding.styles';

export const Onboarding = () => {
  const { imageSize } = useSizes();

  const { isLoading, onGoToStart } = useOnBoardingState();

  return (
    <Styled.Wrapper>
      <CustomStatusBar />
      <Styled.Image source={IMAGES.onboarding_icon} size={imageSize} />
      <Title mt={50}>Weatherapp</Title>
      <Styled.Button
        text="Try Me"
        isFullSizeButton
        isLoading={isLoading}
        onPress={onGoToStart}
      />
    </Styled.Wrapper>
  );
};
