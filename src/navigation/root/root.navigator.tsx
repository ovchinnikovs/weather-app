import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Onboarding } from '@screens/onboarding';
import { WeatherListScreen } from '@screens/weather-list';

import { useRootState } from './root.state';

import { DISABLED_HEADER_SWIPE_NAVIGATION_SCREEN } from '@constants/navigation';
import { APP_ROUTES } from '@constants/routes';

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { isLoadedData } = useRootState();

  return (
    <RootStack.Navigator>
      {!isLoadedData && (
        <RootStack.Screen
          options={DISABLED_HEADER_SWIPE_NAVIGATION_SCREEN}
          name={APP_ROUTES.onboarding}
          component={Onboarding}
        />
      )}
      <RootStack.Screen
        name={APP_ROUTES.weather_list}
        component={WeatherListScreen}
        options={DISABLED_HEADER_SWIPE_NAVIGATION_SCREEN}
      />
    </RootStack.Navigator>
  );
};
