import { Animated } from 'react-native';
import { scale } from 'react-native-size-scaling';
import styled, { css } from 'styled-components/native';

import { Button } from '@components/atoms/button';
import { Text } from '@components/atoms/text';

import { COLOR } from '@theme/colors';

export const AnimatedCarouselStyles = {
  Wrapper: styled.SafeAreaView`
    align-items: center;
    justify-content: center;
  `,
  DaysWrapper: styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    margin: 0 0 15px;
  `,
  Day: styled.Pressable`
    flex-direction: column;
  `,
  CircleDay: styled(Animated.View)`
    height: 30px;
    width: 30px;
    border-radius: 50px;
    margin: 0 10px;
    justify-content: center;
    align-items: center;
  `,
  DayText: styled(Text)<{ activeDay: boolean }>`
    text-align: center;
    margin: 0 0 10px;
    ${({ activeDay }) =>
      activeDay &&
      css`
        color: ${COLOR.mono.white};
      `}
  `,
  DayNum: styled(Text)<{ activeDay: boolean }>`
    color: ${COLOR.gray.lightSecondary};
    ${({ activeDay }) =>
      activeDay &&
      css`
        color: ${COLOR.mono.black};
      `}
  `,
  Date: styled(Text)``,
  Button: styled(Button)`
    margin: 0 28px ${scale(30)}px;
  `,
};
