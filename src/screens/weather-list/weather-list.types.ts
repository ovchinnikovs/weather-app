import { SectionListData, SectionListRenderItem } from 'react-native';

import { IList } from '@typings/types.common';

export interface IAllTemperatureOfDay {
  tempMax: number;
  tempMin: number;
}

export interface IFormattedAllTemperatureOfDay {
  [key: string]: IAllTemperatureOfDay;
}

export interface IWeatherItemDataWithDay {
  list: IList[];
  dayOfWeek: string;
  weekOfYear: string;
  dayOfMonth: string;
  allTemperature: IAllTemperatureOfDay;
}

export interface IWeatherItemDataWithTitleWeek {
  title: string;
  data: IWeatherItemDataWithDay[];
}

export interface IFormattedWeatherItemDataByDay {
  [key: string]: IWeatherItemDataWithDay;
}

export interface IFormattedWeatherDayByWeek {
  [key: string]: IWeatherItemDataWithTitleWeek;
}

export interface IRenderWeatherHeader {
  section: SectionListData<
    IWeatherItemDataWithDay,
    IWeatherItemDataWithTitleWeek
  >;
}

export type TRenderWeather = SectionListRenderItem<
  IWeatherItemDataWithDay,
  IWeatherItemDataWithTitleWeek
>;
