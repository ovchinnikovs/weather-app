import { ICity, IList } from '@typings/types.common';

export interface IWeatherState {
  list: IList[];
  city: ICity;
  loading: boolean;
}
