import { createSlice } from '@reduxjs/toolkit';

import { IMainState } from './main.types';

const initialState: IMainState = {
  isOnboardingDone: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setOnboardingDone: (state) => {
      state.isOnboardingDone = true;
    },
  },
});

export const { setOnboardingDone } = mainSlice.actions;

const { reducer } = mainSlice;

export { reducer as mainReducer };
