import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IWeatherState } from './weather.types';

import { IWeatherDataResponse } from '@typings/types.common';

const initialState: IWeatherState = {
  loading: false,
  list: [],
  city: {
    id: 0,
    name: '',
    coord: { lat: 0, lon: 0 },
    country: '',
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
  },
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    todoRequestWeatherData: (state) => {
      state.loading = true;
    },
    todoSuccessRequestWeatherData: (
      state,
      action: PayloadAction<IWeatherDataResponse>
    ) => {
      state.loading = false;
      state.list = action.payload.list;
      state.city = action.payload.city;
    },
  },
});

export const { todoRequestWeatherData, todoSuccessRequestWeatherData } =
  weatherSlice.actions;

const { reducer } = weatherSlice;

export { reducer as weatherReducer };
