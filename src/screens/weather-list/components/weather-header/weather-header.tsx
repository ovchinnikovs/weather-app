import React, { FC } from 'react';
import { SectionListData } from 'react-native';

import {
  IWeatherItemDataWithDay,
  IWeatherItemDataWithTitleWeek,
} from '@screens/weather-list';

import { TitleStyles as Styled } from './weather-header.styles';

interface IWeatherHeader {
  section: SectionListData<
    IWeatherItemDataWithDay,
    IWeatherItemDataWithTitleWeek
  >;
}

export const WeatherHeader: FC<IWeatherHeader> = ({ section }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{section.title}</Styled.Title>
    </Styled.Wrapper>
  );
};
