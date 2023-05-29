import { screensNames } from './../helpers/screensNames';
export type RootStackParamList = {
    [screensNames.loginScreen]: {},
    [screensNames.registrationScreen]: {a:number}
}