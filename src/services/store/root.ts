import { combineReducers } from '@reduxjs/toolkit';

import { mainReducer } from './main';
import { weatherReducer } from './weather';

export type TRootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  main: mainReducer,
  weather: weatherReducer,
});
