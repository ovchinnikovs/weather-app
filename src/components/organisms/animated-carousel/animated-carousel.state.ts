import { useRef } from 'react';
import { format } from 'date-fns';
import { Animated, ViewToken } from 'react-native';

import { useSizes } from '@services/hooks/size.hook';

import { TAnimatedCarousel } from './animated-carousel.types';

export const useAnimatedCarouselState = ({
  weatherDays,
  currentIndex,
  setCurrentIndex,
}: TAnimatedCarousel) => {
  const { deviceWidth: width } = useSizes();

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef<any>(null);

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
    waitForInteraction: true,
    minimumViewTime: 0.01,
  }).current;

  const onItemChange = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      viewableItems.forEach((viewableItem) => {
        if (viewableItem.index !== null) {
          setCurrentIndex(viewableItem.index);
        }
      });
    }
  ).current;

  const currentDate = format(
    new Date(weatherDays[currentIndex].list[0].dt_txt),
    'PPP'
  );

  return {
    width,
    scrollX,
    viewConfig,
    slidesRef,
    currentIndex,
    weatherDays,
    currentDate,
    onItemChange,
    setCurrentIndex,
  };
};
