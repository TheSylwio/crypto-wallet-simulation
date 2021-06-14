import * as React from 'react';
import { Text } from '../components/Themed';
import { ScrollView, StyleSheet }from 'react-native';
import CryptoTile from '../components/CryptoTile';
import { getCryptocurrencies, getUserCryptocurrencies } from '../redux/selectors';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const cryptocurrencies = useSelector(getCryptocurrencies);
  const userCryptocurrencies = useSelector(getUserCryptocurrencies);
  const names = Object.entries(userCryptocurrencies).filter(([_, amount]) => amount > 0).map(([symbol]) => symbol);
  const filteredUserCryptocurrencies = cryptocurrencies.filter(({ symbol }) => names.includes(symbol));
  const filteredExploreCryptocurrencies = cryptocurrencies.filter(({ symbol }) => !names.includes(symbol));

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {filteredUserCryptocurrencies.length > 0 && <Text style={styles.heading}>Your currencies</Text>}
      {filteredUserCryptocurrencies.length > 0 && filteredUserCryptocurrencies.map(({ name, difference, symbol, price }) => (
        <CryptoTile name={name} key={name} difference={difference} symbol={symbol} price={price}/>
      ))}
      <Text style={styles.heading}>Explore</Text>
      {filteredExploreCryptocurrencies.map(({ name, difference, symbol, price }) => (
        <CryptoTile name={name} key={name} difference={difference} symbol={symbol} price={price}/>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  heading: {
    marginBottom: 12,
    fontSize: 16,
  }
});

export default HomeScreen;
