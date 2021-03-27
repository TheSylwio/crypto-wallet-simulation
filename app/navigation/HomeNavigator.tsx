import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeParamList } from '../../types';
import HomeScreen from '../screens/HomeScreen';
import ScreenOptions from '../constants/ScreenOptions';

const HomeStack = createStackNavigator<HomeParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={ScreenOptions}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'HomeScreen' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;