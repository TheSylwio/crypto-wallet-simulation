import * as React from 'react';
import { Text } from './Themed';
import styled from 'styled-components/native';

interface Props {
  title: string;
  onPress: () => any;
  color: string;
  style?: object;
}

const Button: React.FC<Props> = ({ title, onPress, color, style }) => {
  return (
    <StyledButton style={style} onPress={onPress} color={color} activeOpacity={0.7}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity<{color: string}>`
  background: ${({ color }) => color};
  elevation: 1;
  padding: 16px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const ButtonText = styled(Text)`
  color: #ffffff;
`;

export default Button;
