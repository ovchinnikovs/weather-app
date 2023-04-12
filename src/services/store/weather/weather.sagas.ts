import { call, put, takeLatest } from 'typed-redux-saga';

import { fetchData } from '@services/api.service';
import {
  todoRequestWeatherData,
  todoSuccessRequestWeatherData,
} from './weather.reducer';

const fetchTodoSaga = async () =>
  await fetchData({
    requestUrl: 'getWeather',
    payload: {
      lat: '49.5557716',
      lon: '25.591886',
      lang: 'en',
      appid: '6ede5ee488bfcc22d12d5a4b62b4cd68',
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
