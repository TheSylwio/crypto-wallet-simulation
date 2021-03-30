import * as React from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CryptoScreenRouteProp } from '../../types';
import { Available, Content, Funds, Heading, InputRow, StyledInput, Wrapper } from '../layouts/CryptoOperations';

// FIXME: Temporary usage
const available = 1.123456789;

const CryptoSellScreen = () => {
  const { name, code } = useRoute<CryptoScreenRouteProp>().params;
  const navigation = useNavigation();
  const [cryptoAmount, setCryptoAmount] = useState(0);

  const sellCrypto = () => {
    console.log(`You sold ${cryptoAmount} of ${name}.`);
    navigation.navigate('Home');
  };

  return (
    <Wrapper>
      <Heading>
        <Available>Available</Available>
        <Funds>{available} {code}</Funds>
      </Heading>
      <Content keyboardShouldPersistTaps="always">
        <InputRow>
          <StyledInput
            placeholder="0"
            keyboardType="numeric"
            onChangeText={text => setCryptoAmount(Number(text.replace(/\s/g, '')))}
            maxLength={9}
            autoFocus
          />
        </InputRow>
        <Button title="Sell" onPress={sellCrypto} color="#111111"/>
      </Content>
    </Wrapper>
  );
};

export default CryptoSellScreen;
