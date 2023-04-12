import { scale } from 'react-native-size-scaling';

export const FONTS = {
  size: {
    [7]: `${scale(7)}px`,
    [11]: `${scale(11)}px`,
    [12]: `${scale(12)}px`,
    [13]: `${scale(13)}px`,
    [14]: `${scale(14)}px`,
    [15]: `${scale(15)}px`,
    [16]: `${scale(16)}px`,
    [17]: `${scale(17)}px`,
    [18]: `${scale(18)}px`,
    [20]: `${scale(20)}px`,
    [22]: `${scale(22)}px`,
    [24]: `${scale(24)}px`,
    [28]: `${scale(28)}px`,
    [32]: `${scale(32)}px`,
    [40]: `${scale(40)}px`,
  },
  family: {
    menlo: 'Menlo',
  },
};

export type TFontSizes = keyof typeof FONTS.size;
export type TFontFamilies = keyof typeof FONTS.family;
