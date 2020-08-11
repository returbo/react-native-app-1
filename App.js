import React from 'react';
import { StyleSheet, Text, View, Image, SectionList } from 'react-native';
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import { Appointment, SectionTitle } from "./Components";

const DATA = [
  {
    title: "11 августа",
    data: [
      {
        time: '15.30',
        diagnosis: 'я собственной персоны',
        user: {
          fullname: "Эрик Гукалов",
          avatar: "https://sun9-30.userapi.com/impf/c855120/v855120608/b644b/eqW7OdZ0ArU.jpg?size=50x0&quality=90&crop=251,310,1064,1064&sign=f9061a3b13a3beee5518841ef2dae81b&ava=1"
        },
        active: true,
      },
      {
        time: '15.30',
        diagnosis: 'братан и дружбан',
        user: {
          fullname: "Эрик Гукалов",
          avatar: "https://sun9-58.userapi.com/impf/c636827/v636827077/4e0bb/IHdIp6Hxcws.jpg?size=100x0&quality=90&crop=324,240,786,786&sign=03b064811652032c68b5f72de88989df&ava=1"
        },
      }
    ]
  },
  {
    title: "13 августа",
    data: [
      {
        time: '15.30',
        diagnosis: 'я собственной персоны',
        user: {
          fullname: "Эрик Гукалов",
          avatar: "https://sun9-30.userapi.com/impf/c855120/v855120608/b644b/eqW7OdZ0ArU.jpg?size=50x0&quality=90&crop=251,310,1064,1064&sign=f9061a3b13a3beee5518841ef2dae81b&ava=1"
        },
      },
      {
        time: '15.30',
        diagnosis: 'братан и дружбан',
        user: {
          fullname: "Эрик Гукалов",
          avatar: "https://sun9-58.userapi.com/impf/c636827/v636827077/4e0bb/IHdIp6Hxcws.jpg?size=100x0&quality=90&crop=324,240,786,786&sign=03b064811652032c68b5f72de88989df&ava=1"
        }
      }
    ],
  },
  {
    title: "13 августа",
    data: [
      {
        time: '15.30',
        diagnosis: 'я собственной персоны',
        user: {
          fullname: "Эрик Гукалов",
          avatar: "https://sun9-30.userapi.com/impf/c855120/v855120608/b644b/eqW7OdZ0ArU.jpg?size=50x0&quality=90&crop=251,310,1064,1064&sign=f9061a3b13a3beee5518841ef2dae81b&ava=1"
        },
      },
      {
        time: '15.30',
        diagnosis: 'братан и дружбан',
        user: {
          fullname: "Эрик Гукалов",
          avatar: "https://sun9-58.userapi.com/impf/c636827/v636827077/4e0bb/IHdIp6Hxcws.jpg?size=100x0&quality=90&crop=324,240,786,786&sign=03b064811652032c68b5f72de88989df&ava=1"
        }
      }
    ],
  },
  {
    title: "13 августа",
    data: [
      {
        time: '15.30',
        diagnosis: 'я собственной персоны',
        user: {
          fullname: "Эрик Гукалов",
          avatar: "https://sun9-30.userapi.com/impf/c855120/v855120608/b644b/eqW7OdZ0ArU.jpg?size=50x0&quality=90&crop=251,310,1064,1064&sign=f9061a3b13a3beee5518841ef2dae81b&ava=1"
        },
      },
      {
        time: '15.30',
        diagnosis: 'братан и дружбан',
        user: {
          fullname: "Эрик Гукалов",
          avatar: "https://sun9-58.userapi.com/impf/c636827/v636827077/4e0bb/IHdIp6Hxcws.jpg?size=100x0&quality=90&crop=324,240,786,786&sign=03b064811652032c68b5f72de88989df&ava=1"
        }
      }
    ],
  },
];


export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => <Appointment{...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
      <PlusButton>
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  );
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: black;
  shadow-opacity: 0.7;
  shadow-radius: 2.5;
  elevation: 5;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;