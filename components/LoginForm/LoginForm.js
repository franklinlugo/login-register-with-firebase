import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../index';
import { Container, Title, SocialLogin, FacebookButton, GoogleButton, RegisterLink } from './LoginFormStyles';
import { Facebook, Google } from '../../assets/Icons';

function LoginForm() {
  const [email, setEmail] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <Container>
      <Title>LOGIN</Title>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="email"
          id="email"
          type="email"
          label="Email"
          value={email}
          onChange={handleEmail}
          icon="envelope"
        />
        <Input name="password" id="email" type="password" label="Password" icon="lock" />
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

      <RegisterLink>
        Not a member? <Link to="/register">Sign up now</Link>
      </RegisterLink>
    </Container>
  );
}

export default LoginForm;
