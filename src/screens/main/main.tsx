import React from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from '@navigation/root';

import { store } from '@services/store/store';

import { MainService } from './main.service';

export const Main = () => {
  return (
    <Provider store={store}>
      <MainService>
        <RootNavigator />
      </MainService>
    </Provider>
  );
};
