import React, { useState } from "react";
import styled from "styled-components/native";
import { useAuth } from "../contexts/authContext";
import { OctupLogo } from "../assets/svgs/octupLogo";
import { TextInput } from "@react-native-material/core";
import { EyeLogo } from "../assets/svgs/eye";
import { ClosedEyeLogo } from "../assets/svgs/closed_eye";
import { LinearGradient } from "expo-linear-gradient";
import { getEmailColor, isValidEmail } from "../utils/string-utils";
import { octupTheme } from "../theme/octup-theme";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showEmailColor, setShowEmailColor] = useState(false);

  const handleLogin = async () => {
    context.signIn({ email, password });
  };

  return (
    <Container>
      <LogoContainer>
        <OctupLogo />
      </LogoContainer>
      <LoginView>
        <Title>Log In to your account</Title>
        <TextInput
          variant="outlined"
          label="email"
          color={getEmailColor(email, showEmailColor)}
          onBlur={() => {
            setShowEmailColor(true);
          }}
          style={{ margin: 16, width: 400 }}
          // inputStyle={{ color: getEmailColor(email, showEmailColor) }}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          variant="outlined"
          label="password"
          secureTextEntry={!showPassword}
          style={{ margin: 16, width: 400 }}
          value={password}
          color={password.length > 0 ? "green" : "red"}
          onChangeText={setPassword}
          trailing={() => {
            if (!showPassword) {
              return <EyeLogo onPress={() => setShowPassword(true)} />;
            } else {
              return <ClosedEyeLogo onPress={() => setShowPassword(false)} />;
            }
          }}
        />
        <Button onPress={handleLogin}>
          <ButtonGradient
            colors={["#007F82", "#00A8A8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <ButtonText>Log In</ButtonText>
          </ButtonGradient>
        </Button>
      </LoginView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${octupTheme.colors.background};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  width: 83%;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const ButtonGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${octupTheme.colors.buttonText};
  font-size: 18px;
`;

const LoginView = styled.View`
  padding-top: 10%;
  flex: 1;
  width: 100%;
  background-color: white;
  border-top-right-radius: 40px;
  align-items: center;
`;

const LogoContainer = styled.View`
  height: 15%;
  margin-top: 4%;
  justify-content: center;
`;
