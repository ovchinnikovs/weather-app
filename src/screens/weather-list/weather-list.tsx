import React from 'react';
import { SectionList } from 'react-native';

import { CustomHeader } from '@components/molecules/custom-header';
import { WeatherBottomSheet } from '@components/organisms/weather-bottom-sheet';
import { WeatherHeader } from './components/atoms/weather-header';
import { WeatherBox } from './components/molecules/weather-box';
import {
  IRenderWeatherHeader,
  IWeatherItemDataWithDay,
  TRenderWeather,
} from './weather-list.types';

import { useWeatherListState } from './weather-list.state';

import {
  styles,
  WeatherListScreenStyles as Styled,
} from './weather-list.styles';

export const WeatherListScreen = () => {
  const {
    city,
    initialIndex,
    weekSections,
    bottomSheetModalRef,
    setInitialIndex,
    openWeatherModal,
  } = useWeatherListState();

  const renderWeather: TRenderWeather = ({ item, index, section }) => {
    const isLast = index === section.data.length - 1;
    const isSecondWeek = section.title === 'second week';
    const currentWeek = weekSections.find((w) => w.title === 'current week');
    const secondWeekIndex =
      Number(currentWeek?.data.length) + section.data.length - 1;

    return (
      <WeatherBox
        item={item}
        isLast={isLast}
        openWeatherModal={openWeatherModal(
          isSecondWeek ? secondWeekIndex : index
        )}
      />
    );
  };

  const renderWeatherHeader = ({ section }: IRenderWeatherHeader) => {
    return <WeatherHeader section={section} />;
  };

  const keyExtractor = (item: IWeatherItemDataWithDay) => item.dayOfWeek;

  const { allTemperature, list } = weekSections[0].data[0];

  return (
    <Styled.Wrapper>
      <CustomHeader
        city={city.name}
        tempMax={allTemperature.tempMax}
        tempMin={allTemperature.tempMin}
        currentTemp={list[0].main.temp}
        currentWeatherData={list[0].weather[0]}
      />
      <SectionList
        sections={weekSections}
        keyExtractor={keyExtractor}
        renderItem={renderWeather}
        renderSectionHeader={renderWeatherHeader}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalSpacing}
      />
      <WeatherBottomSheet
        initialIndex={initialIndex}
        setInitialIndex={setInitialIndex}
        bottomSheetModalRef={bottomSheetModalRef}
      />
    </Styled.Wrapper>
  );
};
