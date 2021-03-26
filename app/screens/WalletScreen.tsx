import * as React from 'react';
import CreditCard from '../components/CreditCard';
import Button from '../components/Button';
import styled from 'styled-components/native';

const WalletScreen = () => {
  return (
    <Wrapper>
      <ButtonRow>
        <Button title="Buy" onPress={() => console.log('123')} color="#16ac6a"/>
        <Button title="Sell" onPress={() => console.log('123')} color="#ed1c66"/>
      </ButtonRow>
      <CreditCard
        value={39.584}
        difference={3.55}
      />
      <CreditCard
        value={11.211}
        difference={-21.13}
      />
    </Wrapper>
  );
};

export default WalletScreen;

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background: #f1f4f9;
`;

const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  padding: 8px;
`;