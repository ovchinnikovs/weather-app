import styled from 'styled-components/native';

import { Text } from '@components/atoms/text';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const TitleStyles = {
  Wrapper: styled.View`
    padding: 4px 0;
    margin-top: 15px;
    background-color: ${COLOR.secondary.antiquewhite};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  `,
  Title: styled(Text)`
    font-size: ${FONTS.size[11]};
    padding: 0 16px;
  `,
};
