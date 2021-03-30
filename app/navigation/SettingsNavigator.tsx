import { createStackNavigator } from '@react-navigation/stack';
import { SettingsParamList } from '../../types';
import SettingsScreen from '../screens/SettingsScreen';
import * as React from 'react';

const SettingsStack = createStackNavigator<SettingsParamList>();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigator;