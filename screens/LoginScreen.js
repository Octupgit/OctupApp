import React, { useState } from "react";
import styled from "styled-components/native";
import { useAuth } from "../contexts/authContext";
import { OctupLogo } from "../assets/svgs/octupLogo";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    console.log("EMAIL", email);
    console.log("PASS", password);
    context.signIn({ email, password });
    // Handle login logic here
  };

  return (
    <Container>
      <OctupLogo />
      <Title>Login</Title>
      <Input placeholder="Email" onChangeText={setEmail} value={email} />
      <Input
        placeholder="Password"
        secureTextEntry={!showPassword}
        onChangeText={setPassword}
        value={password}
      />
      <Button onPress={handleLogin}>
        <ButtonText>'Login'</ButtonText>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  padding: 10px;
  border-width: 1px;
  border-color: #cccccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: #0080ff;
  width: 80%;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
