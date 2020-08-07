import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Group>
        <GroupTitle>11 сентября</GroupTitle>
        <GroupItem>
          <Avatar
            source={{
              uri:
                'https://sun1-99.userapi.com/impf/c855428/v855428811/b6432/26zhQD7ZgQU.jpg?size=50x0&quality=90&crop=0,0,470,470&sign=ef563fb12ad767b22590767eddcb1e47&ava=1'
            }}
          />
        </GroupItem>
      </Group>
    </Container>
  );
}

const GroupItem = styled.View`
  padding: 20px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
`;


const GroupTitle = styled.Text`
  font-weight: 800;
  font-size: 22px;
  color: #000000;
`;

const Group = styled.View`

`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;