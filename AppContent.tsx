import * as React from 'react';
import { useEffect } from 'react';
import Navigation from './app/navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useColorScheme from './app/hooks/useColorScheme';
import { useDispatch } from 'react-redux';
import { fetchCryptocurrencies } from './app/redux/actions';

const AppContent = () => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptocurrencies());
  }, []);

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme}/>
      <StatusBar/>
    </SafeAreaProvider>
  );
};

export default AppContent;