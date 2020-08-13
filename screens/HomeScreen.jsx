import React from 'react';
import { Button, SectionList } from 'react-native';
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Appointment, SectionTitle } from "../components";
import { DATA } from "../constants";


const HomeScreen = ({ navigation }) => {


  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) =>
          <Appointment
            item={item}
            navigation={navigation}
          />
        }
        renderSectionHeader={({ section: { title } }) =>
          <SectionTitle>{title}</SectionTitle>
        }
      />
      <PlusButton>
        <Ionicons
          name="ios-add"
          size={36}
          color="white"
        />
      </PlusButton>
    </Container >
  )
}

export default HomeScreen;

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  elevation: 5;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;