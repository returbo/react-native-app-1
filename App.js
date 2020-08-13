import React from 'react';
import { HomeScreen, PatientScreen } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            elevation: 1,
            shadowOpacity: 1,
          },
          headerTintColor: '#2a86ff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Должники" }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{ title: "Обзор должника" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;