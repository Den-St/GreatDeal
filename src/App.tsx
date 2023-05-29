import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './navigation/StackNavigator';
import { screensNames } from './helpers/screensNames';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName={screensNames.registrationScreen}>
      <Stack.Screen name={screensNames.registrationScreen} component={RegistrationScreen}/>
      <Stack.Screen name={screensNames.loginScreen} component={LoginScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;
