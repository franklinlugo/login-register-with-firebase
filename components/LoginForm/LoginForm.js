import React from 'react';
import styled from 'styled-components';
import { Input } from '../index';

const Container = styled.div`
  width: 450px;
  padding: 70px 50px 30px;
  background: #fff;
`;

const Title = styled.h3`
  margin: 0 0 16px 0;
  padding: 0;
  text-align: center;
  line-height: 1;
`;

function LoginForm() {
  return (
    <Container>
      <Title>LOGIN</Title>
      <Input type="text" icon="envelope" />
      <Input type="password" icon="lock" />
    </Container>
  );
}

export default LoginForm;
