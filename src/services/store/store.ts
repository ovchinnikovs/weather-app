import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-sagas';

import { rootReducer, TRootReducer } from '@services/store/root';

const persistConfig = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['main', 'weather'],
  stateReconciler: autoMergeLevel2,
};

const reducer = persistReducer<TRootReducer>(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
