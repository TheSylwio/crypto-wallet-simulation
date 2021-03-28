import * as React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const WalletScreen = () => {
  return (
    <Wrapper>
      <Text>Kod QR</Text>
    </Wrapper>
  );
};

export default WalletScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
`;
