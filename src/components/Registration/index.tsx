import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screensNames } from '../../helpers/screensNames';
import { RootStackParamList } from '../../navigation/StackParamList';
import LinearGradient from 'react-native-linear-gradient';
import { LogoSvg } from '../../assets/svgs/logo';
import { SubmitButtonContainer, SubmitButtonText, RegistrationButtonContainer, RegistrationText, Top, Name, Bottom, RegistrationContainer, NoAccountNotification, SocialsContainer, SocialButtonContainer, SocialImage, Container, Input } from './styles';
import { useMoveToScreen } from '../../hooks/useMoveToScreen';

const gradientColors:string[] = [
    'rgba(56,56,56,1)',
    'rgba(57,57,57,1)',
    'rgba(64,64,64,1)',
    'rgba(65,65,65,1)',
    'rgba(66,66,66,1)',
    'rgba(67,67,67,1)',
    'rgba(68,68,68,1)',
    'rgba(69,69,69,1)',
    'rgba(68,68,68,1)', 
    'rgba(67,67,67,1)',
    'rgba(66,66,66,1)',
    'rgba(65,65,65,1)',
    'rgba(64,64,64,1)',
    'rgba(57,57,57,1)'
]
const colorsLocations:number[] = [
    0,12,20,28,35,44,51,58,66,73,78,83,88,100
];


type Props = {
    useNav:NativeStackScreenProps<RootStackParamList, screensNames.registrationScreen>;
}

const Registration = ({useNav}:Props) => {
    const goToLogin = useMoveToScreen(useNav).goLogin;
    const LoginButton = <SubmitButtonContainer><SubmitButtonText>Submit</SubmitButtonText></SubmitButtonContainer>
    const RegistrationButton = <RegistrationButtonContainer onPress={goToLogin}><RegistrationText>Sign up</RegistrationText></RegistrationButtonContainer>

    return <Container>
        <Top>
            <LogoSvg width="140" height="140" color={'#000000'}/>
            <Name>Great Deal</Name>
            <Input placeholderTextColor={'black'} placeholder="Login"/>
            <Input placeholderTextColor={'black'} placeholder="Password"/>
            {LoginButton}
        </Top>
        <LinearGradient colors={gradientColors} locations={colorsLocations} style={{flex:0.35}}>
            <Bottom>
                <RegistrationContainer>
                    <NoAccountNotification>Already have an account?</NoAccountNotification>
                    {RegistrationButton}
                </RegistrationContainer>
                <SocialsContainer>
                    <NoAccountNotification>You can sign up using this socials:</NoAccountNotification>
                    <SocialButtonContainer><SocialImage>G</SocialImage></SocialButtonContainer>
                </SocialsContainer>
            </Bottom>
        </LinearGradient>
    </Container>
}

export default Registration