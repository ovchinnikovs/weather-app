import { format } from 'date-fns';
import React, { FC } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { TIconNames } from '@components/atoms/icon';
import { IWeatherItemDataWithDay } from '@screens/weather-list/weather-list.types';

import { useSizes } from '@services/hooks/size.hook';

import { HIT_SLOP_MEGA } from '@constants/hit-slop';

import { IList } from '@typings/types.common';

import { WeatherBox as Styled } from './weather-box.styles';

interface IWeatherBox {
  isLast: boolean;
  item: IWeatherItemDataWithDay;
  openWeatherModal: () => void;
}

export const WeatherBox: FC<IWeatherBox> = (props) => {
  const { isLast, item, openWeatherModal } = props;
  const { dayOfWeek, list: weatherHours } = item;

  const { deviceWidth } = useSizes();

  const renderWeatherHours: ListRenderItem<IList> = ({ item, index }) => {
    const temp = Math.round(item.main.temp);
    const hour = format(new Date(item.dt_txt), 'HH');

    const iconType = `w${item.weather[0].icon}` as TIconNames;
    const isLast = index === weatherHours.length - 1;
    return (
      <Styled.HourBox isLast={isLast} onPress={openWeatherModal}>
        <Styled.Hour>{hour}</Styled.Hour>
        <Styled.Icon type={iconType} size={25} />
        <Styled.Temp>{`${temp}°`}</Styled.Temp>
      </Styled.HourBox>
    );
  };

  const keyExtractor = (item: IList) => item.dt_txt;

  return (
    <Styled.Wrapper isLast={isLast}>
      <Styled.Text hitSlop={HIT_SLOP_MEGA} onPress={openWeatherModal}>
        {dayOfWeek}
      </Styled.Text>
      <FlatList
        horizontal
        data={weatherHours}
        style={{ width: deviceWidth - 140 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderWeatherHours}
      />
      {!isLast && <Styled.Line />}
    </Styled.Wrapper>
  );
};
