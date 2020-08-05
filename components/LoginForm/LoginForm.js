import React from 'react';
import { Input, Button } from '../index';
import { Container, Title, SocialLogin, FacebookButton, GoogleButton } from './LoginFormStyles';

function handleSubmit(event) {
  event.preventDefault();
}

function LoginForm() {
  return (
    <Container>
      <Title>LOGIN</Title>
      <form onSubmit={handleSubmit}>
        <Input type="text" icon="envelope" />
        <Input type="password" icon="lock" />
        <Button type="submit">LOGIN</Button>
      </form>
      <SocialLogin>
        <span>Or login with</span>
        <FacebookButton>Facebook</FacebookButton>
        <GoogleButton>Google</GoogleButton>
      </SocialLogin>
    </Container>
  );
}

export default LoginForm;
