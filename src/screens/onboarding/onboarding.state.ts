import { useDispatch, useSelector } from '@services/helpers/store.helper';
import { todoRequestWeatherData } from '@services/store/weather';

export const useOnBoardingState = () => {
  const isLoading = useSelector(({ weather }) => weather.loading);

  const dispatch = useDispatch();

  const onGoToStart = () => {
    dispatch(todoRequestWeatherData());
  };

  return { isLoading, onGoToStart };
};
