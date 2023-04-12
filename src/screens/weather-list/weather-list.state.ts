import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useEffect, useMemo, useRef, useState } from 'react';

import { useDispatch, useSelector } from '@services/helpers/store.helper';
import { setOnboardingDone } from '@services/store/main';
import { todoRequestWeatherData } from '@services/store/weather';
import { groupWeatherByWeek } from './weather-list.utils';

export const useWeatherListState = () => {
  const dispatch = useDispatch();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const isOnboardingDone = useSelector(({ main }) => main.isOnboardingDone);
  const city = useSelector(({ weather }) => weather.city);
  const list = useSelector(({ weather }) => weather.list);

  const weekSections = useMemo(() => groupWeatherByWeek(list), [list]);

  const [initialIndex, setInitialIndex] = useState<number | null>(0);

  useEffect(() => {
    if (isOnboardingDone) {
      dispatch(todoRequestWeatherData());
    } else {
      dispatch(setOnboardingDone());
    }
  }, []);

  const openWeatherModal = (initialIndex: number) => () => {
    setInitialIndex(initialIndex);
    bottomSheetModalRef.current?.present();
  };

  return {
    city,
    weekSections,
    initialIndex,
    bottomSheetModalRef,
    setInitialIndex,
    openWeatherModal,
  };
};
