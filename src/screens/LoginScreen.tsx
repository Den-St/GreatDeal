import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { LoginComponent } from '../components/Login'
import { screensNames } from '../helpers/screensNames';
import { RootStackParamList } from '../navigation/StackParamList';

type Props = NativeStackScreenProps<RootStackParamList, screensNames.loginScreen>;
function LoginScreen(useNav:Props) {
  return <LoginComponent useNav={useNav}/>
}

export default LoginScreen