/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import { Main } from './src/screens/main';
import { name as appName } from './app.json';

LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => Main);
