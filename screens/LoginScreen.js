import React, { useState } from 'react';
import styled from 'styled-components/native';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('EMAIL',email)
    console.log('PASS',password)
    // Handle login logic here
  }

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <Button onPress={handleLogin}>
        <ButtonText>'Login'</ButtonText>
      </Button>
    </Container>
  );
}

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
