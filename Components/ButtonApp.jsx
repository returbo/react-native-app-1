import React from 'react';
import styled from 'styled-components/native';

const ButtonApp = ({ children, color }) => {
  return (
    <ButtonWrapper color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  )
}

ButtonApp.defaultProps = {
  color: "#2a86ff"
};

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: ${props => props.color || "#2a86ff"}; 
  text-align: center;
  height: 45px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export default ButtonApp;