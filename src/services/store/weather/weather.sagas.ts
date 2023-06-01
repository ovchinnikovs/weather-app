import { call, put, takeLatest } from 'typed-redux-saga';

import { fetchData } from '@services/api.service';
import {
  todoRequestWeatherData,
  todoSuccessRequestWeatherData,
} from './weather.reducer';
import { APP_CONFIG } from '@constants/config';

const fetchTodoSaga = async () =>
  await fetchData({
    requestUrl: 'getWeather',
    payload: {
      lat: '49.5557716',
      lon: '25.591886',
      lang: 'en',
      appid: APP_CONFIG.WEATHER_APP_ID,
      units: 'metric',
    },
  });

function* todoRequestSaga() {
  const data = yield* call(fetchTodoSaga);

  yield put(todoSuccessRequestWeatherData(data));
}

export function* weatherSaga() {
  yield takeLatest(todoRequestWeatherData, todoRequestSaga);
}
