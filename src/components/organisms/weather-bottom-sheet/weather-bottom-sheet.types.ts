import React, { Dispatch, SetStateAction } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export interface IWeatherBottomSheet {
  initialIndex: number | null;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  setInitialIndex: Dispatch<SetStateAction<number | null>>;
}
