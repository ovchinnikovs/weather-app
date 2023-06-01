import React, { FC } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Animated, ListRenderItem } from 'react-native';

import { Slide } from '@components/molecules/slide';
import { CustomStatusBar } from '@components/atoms/status-bar';
import { IWeatherItemDataWithDay } from '@screens/weather-list';

import { COLOR } from '@theme/colors';

import { useAnimatedCarouselState } from './animated-carousel.state';
import { IAnimatedCarousel, TGetItemLayout } from './animated-carousel.types';
import { AnimatedCarouselStyles as Styled } from './animated-carousel.styles';

export const AnimatedCarousel: FC<IAnimatedCarousel> = (props) => {
  const {
    width,
    scrollX,
    viewConfig,
    weatherDays,
    currentDate,
    currentIndex,
    slidesRef,
    onItemChange,
    setCurrentIndex,
  } = useAnimatedCarouselState(props);

  const renderItem: ListRenderItem<IWeatherItemDataWithDay> = ({
    item,
    index,
  }) => (
    <Slide
      {...item}
      width={width}
      isToday={index === 0}
      nextDayListWeather={weatherDays[1].list}
    />
  );

  const renderDays = weatherDays.map((slide, i) => {
    const inputRange = [
      (i - 1) * width,
      i * width,
      (i + 1) * width,
      (i + 1) * width * 2,
    ];

    const dotWidth = scrollX.interpolate({
      inputRange,
      outputRange: [30, 35, 32, 30],
      extrapolate: 'clamp',
    });

    const bgColor = scrollX.interpolate({
      inputRange,
      outputRange: [
        COLOR.gray.abbey,
        i === 0 ? COLOR.primary.light : COLOR.mono.white,
        COLOR.gray.abbey,
        COLOR.gray.abbey,
      ],
      extrapolate: 'clamp',
    });

    const onPressDay = () => {
      setCurrentIndex(i);
      slidesRef.current.scrollToOffset({ animated: true, offset: i * width });
    };

    return (
      <Styled.Day onPress={onPressDay}>
        <Styled.DayText activeDay={currentIndex === i}>
          {slide.dayOfWeek}
        </Styled.DayText>
        <Styled.CircleDay
          key={i}
          style={{
            width: dotWidth,
            height: dotWidth,
            backgroundColor: bgColor,
          }}
        >
          <Styled.DayNum activeDay={currentIndex === i}>
            {slide.dayOfMonth}
          </Styled.DayNum>
        </Styled.CircleDay>
      </Styled.Day>
    );
  });

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const keyExtractor = (item: IWeatherItemDataWithDay) => item.dayOfMonth;

  const getItemLayout: TGetItemLayout = (_, index) => ({
    index,
    length: width,
    offset: index * width,
  });

  return (
    <Styled.Wrapper>
      <CustomStatusBar />
      <Styled.DaysWrapper>{renderDays}</Styled.DaysWrapper>
      <Styled.Date>{currentDate}</Styled.Date>
      <FlatList
        horizontal
        pagingEnabled
        ref={slidesRef}
        onScroll={onScroll}
        data={weatherDays}
        scrollEventThrottle={32}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        viewabilityConfig={viewConfig}
        initialScrollIndex={currentIndex}
        onViewableItemsChanged={onItemChange}
        showsHorizontalScrollIndicator={false}
      />
    </Styled.Wrapper>
  );
};
