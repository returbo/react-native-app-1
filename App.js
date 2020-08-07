import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle></GroupTitle>
      </Group>
    </Container>
  );
}


const GroupTitle = styled.View`

`;

const Group = styled.View`

`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;