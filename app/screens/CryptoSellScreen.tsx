import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CryptoScreenRouteProp } from '../../types';
import { Available, Content, Funds, Heading, InputRow, StyledInput, Wrapper } from '../layouts/CryptoOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrencies, getFunds, getUserCryptocurrencies } from '../redux/selectors';
import { addTransaction, setFunds, setUserCryptocurrency } from '../redux/actions';

const CryptoSellScreen = () => {
  const { symbol } = useRoute<CryptoScreenRouteProp>().params;
  const navigation = useNavigation();
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [available, setAvailable] = useState(0);
  const cryptoCurrencies = useSelector(getCryptocurrencies);
  const userCryptoCurrencies = useSelector(getUserCryptocurrencies);
  const funds = useSelector(getFunds);
  const dispatch = useDispatch();

  const sellCrypto = () => {
    const { price } = cryptoCurrencies.find(crypto => crypto.symbol === symbol);
    const priceToAdd = selectedAmount * price;
    const transaction = {
      cryptocurrency: symbol,
      date: new Date(),
      amount: -1 * selectedAmount,
      price: priceToAdd,
    };

    dispatch(addTransaction(transaction));
    dispatch(setFunds(funds + priceToAdd));
    dispatch(setUserCryptocurrency(symbol, -1 * selectedAmount));

    navigation.navigate('Home');
  };

  useEffect(() => {
    setAvailable(userCryptoCurrencies[symbol]);
  }, [userCryptoCurrencies]);

  return (
    <Wrapper>
      <Heading>
        <Available>Available</Available>
        <Funds>{available.toFixed(10)} {symbol}</Funds>
      </Heading>
      <Content keyboardShouldPersistTaps="always">
        <InputRow>
          <StyledInput
            placeholder="0"
            keyboardType="numeric"
            onChangeText={text => setSelectedAmount(Number(text.replace(/\s/g, '')))}
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
