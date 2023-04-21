import React from 'react';
import { NavigationContainer } from "@react-navigation/native"; //npm install @react-navigation/native
import { createStackNavigator } from "@react-navigation/stack"; //npm install @react-navigation/stack
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';

const Stack = createStackNavigator();

function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default app;