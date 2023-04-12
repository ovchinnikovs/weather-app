import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { ICustomStatusBar } from './status-bar.types';

import { useSizes } from '@services/hooks/size.hook';

import { COLOR } from '@theme/colors';

export const CustomStatusBar: FC<ICustomStatusBar> = ({
  background,
  ...props
}) => {
  const { isAndroid } = useSizes();

  const barStyle = props.barStyle || 'dark-content';

  const bg = background || COLOR.gray.lightGray;

  if (isAndroid) {
    return <StatusBar backgroundColor={bg} {...props} barStyle={barStyle} />;
  }

  return (
    <SafeAreaView>
      <StatusBar {...props} barStyle={barStyle} />
    </SafeAreaView>
  );
};
