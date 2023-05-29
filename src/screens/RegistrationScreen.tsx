import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import Registration from '../components/Registration'
import { screensNames } from '../helpers/screensNames'
import { RootStackParamList } from '../navigation/StackParamList'

type Props = NativeStackScreenProps<RootStackParamList, screensNames.registrationScreen>;

const RegistrationScreen = (useNav:Props) => {
  return <Registration useNav={useNav}/>
}

export default RegistrationScreen