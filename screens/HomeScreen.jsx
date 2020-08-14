import React from 'react';
import { Button, SectionList } from 'react-native';
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

import { Appointment, SectionTitle } from "../components";
import { DATA } from "../constants";


const HomeScreen = ({ navigation }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://5f35e6825b91f60016ca5184.mockapi.io/hairdresser').then(({ data }) => {

      const handleData = data[1].appointments.map(item => {
        const key = new Date(item.date).getDate();
        const result = {
          title: `${key} августа`,
          data: data[1].appointments.map(item => ({
            ...item,
            user: data[0].users.filter(user => user._id === item.user_id)[0],
          }))
        }
        return result;
      })

      console.log(handleData);
      setData(handleData);
    });
  }, [])


  return (
    <Container>
      {data && (
        <SectionList
          sections={data}
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
      )}
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