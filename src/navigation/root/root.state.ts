import { useSelector } from '@services/helpers/store.helper';

export const useRootState = () => {
  const isLoadedData = useSelector(({ weather }) => Boolean(weather.city.name));

  return { isLoadedData };
};
