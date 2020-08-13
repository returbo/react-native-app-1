import styled from "styled-components/native";

export default styled.Text`
  background-color: ${props => props.active ? "#2a86ff" : "#E9F5FF"};
  color: ${props => props.active ? "#fff" : "#4294ff"};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;