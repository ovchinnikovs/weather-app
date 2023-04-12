import styled from 'styled-components/native';

import { Text } from '@components/atoms/text';

import { DEVICE_HEIGHT } from '@services/helpers/dimensions.helper';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const SlideStyles = {
  Wrapper: styled.View``,
  MainBox: styled.View`
    border-radius: 7px;
    border-width: 1px;
    margin: ${DEVICE_HEIGHT / 40}px 20px 0;
    padding: 0 10px;
    border-color: ${COLOR.gray.secondary};
    background-color: ${COLOR.gray.secondary};
  `,
  CurrentWeather: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
  `,
  Box: styled.View`
    flex-direction: row;
  `,
  Temp: styled(Text)`
    font-size: ${FONTS.size[40]};
    margin: 0 0 0 4px;
  `,
  Text: styled(Text)`
    color: ${COLOR.gray.jumbo};
    font-size: ${FONTS.size[11]};
    margin: 0 0 0 4px;
  `,
  TempDescription: styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0 0 0 10px;
  `,
  ViewChart: styled.View`
    height: 300px;
    margin: 10px 0;
    border-radius: 10px;
    background-color: ${COLOR.gray.codGray};
  `,
  TextChart: styled(Text)`
    color: ${COLOR.gray.lightSecondary};
    text-align: center;
    font-size: ${FONTS.size[12]};
    margin: 10px 0 0 0;
  `,
  POD: styled(Text)`
    color: ${COLOR.gray.abbey};
    font-size: ${FONTS.size[28]};
    margin: 6px 6px 0 0;
  `,
};
