import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { CryptoCurrency, CryptoScreenRouteProp, Transaction } from '../../types';
import { CryptoColors } from '../constants/Colors';
import { useSelector } from 'react-redux';
import { getCryptocurrencies, getFunds, getTransactions, getUserCryptocurrencies } from '../redux/selectors';
import getFormattedDifference from '../utils/getFormattedDifference';
import { Available } from '../layouts/CryptoOperations';

const CryptoScreen = () => {
  const [currentCryptoTransactions, setCurrentCryptoTransactions] = useState<Transaction[]>([]);
  const [currentCryptoAmount, setCurrentCryptoAmount] = useState(0);
  const [currentCryptoValue, setCurrentCryptoValue] = useState(0);
  const { name, difference, symbol } = useRoute<CryptoScreenRouteProp>().params;
  const funds = useSelector(getFunds);
  const transactions = useSelector(getTransactions);
  const userCryptocurrencies = useSelector(getUserCryptocurrencies);
  const cryptocurrencies = useSelector(getCryptocurrencies);
  const navigation = useNavigation();

  const buyCrypto = () => {
    navigation.navigate('Crypto', { screen: 'CryptoBuyScreen', params: { name, symbol } });
  };

  const sellCrypto = () => {
    navigation.navigate('Crypto', { screen: 'CryptoSellScreen', params: { name, symbol } });
  };


  useEffect(() => {
    const currentCryptoTransactions = transactions.filter(({ cryptocurrency }) => cryptocurrency === symbol);
    setCurrentCryptoTransactions(currentCryptoTransactions);
  }, [transactions]);

  useEffect(() => {
    const { price } = cryptocurrencies.find(crypto => crypto.symbol === symbol) as CryptoCurrency;
    const amount = userCryptocurrencies[symbol];

    setCurrentCryptoAmount(amount);
    setCurrentCryptoValue(amount * price);
  }, [userCryptocurrencies]);

  return (
    <Wrapper>
      <Heading>
        <Available>Available</Available>
        <Price>{currentCryptoAmount.toFixed(10)} {symbol}</Price>
        <DifferenceRow>
          <Text>${currentCryptoValue.toFixed(2)}</Text>
          <Difference difference={difference}>
            {getFormattedDifference(difference)}
          </Difference>
        </DifferenceRow>
      </Heading>
      <Content>
        <Header style={{ marginBottom: 4 }}>Last transactions</Header>
        <Transactions>
          {currentCryptoTransactions.length === 0 && <Text>👋 No transactions for {name}</Text>}
          {currentCryptoTransactions.map(({ date, amount, cryptocurrency, price }) => {
            const parsedDate = new window.Date(window.Date.parse(date));
            return (
              <TransactionRow key={parsedDate.getTime()}>
                <Date>{parsedDate.toLocaleDateString()}</Date>
                <Amount amount={amount}>{amount > 0 && '+'}{amount.toFixed(10)} {cryptocurrency} /
                  ${price.toFixed(2)}</Amount>
              </TransactionRow>
            );
          })}
        </Transactions>
        <ButtonRow>
          <FirstButton title="BUY" onPress={buyCrypto} color={CryptoColors[name]} disabled={funds === 0}/>
          <Button title="SELL" onPress={sellCrypto} color={CryptoColors[name]} disabled={currentCryptoAmount === 0}/>
        </ButtonRow>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  background: #F8FAFB;
`;

const Heading = styled.View`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const Price = styled.Text`
  font-weight: bold;
  font-size: 31px;
`;

const DifferenceRow = styled.View`
  display: flex;
  flex-direction: row;
`;

const Difference = styled.Text<{ difference: number }>`
  margin-left: 16px;
  color: ${({ difference }) => difference > 0 ? '#00BF71' : '#FF4F4F'};
`;

const Header = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Transactions = styled.ScrollView`
  background: #F8FAFB;
  padding: 16px;
  border-radius: 12px;
  flex-grow: 0.8;
`;

const TransactionRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Date = styled.Text`
  font-weight: bold;
`;

const Amount = styled.Text<{ amount: number }>`
  font-weight: bold;
  color: ${({ amount }) => amount > 0 ? '#3ED196' : '#FF4F4F'};
`;

const Content = styled.View`
  flex: 1;
  background: #FFFFFF;
  padding: 16px;
`;

const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  position: absolute;
  bottom: 16px;
  left: 16px;
`;

const FirstButton = styled(Button)`
  margin-right: 16px;
`;


export default CryptoScreen;
