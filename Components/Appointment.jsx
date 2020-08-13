import React from 'react';
import { View } from 'react-native';
import styled from "styled-components/native";

import GreyText from "./GreyText";
import Badge from "./Badge";


const Appointment = ({ item, navigation }) => {

  const { user, diagnosis, active, time } = item;

  return (
    <GroupItem
      onPress={() => navigation.navigate('Patient', {...item})}
    >
      <Avatar
        source={{
          uri: user.avatar
        }}
      />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <GreyText>{diagnosis}</GreyText>
      </View>
      <Badge active={active}>{time}</Badge>
    </GroupItem>
  )
};


Appointment.defaultProps = {
  title: "Untitle",
  items: [],
}

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  padding: 15px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export default Appointment;
