import { css } from 'styled-components';
import styled from 'styled-components/native';

import { Icon } from '@components/atoms/icon';
import { Text } from '@components/atoms/text';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const WeatherBox = {
  Wrapper: styled.View<{ isLast: boolean }>`
    align-items: flex-end;
    padding: 5px 16px 0;
    background-color: ${COLOR.secondary.antiquewhite};

    ${({ isLast }) =>
      isLast &&
      css`
        padding: 5px 16px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      `}
  `,
  Text: styled(Text)`
    position: absolute;
    left: 16px;
    top: 30px;
    line-height: 22px;
    font-size: ${FONTS.size[17]};
    color: ${COLOR.gray.primary};
  `,
  HoursBox: styled.ScrollView``,
  HourBox: styled.Pressable<{ isLast: boolean }>`
    align-items: center;
    padding: 0 30px 0 0;
    ${({ isLast }) => isLast && 'padding: 0'};
  `,
  Hour: styled(Text)``,
  Icon: styled(Icon)`
    height: 35px;
  `,
  Temp: styled(Text)`
    text-align: center;
  `,
  Line: styled.View`
    width: 99%;
    height: 1px;
    margin: 5px auto 0;
    background-color: ${COLOR.transparent.haki};
  `,
};
