import React, { FC, memo } from 'react';

import { Icon, TIconNames } from '@components/atoms/icon';
import { CustomStatusBar } from '@components/atoms/status-bar';
import { ICustomHeader } from './custom-header.types';

import { useSizes } from '@services/hooks/size.hook';

import { CustomHeaderStyles as Styled } from './custom-header.styles';

export const CustomHeader: FC<ICustomHeader> = memo(
  ({ city, currentWeatherData, currentTemp, tempMax, tempMin, style }) => {
    const { isSmallScreen } = useSizes();
    const { icon, description } = currentWeatherData;

    const currTemp = Math.round(currentTemp);

    return (
      <>
        <CustomStatusBar />
        <Styled.CustomHeader isSmallScreen={isSmallScreen}>
          <Styled.Wrapper style={style}>
            <Styled.Main>
              <Styled.Title mr="15px">{city}</Styled.Title>
              <Styled.Title mr="7px">{`${currTemp}°`}</Styled.Title>
              <Icon type={`w${icon}` as TIconNames} size={30} />
            </Styled.Main>
            <Styled.Description>{`${description}, max ${tempMax}° min ${tempMin}° temp`}</Styled.Description>
          </Styled.Wrapper>
        </Styled.CustomHeader>
      </>
    );
  }
);
