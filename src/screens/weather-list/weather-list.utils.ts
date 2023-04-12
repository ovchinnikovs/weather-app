import { format } from 'date-fns';

import {
  IFormattedAllTemperatureOfDay,
  IFormattedWeatherDayByWeek,
  IFormattedWeatherItemDataByDay,
  IWeatherItemDataWithDay,
  IWeatherItemDataWithTitleWeek,
} from './weather-list.types';

import { isToday } from '@services/helpers/date';

import { IList } from '@typings/types.common';

const getDayOfWeek = (date: string) => {
  const dirtyDate = new Date(date);

  if (isToday(dirtyDate)) {
    return 'Today';
  }

  return format(dirtyDate, 'EEE');
};

const getTemperatureOfAllDay = (list: IList[]) =>
  list.reduce((acc, weatherItem) => {
    const dayOfWeek = getDayOfWeek(weatherItem.dt_txt);

    const max = Math.round(weatherItem.main.temp_max);
    const min = Math.round(weatherItem.main.temp_min);

    const data = acc[dayOfWeek]
      ? {
          tempMax: max > acc[dayOfWeek].tempMax ? max : acc[dayOfWeek].tempMax,
          tempMin: min < acc[dayOfWeek].tempMin ? min : acc[dayOfWeek].tempMin,
        }
      : {
          tempMax: max,
          tempMin: min,
        };

    acc[dayOfWeek] = data;
    return acc;
  }, {} as IFormattedAllTemperatureOfDay);

export const groupWeatherByDayOfWeek = (list: IList[]) => {
  const temperatureOfAllDay = getTemperatureOfAllDay(list);

  const formattedWeatherItemByDay = list.reduce((acc, weatherItem) => {
    const dayOfWeek = getDayOfWeek(weatherItem.dt_txt);
    const dayOfMonth = format(new Date(weatherItem.dt_txt), 'd');
    const weekOfYear = format(new Date(weatherItem.dt_txt), 'I');

    const data: IWeatherItemDataWithDay = acc[dayOfWeek]
      ? { ...acc[dayOfWeek], list: [weatherItem, ...acc[dayOfWeek].list] }
      : {
          dayOfWeek,
          weekOfYear,
          dayOfMonth,
          list: [weatherItem],
          allTemperature: temperatureOfAllDay[dayOfWeek],
        };

    acc[dayOfWeek] = data;
    return acc;
  }, {} as IFormattedWeatherItemDataByDay);

  return Object.values(formattedWeatherItemByDay)
    .reverse()
    .map((day) => ({ ...day, list: day.list.reverse() }));
};

const getTitleWeek = (dayOfWeek: string) => {
  const currentWeek = format(new Date(), 'I');

  if (currentWeek === dayOfWeek) {
    return 'current week';
  }

  return 'second week';
};

export const groupWeatherByWeek = (list: IList[]) => {
  const weatherDays = groupWeatherByDayOfWeek(list);

  const formattedDaysByWeek = weatherDays.reduce((acc, day) => {
    const weekName = getTitleWeek(day.weekOfYear);
    const data: IWeatherItemDataWithTitleWeek = acc[weekName]
      ? { ...acc[weekName], data: [day, ...acc[weekName].data] }
      : {
          title: weekName,
          data: [day],
        };

    acc[weekName] = data;
    return acc;
  }, {} as IFormattedWeatherDayByWeek);

  return Object.values(formattedDaysByWeek).reverse();
};
