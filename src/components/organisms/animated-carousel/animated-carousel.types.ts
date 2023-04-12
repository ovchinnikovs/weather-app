import { Dispatch, SetStateAction } from 'react';

import { IWeatherItemDataWithDay } from '@screens/weather-list';

export type TGetItemLayout = (
  data: IWeatherItemDataWithDay[] | null | undefined,
  index: number
) => {
  length: number;
  offset: number;
  index: number;
};

export interface IAnimatedCarousel {
  currentIndex: number;
  weatherDays: IWeatherItemDataWithDay[];
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

export type TAnimatedCarousel = IAnimatedCarousel;
