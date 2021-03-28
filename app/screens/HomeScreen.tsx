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
    name: 'Etherium',
    code: 'ETH',
    price: 1032.01,
    difference: 9.18,
  },
]

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {currencies.length > 0 && <Text>Your currencies</Text>}
      {currencies.length > 0 && currencies.map(({ name, difference, code, price }) => (
        <CryptoTile name={name} key={name} difference={difference} code={code} price={price}/>
      ))}
      <View style={styles.explore}>
        <Text>Explore</Text>
        <Text style={styles.link}>View all</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF'
  },
  explore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#016998',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
