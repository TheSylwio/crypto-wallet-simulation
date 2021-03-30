import * as React from 'react';
import { Text } from '../components/Themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import CryptoTile from '../components/CryptoTile';

const currencies = [
  {
    name: 'Bitcoin',
    code: 'BTC',
    price: 55455.45,
    difference: -1.23,
  },
  {
    name: 'Ethereum',
    code: 'ETH',
    price: 1032.01,
    difference: 9.18,
  },
  {
    name: 'Dogecoin',
    code: 'DOGE',
    price: 56.15,
    difference: 0.03,
  },
  {
    name: 'Litecoin',
    code: 'LTC',
    price: 1.89,
    difference: -1.12,
  },
  {
    name: 'Cardano',
    code: 'ADA',
    price: 10.32,
    difference: -3.27,
  },
  {
    name: 'EOS',
    code: 'EOS',
    price: 2.01,
    difference: 0.07,
  },
  {
    name: 'Stellar',
    code: 'XLM',
    price: 6.23,
    difference: -0.12,
  },
  {
    name: 'Monero',
    code: 'XMR',
    price: 9.18,
    difference: 0.32,
  },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {currencies.length > 0 && <Text>Your currencies</Text>}
      {currencies.length > 0 && currencies.map(({ name, difference, code, price }) => (
        <CryptoTile name={name} key={name} difference={difference} code={code} price={price}/>
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
