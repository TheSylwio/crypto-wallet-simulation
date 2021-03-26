import * as React from 'react';
import { Text } from './Themed';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface Props {
  value: number | string;
  difference: number;
}

const getFormattedDifference = (difference: number) => difference > 0 ? `+ ${difference}%` : `- ${-difference}%`;

const CreditCard: React.FC<Props> = ({ value, difference }) => {
  return (
    <StyledCreditCard>
      <Header>
        <Avatar>
          <Ionicons size={14} name="wallet" color="#ffffff" />
        </Avatar>
        <Text>Total Wallet Balance</Text>
      </Header>
      <WalletBalance>
        <Value>${value}</Value>
        <Difference difference={difference}>
          {getFormattedDifference(difference)}
        </Difference>
      </WalletBalance>
    </StyledCreditCard>
  );
};

// FIXME: Use styled(View) from 'Themed'?
const StyledCreditCard = styled.View`
  align-self: stretch;
  margin: 8px;
  padding: 12px;
  border-radius: 8px;
  background: #ffffff;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const Avatar = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  background: #46516f;
  border-radius: 20px;
`;

const WalletBalance = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Value = styled.Text`
  color: #455370;
  font-size: 32px;
  flex: 5;
`;

const Difference = styled.Text<{difference: number}>`
  color: #fffcff;
  flex-shrink: 1;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  background: ${({ difference }) => difference > 0 ? '#16ac6a' : '#ed1c66'};
`;

export default CreditCard;
