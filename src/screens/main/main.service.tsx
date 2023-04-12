import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from '@services/store';

export const MainService: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
