import { createStackNavigator } from '@react-navigation/stack';
import { WalletParamList } from '../../types';
import WalletScreen from '../screens/WalletScreen';
import * as React from 'react';
import ScreenOptions from '../constants/ScreenOptions';

const WalletStack = createStackNavigator<WalletParamList>();

const WalletNavigator = () => {
  return (
    <WalletStack.Navigator screenOptions={ScreenOptions}>
      <WalletStack.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          headerTitle: 'Wallet',
        }}
      />
    </WalletStack.Navigator>
  );
}

export default WalletNavigator;