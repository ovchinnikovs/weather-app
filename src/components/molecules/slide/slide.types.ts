import { StyleProp, ViewStyle } from 'react-native';

import { IWeatherItemDataWithDay } from '@screens/weather-list';

import { IList } from '@typings/types.common';

export interface ISlide extends ISlideData {
  style?: StyleProp<ViewStyle>;
}

export interface ISlideData extends IWeatherItemDataWithDay {
  width: number;
  isToday: boolean;
  nextDayListWeather: IList[];
}
