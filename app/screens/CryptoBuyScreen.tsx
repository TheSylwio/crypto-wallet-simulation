import * as React from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CryptoScreenRouteProp } from '../../types';
import {
  Available,
  Content,
  Funds,
  Heading,
  InputRow,
  Prefix,
  StyledInput,
  Wrapper,
} from '../layouts/CryptoOperations';

// FIXME: Temporary usage
const available = 500;

const CryptoBuyScreen = () => {
  const { name } = useRoute<CryptoScreenRouteProp>().params;
  const navigation = useNavigation();
  const [price, setPrice] = useState(0);

  const buyCrypto = () => {
    console.log(`You bought ${name} for $${price}`);
    navigation.navigate('Home');
  };

  return (
    <Wrapper>
      <Heading>
        <Available>Available</Available>
        <Funds>${available}</Funds>
      </Heading>
      <Content keyboardShouldPersistTaps="always">
        <InputRow>
          <Prefix>$</Prefix>
          <StyledInput
            placeholder="0"
            keyboardType="numeric"
            onChangeText={text => setPrice(Number(text.replace(/\s/g, '')))}
            maxLength={9}
            autoFocus
          />
        </InputRow>
        <Button title="Buy" onPress={buyCrypto} color="#111111"/>
      </Content>
    </Wrapper>
  );
};

export default CryptoBuyScreen;
