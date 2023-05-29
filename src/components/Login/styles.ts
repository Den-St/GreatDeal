import styled from "styled-components/native";

export const Container = styled.View`
   flex-direction: column;
   flex: 1;
`;

export const Top = styled.View`
    padding: 50px 0 55px 0;
    flex-direction: column;
    align-items: center;
    gap:25px;
`;

export const Name = styled.Text`
    font-size: 30px;
    color: white;
`;

export const Input = styled.TextInput`
    height: 40px;
    width: 70%;
    font-size: 17px;
    border: 1px solid white;
    color:white;
    border-radius: 5px;
    padding-left: 15px;
`;

export const LoginButtonContainer = styled.Pressable`
    width: 30%;
    height: 40px;
    border-radius: 10px;
background-color: white;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    align-items:center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 25px;
    color:black;
`;

export const Title = styled.Text`
    font-size: 30px;
    font-family: Helvetica;
    font-weight: 400;
    color:white;
`;

export const Bottom = styled.View`
    background-color: white;
    align-content: center;
    justify-content: space-between;
    padding: 15px 0;
    flex: 0.25;
`;

export const NoAccountNotification = styled.Text`
    font-size: 14px;
    color: black;
`;

export const RegistrationButtonContainer = styled.Pressable`
    width: 45%;
    height: 40px;
    background-color: rgba(60,60,60,1);
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`;

export const RegistrationText = styled.Text`
    font-size: 22px;
    color: #ffffff;
`;

export const RegistrationContainer = styled.View`
    align-items: center;
    gap: 5px;

`;

export const SocialsContainer = styled.View`
    align-items: center;
    gap: 5px;
`;

export const SocialButtonContainer = styled.Pressable`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
`;

export const SocialImage = styled.Text`
    font-size: 30px;
`;
