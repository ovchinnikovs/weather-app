import axios from 'axios';

import { TFetchRequest } from '@typings/types.api';

import { GET_ENDPOINTS } from '@constants/endpoints';

const API_SERVICE = 'https://api.openweathermap.org';

const getInstance = () => {
  const instance = axios.create({
    baseURL: API_SERVICE,
    timeout: 15000,
  });

  return instance;
};

export const fetchData: TFetchRequest = async ({
  requestUrl,
  urlParams,
  payload,
}) => {
  const urlRequest = GET_ENDPOINTS[requestUrl];
  const url =
    typeof urlRequest === 'string'
      ? urlRequest
      : (urlRequest as Function)(...(urlParams as Array<typeof urlParams>));
  const { data } = await getInstance().get(`${API_SERVICE}${url}`, {
    params: payload,
  });
  return data;
};
