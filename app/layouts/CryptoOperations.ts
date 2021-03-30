import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background: #F8FAFB;
`;

export const Heading = styled.View`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
`;

export const Available = styled.Text`
  font-size: 16px;
  margin-bottom: -4px;
`;

export const Funds = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const Content = styled.ScrollView`
  flex: 1;
  background: #FFFFFF;
  padding: 16px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const Prefix = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export const StyledInput = styled.TextInput`
  font-size: 40px;
`;