import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LinearGradient from "react-native-linear-gradient"
import { LogoSvg } from "../../assets/svgs/logo"
import { screensNames } from "../../helpers/screensNames";
import { useMoveToScreen } from "../../hooks/useMoveToScreen";
import { RootStackParamList } from "../../navigation/StackParamList";
import { LoginButtonContainer, ButtonText, Container, Input, Name, Top, Bottom, RegistrationContainer, NoAccountNotification, RegistrationButtonContainer, RegistrationText, SocialsContainer, SocialButtonContainer, SocialImage } from "./styles"

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
    useNav:NativeStackScreenProps<RootStackParamList, screensNames.loginScreen>;
}
                
export const LoginComponent = ({useNav}:Props) => {
    const goToRegistration = useMoveToScreen(useNav).goRegistration;
    const LoginButton = <LoginButtonContainer><ButtonText>Login</ButtonText></LoginButtonContainer>
    const RegistrationButton = <RegistrationButtonContainer onPress={goToRegistration}><RegistrationText>Registration</RegistrationText></RegistrationButtonContainer>

    return <Container>
        <LinearGradient style={{flex:0.75}} colors={gradientColors} locations={colorsLocations}>
            <Top>
                <LogoSvg width="140" height="140" color={'#ffffff'}/>
                <Name>Great Deal</Name>
                <Input placeholderTextColor={'white'} placeholder="Login"/>
                <Input placeholderTextColor={'white'} placeholder="Password"/>
                {LoginButton}
            </Top>
        </LinearGradient>
        <Bottom>
            <RegistrationContainer>
                <NoAccountNotification>Don't have an account?</NoAccountNotification>
                {RegistrationButton}
            </RegistrationContainer>
            <SocialsContainer>
                <NoAccountNotification>You can sign up using this socials:</NoAccountNotification>
                <SocialButtonContainer><SocialImage>G</SocialImage></SocialButtonContainer>
            </SocialsContainer>
        </Bottom>
    </Container>
}