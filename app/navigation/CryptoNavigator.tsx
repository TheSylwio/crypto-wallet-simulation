import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CryptoParamList } from '../../types';
import CryptoScreen from '../screens/CryptoScreen';
import ScreenOptions from '../constants/ScreenOptions';

const CryptoStack = createStackNavigator<CryptoParamList>();

const CryptoNavigator = () => {
  return (
    <CryptoStack.Navigator screenOptions={ScreenOptions}>
      <CryptoStack.Screen
        name="CryptoScreen"
        component={CryptoScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </CryptoStack.Navigator>
  );
};

export default CryptoNavigator;