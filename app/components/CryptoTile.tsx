import * as React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { CryptoCurrency } from '../../types';
import getCryptoIcon from '../utils/getCryptoIcon';
import getFormattedDifference from '../utils/getFormattedDifference';

const CryptoTile: React.FC<CryptoCurrency> = ({ name, difference, symbol, price }) => {
  const navigation = useNavigation();


  const onPress = () => {
    navigation.navigate('Crypto', {
      screen: 'CryptoScreen',
      params: { name, price, difference, symbol },
    });
  };

  return (
    <Wrapper onPress={onPress}>
      <Icon style={{ resizeMode: 'contain' }} source={getCryptoIcon(symbol)}/>
      <Main>
        <Name>{name}</Name>
        <FadedText>{symbol}</FadedText>
        <FadedText>$ {price.toFixed(5)}</FadedText>
      </Main>
      <Difference difference={difference}>
        {getFormattedDifference(difference)}
      </Difference>
    </Wrapper>
  );
};

const Wrapper = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #F8FAFB;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 16px;
  border-width: 2px;
  border-color: #EFEFEF;
  border-top-width: 0;
`;

const Icon = styled.Image`
  flex: 1;
  margin-right: 8px;
  height: 100%;
`;

const Main = styled.View`
  display: flex;
  flex: 2;
  justify-content: center;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const FadedText = styled.Text`
  color: rgba(0, 0, 0, 0.73);
  font-size: 12px;
`;

const Difference = styled.Text<{ difference: number }>`
  flex: 1;
  border-radius: 8px;
  font-weight: 700;
  font-size: 11px;
  text-align: center;
  background: ${({ difference }) => difference > 0 ? '#C3F9E4' : '#FFEDED'};
  color: ${({ difference }) => difference > 0 ? '#00BF71' : '#FF4F4F'};
  padding: 8px 0;
`;

export default CryptoTile;
