import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screensNames } from "../helpers/screensNames";
import { RootStackParamList } from "../navigation/StackParamList";

export const useMoveToScreen = (navigator:NativeStackScreenProps<RootStackParamList, screensNames>) => {
    return {
        goLogin:() => navigator.navigation.navigate(screensNames.loginScreen,{}),
        goRegistration:() => navigator.navigation.navigate(screensNames.registrationScreen,{a:3}),
    }
}