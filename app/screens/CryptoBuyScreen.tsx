import * as React from 'react';
import styled from 'styled-components/native';

const CryptoBuyScreen = () => {
  return (
    <Wrapper>
      <Heading>
        <Available>Available</Available>
        <Funds>$500</Funds>
      </Heading>
      <Content>

      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  background: #F8FAFB;
`;

const Heading = styled.View`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
`;

const Available = styled.Text`
  font-size: 16px;
  margin-bottom: -4px;
`;

const Funds = styled.Text`
  font-size: 38px;
  font-weight: bold;
`;

const Content = styled.View`
  flex: 1;
  background: #FFFFFF;
`;


export default CryptoBuyScreen;
