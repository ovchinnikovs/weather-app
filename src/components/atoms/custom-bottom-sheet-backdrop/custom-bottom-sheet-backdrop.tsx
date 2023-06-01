import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import React from 'react';

export const CustomBottomSheetBackdrop: React.FC<BottomSheetBackdropProps> = (
  props
) => {
  return (
    <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
  );
};
