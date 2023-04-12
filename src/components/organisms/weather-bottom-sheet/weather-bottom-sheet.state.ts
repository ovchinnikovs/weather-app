import { useEffect, useMemo, useState } from 'react';

import { groupWeatherByDayOfWeek } from '@screens/weather-list';
import { IWeatherBottomSheet } from './weather-bottom-sheet.types';

import { useSelector } from '@services/helpers/store.helper';

export const useWeatherBottomSheetState = ({
  initialIndex,
  bottomSheetModalRef,
  setInitialIndex,
}: IWeatherBottomSheet) => {
  const list = useSelector(({ weather }) => weather.list);

  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  const weatherDays = useMemo(
    () => groupWeatherByDayOfWeek(list).reverse(),
    [list]
  );

  useEffect(() => {
    setCurrentIndex(initialIndex || 0);
  }, [initialIndex]);

  const onCancel = () => {
    setInitialIndex(null);
    bottomSheetModalRef.current?.dismiss();
  };

  const onDismissBottomSheet = () => {
    setInitialIndex(null);
  };

  return {
    weatherDays,
    currentIndex,
    bottomSheetModalRef,
    onCancel,
    setCurrentIndex,
    onDismissBottomSheet,
  };
};
