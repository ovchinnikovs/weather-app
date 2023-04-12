import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { Dispatch, SetStateAction } from 'react';

export interface IWeatherBottomSheet {
  initialIndex: number | null;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  setInitialIndex: Dispatch<SetStateAction<number | null>>;
}
