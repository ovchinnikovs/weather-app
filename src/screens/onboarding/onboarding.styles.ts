import styled from 'styled-components/native';

import { Button } from '@components/atoms/button';
import { Image } from '@components/atoms/image';

import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from '@services/helpers/dimensions.helper';

export const OnBoardingStyled = {
  Wrapper: styled.View`
    flex: 1;
    align-items: center;
  `,
  Image: styled(Image)`
    margin-top: ${DEVICE_HEIGHT / 5}px;
  `,
  Button: styled(Button)`
    width: ${DEVICE_WIDTH / 2}px;
    align-self: center;
    margin: 150px 0 0;
  `,
};
