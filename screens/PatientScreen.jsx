import React from 'react';
import styled from 'styled-components/native';
import { GreyText, ButtonApp, Badge } from "../components";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const PatientScreen = ({ route }) => {

  const { user, diagnosis, active, time } = route.params;

  return (

    <View style={{ flex: 1 }}>

      <PatientDetails>
        <PatientFullname>{user.fullname}</PatientFullname>
        <GreyText>{user.phone}</GreyText>
        <PatientButtons>
          <FormulaButtonView>
            <ButtonApp>Имеющиеся активы</ButtonApp>
          </FormulaButtonView>
          <PhoneButtonView>
            <ButtonApp color="#84D269">
              <MaterialIcons name="local-phone" size={20} color="white" />
            </ButtonApp>
          </PhoneButtonView>
        </PatientButtons>
      </PatientDetails>

      <PatientAppointments>
        <Container>
          <AppointmentCard>

            <DebtGroup>
              <FontAwesome name="money" size={24} color="black" />
              <AppointmentCardLabel>
                Долг: <Text style={{ fontWeight: 'bold' }}>1900р</Text>
              </AppointmentCardLabel>
            </DebtGroup>

            <DebtGroup>
              <MaterialIcons name="people" size={24} color="black" />
              <AppointmentCardLabel>
                Поручители: <Text style={{ fontWeight: 'bold' }}>есть</Text>
              </AppointmentCardLabel>
            </DebtGroup>
            <DebtGroup style={{ justifyContent: 'space-between'}}>
            <Badge style={{ width: 150 }} active>11.10.2019 - 15.40</Badge>
            <Badge style={{ color: "green"}}>800р</Badge>
            </DebtGroup>
          </AppointmentCard>
        </Container>
      </PatientAppointments>
    </View>


  )
};

const DebtGroup = styled.View`
  flex-direction: row;
  margin: 6.5px 0;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCard = styled.View`
  elevation: 3;
  padding: 20px 25px;
  border-radius: 10px;
  background-color: white;
`;

const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

const PatientDetails = styled(Container)`
  flex: 0.2;
`;

const PatientAppointments = styled.View`
  flex: 1; 
`;

const FormulaButtonView = styled.View`
  flex: 1;
`;

const PhoneButtonView = styled.View`
  margin-left: 10px;
  width: 45px;
`;

const PatientButtons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;


const PatientFullname = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 3px;
`;



export default PatientScreen;
