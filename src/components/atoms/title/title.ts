import styled from 'styled-components/native';
import { space } from 'styled-system';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

import { ITitleProps } from './title.types';

export const Title = styled.Text<ITitleProps>`
  font-weight: ${FONTS.weight[700]};
  font-size: ${FONTS.size[20]};
  font-family: ${FONTS.family.menlo};
  line-height: 28px;
  color: ${({ color }) => color || COLOR.gray.primary};
  ${space}
`;
