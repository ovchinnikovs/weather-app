import styled from 'styled-components/native';

import { Button } from '@components/atoms/button';
import { Text } from '@components/atoms/text';
import { Title } from '@components/atoms/title';

import { DEVICE_HEIGHT } from '@services/helpers/dimensions.helper';

import { COLOR } from '@theme/colors';

export const WeatherBottomSheetStyles = {
  BottomSheetInner: styled.View`
    height: ${DEVICE_HEIGHT - 50}px;
    border-top-right-radius: 14px;
    border-top-left-radius: 14px;
    background-color: ${COLOR.primary.main};
  `,
  HandleWrapper: styled.View`
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  `,
  CloseLine: styled.View`
    align-self: center;
    height: 4px;
    width: 32px;
    background-color: ${COLOR.gray.bombay};
    border-radius: 8px;
  `,
  Button: styled(Button)`
    position: absolute;
    right: 10px;
    top: 10px;
  `,
  WeatherDescription: styled.View`
    margin: 15px 16px;
  `,
  Title: styled(Title)`
    color: ${COLOR.gray.bombay};
  `,
  Text: styled(Text)`
    margin: 7px 0 0 0;
    color: ${COLOR.gray.jumbo};
  `,
  // WeatherDescription: styled.View``,
  // WeatherDescription: styled.View``,
  // WeatherDescription: styled.View``,
  // WeatherDescription: styled.View``,
  // WeatherDescription: styled.View``,
};
