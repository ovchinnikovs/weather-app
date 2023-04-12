import { format } from 'date-fns';
import React, { FC } from 'react';
import WeatherChart from 'react-native-weather-chart';

import { Icon, TIconNames } from '@components/atoms/icon';
import { ISlide } from './slide.types';

import { getAverageHourForDay, ICON_WEATHER_MAP } from './slide.utils';

import { COLOR } from '@theme/colors';
import { SlideStyles as Styled } from './slide.styles';

export const Slide: FC<ISlide> = (props) => {
  const { list, style, width, isToday, allTemperature, nextDayListWeather } =
    props;

  const { tempMax, tempMin } = allTemperature;

  const day = getAverageHourForDay(list);

  const todayIcon = list[0].weather[0].icon;

  const icon = isToday ? todayIcon : day.weather[0].icon;

  const isLastOnList = list.length === 1;

  const temps = (isLastOnList ? nextDayListWeather : list).map((t) =>
    Math.round(t.main.temp)
  );
  const hour = (isLastOnList ? nextDayListWeather : list).map((t) =>
    format(new Date(t.dt_txt), 'HH')
  );
  const icons = (isLastOnList ? nextDayListWeather : list).map(
    (l) => ICON_WEATHER_MAP[`w${l.weather[0].icon}`]
  );

  const dataChart = {
    values: temps,
    textBottom: hour,
    textTop: temps.map((t) => `${t}°`),
    iconBottom: icons,
  };

  const settings = {
    colSpace: (width - 122) / (temps.length - 1),
    marginTop: 15,
    marginBottom: 10,
  };

  const pod = list[0].sys.pod === 'n' ? 'Night' : 'Day';

  const currentTemp = Math.round(list[0].main.temp);

  return (
    <Styled.Wrapper style={[style, { width }]}>
      <Styled.MainBox>
        <Styled.CurrentWeather>
          <Styled.Box>
            {isToday ? (
              <Styled.Temp
                color={COLOR.secondary.buttercup}
              >{`${currentTemp}°`}</Styled.Temp>
            ) : (
              <>
                <Styled.Temp
                  color={COLOR.gray.lightSecondary}
                >{`${tempMax}°`}</Styled.Temp>
                <Styled.Temp
                  color={COLOR.gray.jumbo}
                >{`${tempMin}°`}</Styled.Temp>
              </>
            )}
            <Icon type={`w${icon}` as TIconNames} size={45} />
          </Styled.Box>
          {isToday && <Styled.POD>{pod}</Styled.POD>}
        </Styled.CurrentWeather>
        {isToday ? (
          <Styled.Box>
            <Styled.TempDescription>
              <Icon type="arrow_down" size={10} color={COLOR.gray.jumbo} />
              <Styled.Text>{`${tempMin}°`}</Styled.Text>
            </Styled.TempDescription>
            <Styled.TempDescription>
              <Icon type="arrow_up" size={10} color={COLOR.gray.jumbo} />
              <Styled.Text>{`${tempMax}°`}</Styled.Text>
            </Styled.TempDescription>
          </Styled.Box>
        ) : (
          <Styled.Text>Degrees celsius (°C)</Styled.Text>
        )}
        <Styled.ViewChart>
          {isLastOnList && <Styled.TextChart>next day</Styled.TextChart>}
          <WeatherChart data={dataChart} settings={settings} />
        </Styled.ViewChart>
      </Styled.MainBox>
    </Styled.Wrapper>
  );
};
