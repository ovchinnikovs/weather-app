import styled from 'styled-components/native';
import { space, SpaceProps } from 'styled-system';

import { COLOR } from '@theme/colors';
import { FONTS, TFontFamilies, TFontSizes, TFontWeights } from '@theme/fonts';

interface ITextStyles extends SpaceProps {
  color?: string;
  family?: TFontFamilies;
  weight?: TFontWeights;
  size?: TFontSizes;
}

export const TextStyles = {
  Text: styled.Text<ITextStyles>`
    ${space};
    font-size: ${({ size }) => (size ? FONTS.size[size] : FONTS.size[16])};
    color: ${({ color }) => (color ? color : COLOR.gray.abbey)};

    font-family: ${({ family }) =>
      family ? FONTS.family[family] : FONTS.family.menlo};

    font-weight: ${({ weight }) =>
      weight ? FONTS.weight[weight] : FONTS.weight[500]};
  `,
};
