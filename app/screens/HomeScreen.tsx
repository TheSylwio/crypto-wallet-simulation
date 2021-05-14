import * as React from 'react';
import { Text } from '../components/Themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import CryptoTile from '../components/CryptoTile';
import { getCryptocurrencies } from '../redux/selectors';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const cryptocurrencies = useSelector(getCryptocurrencies);
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {cryptocurrencies.length > 0 && <Text>Your currencies</Text>}
      {cryptocurrencies.length > 0 && cryptocurrencies.map(({ name, difference, symbol, price }) => (
        <CryptoTile name={name} key={name} difference={difference} symbol={symbol} price={price}/>
      ))}
      <View style={styles.explore}>
        <Text>Explore</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  explore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
