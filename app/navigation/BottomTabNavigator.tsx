import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeNavigator from './HomeNavigator';
import WalletNavigator from './WalletNavigator';
import { BottomTabParamList } from '../../types';
import TabBarIcon from '../components/TabBarIcon';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="wallet" color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;