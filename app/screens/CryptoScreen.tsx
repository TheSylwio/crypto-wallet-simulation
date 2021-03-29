import * as React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { CryptoParamList } from '../../types';
import { CryptoColors } from '../constants/Colors';

type CryptoScreenRouteProp = RouteProp<CryptoParamList, 'CryptoScreen'>;

const getFormattedDifference = (difference: number) => difference > 0 ? `+ ${difference}%` : `- ${-difference}%`;

const CryptoScreen = () => {
  const { name, price, difference, code } = useRoute<CryptoScreenRouteProp>().params;
  const navigation = useNavigation();

  const buyCrypto = () => {
    navigation.navigate('Crypto', { screen: 'CryptoBuyScreen', params: { name } });
  };

  const sellCrypto = () => {
    navigation.navigate('Crypto', { screen: 'CryptoSellScreen' });
  };

  const transactions = [
    {
      key: 1,
      date: '09/11/21',
      amount: -0.1234,
    },
    {
      key: 2,
      date: '06/11/21',
      amount: 0.0000713,
    },

  ];

  return (
    <Wrapper>
      <Heading>
        <Price>${price}</Price>
        <DifferenceRow>
          <Text>$1002,45</Text>
          <Difference difference={difference}>
            {getFormattedDifference(difference)}
          </Difference>
        </DifferenceRow>
      </Heading>
      <Content>
        <Header>Balance</Header>
        <Text style={{ marginBottom: 16 }}>1.123456789 BTC</Text>
        <Header style={{ marginBottom: 4 }}>Last transactions</Header>
        <Transactions>
          {transactions.map(({ key, date, amount }) => (
            <TransactionRow key={key}>
              <Date>{date}</Date>
              <Amount amount={amount}>{amount} {code}</Amount>
            </TransactionRow>
          ))}
        </Transactions>
        <ButtonRow>
          <FirstButton title="BUY" onPress={buyCrypto} color={CryptoColors[name]}/>
          <Button title="SELL" onPress={sellCrypto} color={CryptoColors[name]}/>
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
