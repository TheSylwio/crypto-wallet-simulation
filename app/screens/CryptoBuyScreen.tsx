import * as React from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CryptoCurrency, CryptoScreenRouteProp } from '../../types';
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
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrencies, getFunds } from '../redux/selectors';
import { addTransaction, setFunds, setUserCryptocurrency } from '../redux/actions';

const CryptoBuyScreen = () => {
  const { symbol } = useRoute<CryptoScreenRouteProp>().params;
  const navigation = useNavigation();
  const [selectedPrice, setPrice] = useState(0);
  const funds = useSelector(getFunds);
  const cryptoCurrencies = useSelector(getCryptocurrencies);
  const dispatch = useDispatch();

  const buyCrypto = () => {
    const { price } = cryptoCurrencies.find(crypto => crypto.symbol === symbol) as CryptoCurrency;
    const amount = selectedPrice / price;
    if (selectedPrice > funds) return;

    const transaction = {
      cryptocurrency: symbol,
      date: new Date().toString(),
      amount,
      price: -1 * selectedPrice,
    };

    dispatch(addTransaction(transaction));
    dispatch(setFunds(funds - selectedPrice));
    dispatch(setUserCryptocurrency(symbol, amount));

    navigation.navigate('Home');
  };

  return (
    <Wrapper>
      <Heading>
        <Available>Available</Available>
        <Funds>${funds.toFixed(2)}</Funds>
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
        <Button title="Buy" onPress={buyCrypto} color="#111111"
                disabled={selectedPrice === 0 || selectedPrice > funds}/>
      </Content>
    </Wrapper>
  );
};

export default CryptoBuyScreen;
