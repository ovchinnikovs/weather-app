import { IList } from '@typings/types.common';

export const getAverageHourForDay = (list: IList[]) =>
  list.reduce((acc, hour) => {
    const date = new Date(hour.dt_txt).getHours();

    if (date === 15) {
      acc = hour;
    }
    if (date === 12) {
      acc = hour;
    }
    if (date === 9) {
      acc = hour;
    }
    if (date === 6) {
      acc = hour;
    }
    if (date === 3) {
      acc = hour;
    }
    if (date === 0) {
      acc = hour;
    }
    return acc;
  }, {} as IList);

export const ICON_WEATHER_MAP: Record<string, string> = {
  w01d: 'DaySunny',
  w01n: 'NightClear',
  w02d: 'Cloudy',
  w02n: 'NightCloudyGusts',
  w03d: 'CloudDown',
  w03n: 'NightPartlyCloudy',
  w04d: 'DayCloudyHigh',
  w04n: 'NightAltCloudyHigh',
  w09d: 'DayShowers',
  w09n: 'NightShowers',
  w10d: 'DayRain',
  w10n: 'NightRain',
  w11d: 'DayThunderstorm',
  w11n: 'NightThunderstorm',
  w13d: 'Snow',
  w13n: 'NightSnow',
  w50d: 'DayFog',
  w50n: 'NightFog',
};
