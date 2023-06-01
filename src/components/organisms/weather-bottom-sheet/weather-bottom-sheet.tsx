import React, { memo, useMemo } from 'react';
import {
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';

import { Text } from '@components/atoms/text';
import { getAverageHourForDay } from '@components/molecules/slide/slide.utils';
import { CustomBottomSheetBackdrop } from '@components/atoms/custom-bottom-sheet-backdrop';

import { COLOR } from '@theme/colors';

import { AnimatedCarousel } from '../animated-carousel';
import { IWeatherBottomSheet } from './weather-bottom-sheet.types';
import { useWeatherBottomSheetState } from './weather-bottom-sheet.state';
import { WeatherBottomSheetStyles as Styled } from './weather-bottom-sheet.styles';

export const WeatherBottomSheet: React.FC<IWeatherBottomSheet> = memo(
  (props) => {
    const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

    const {
      animatedSnapPoints,
      animatedHandleHeight,
      animatedContentHeight,
      handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

    const {
      weatherDays,
      currentIndex,
      bottomSheetModalRef,
      onCancel,
      setCurrentIndex,
      onDismissBottomSheet,
    } = useWeatherBottomSheetState(props);

    const weatherDay = weatherDays[currentIndex];

    const averageHourForDay = getAverageHourForDay(weatherDay.list);

    const day = currentIndex === 0 ? weatherDay.list[0] : averageHourForDay;

    const pop =
      day.pop === 1 || day.pop === 0 ? day.pop : day.pop.toString().slice(2);

    return (
      <BottomSheetModal
        detached
        enablePanDownToClose
        handleComponent={null}
        ref={bottomSheetModalRef}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        snapPoints={animatedSnapPoints}
        onDismiss={onDismissBottomSheet}
        backdropComponent={(props) => <CustomBottomSheetBackdrop {...props} />}
      >
        <Styled.BottomSheetInner onLayout={handleContentLayout}>
          <Styled.HandleWrapper>
            <Styled.CloseLine />
            <Styled.Button
              iconType="cross"
              iconSize={8}
              type="rounded"
              wrapperSize={20}
              onPress={onCancel}
              iconColor={COLOR.gray.bombay}
              bgColor={COLOR.gray.abbey}
            />
          </Styled.HandleWrapper>
          <AnimatedCarousel
            weatherDays={weatherDays}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <Styled.WeatherDescription>
            <Styled.Title>Weather</Styled.Title>
            <Styled.Text>
              Cloudiness{' '}
              <Text color={COLOR.secondary.buttercup}>{day.clouds.all}%</Text>
            </Styled.Text>
            <Styled.Text>
              Wind speed{' '}
              <Text color={COLOR.secondary.buttercup}>{day.wind.speed}%</Text>,
              direction{' '}
              <Text color={COLOR.secondary.buttercup}>{day.wind.deg}</Text> deg,
            </Styled.Text>
            <Styled.Text>
              Wind gust{' '}
              <Text color={COLOR.secondary.buttercup}>{day.wind.gust}</Text>{' '}
              meter/sec.
            </Styled.Text>
            <Styled.Text>
              Probability of precipitation.{' '}
              <Text color={COLOR.secondary.buttercup}>{pop}%</Text>
            </Styled.Text>
          </Styled.WeatherDescription>
        </Styled.BottomSheetInner>
      </BottomSheetModal>
    );
  }
);
