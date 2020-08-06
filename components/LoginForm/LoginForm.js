import React from 'react';
import { Input, Button } from '../index';
import { Container, Title, SocialLogin, FacebookButton, GoogleButton, RegisterLink } from './LoginFormStyles';
import { Facebook, Google } from '../../assets/Icons';

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
        <FacebookButton>
          <Facebook />
          Facebook
        </FacebookButton>
        <GoogleButton>
          <Google />
          Google
        </GoogleButton>
      </SocialLogin>

      <RegisterLink>Not a member? Sign up now </RegisterLink>
    </Container>
  );
}

export default LoginForm;
