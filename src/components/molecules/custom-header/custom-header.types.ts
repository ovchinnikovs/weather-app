import { StyleProp, ViewStyle } from 'react-native';

import { IWeather } from '@typings/types.common';

export interface ICustomHeader {
  city: string;
  tempMax: number;
  tempMin: number;
  currentTemp: number;
  currentWeatherData: IWeather;
  style?: StyleProp<ViewStyle>;
}
