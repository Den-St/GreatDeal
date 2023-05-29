import { NavigationContainer } from "@react-navigation/native"
import { screensNames } from "../helpers/screensNames"
import LoginScreen from "../screens/LoginScreen"
import RegistrationScreen from "../screens/RegistrationScreen"
import { Stack } from "./StackNavigator"

export const NavigationProvider = () => {
    return <NavigationContainer>
    <Stack.Navigator initialRouteName={screensNames.registrationScreen} screenOptions={{headerShown:false}}>
      <Stack.Screen name={screensNames.registrationScreen} component={RegistrationScreen}/>
      <Stack.Screen name={screensNames.loginScreen} component={LoginScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}