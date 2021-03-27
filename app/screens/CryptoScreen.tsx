import * as React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CryptoScreen = () => {
  const { name } = useRoute().params;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default CryptoScreen;
