import styled from 'styled-components/native';

import { Text } from '@components/atoms/text';
import { Title } from '@components/atoms/title';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const iconStyle = { marginRight: 8 };

export const CustomHeaderStyles = {
  CustomHeader: styled.View<{
    isSmallScreen: boolean;
  }>`
    padding: 30px 16px 10px;
  `,
  Wrapper: styled.View``,
  Main: styled.View`
    flex-direction: row;
  `,
  Description: styled(Text)`
    margin: 15px 3px 0;
  `,
  Title: styled(Title)<{ isBackArrowWithSpace?: boolean }>`
    font-weight: ${FONTS.weight[600]};
    font-size: ${FONTS.size[24]};
    color: ${COLOR.primary.main};
  `,
};
