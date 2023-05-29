import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import { screensNames } from '../helpers/screensNames'
import { RootStackParamList } from '../navigation/StackParamList'

type Props = NativeStackScreenProps<RootStackParamList, screensNames.registrationScreen>;

const RegistrationScreen = ({navigation,route}:Props) => {
  return <View></View>
}

export default RegistrationScreen