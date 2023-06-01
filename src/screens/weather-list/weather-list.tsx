import React from 'react';
import { SectionList } from 'react-native';

import { CustomHeader } from '@components/molecules/custom-header';
import { WeatherBottomSheet } from '@components/organisms/weather-bottom-sheet';

import { WeatherHeader } from './components/weather-header';
import { WeatherBox } from './components/weather-box';

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

  const renderWeatherHeader = ({ section }: IRenderWeatherHeader) => (
    <WeatherHeader section={section} />
  );

  const keyExtractor = (item: IWeatherItemDataWithDay) => item.dayOfWeek;

  const {
    allTemperature: { tempMax, tempMin },
    list: [
      {
        main: { temp },
        weather: [currentDayWeatherData],
      },
    ],
  } = weekSections?.[0]?.data?.[0];

  return (
    <Styled.Wrapper>
      <CustomHeader
        tempMax={tempMax}
        tempMin={tempMin}
        currentTemp={temp}
        cityName={city.name}
        currentWeatherData={currentDayWeatherData}
      />
      <SectionList
        bounces={false}
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
