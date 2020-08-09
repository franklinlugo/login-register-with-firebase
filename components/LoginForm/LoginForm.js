import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '../index';
import { Container, Title, SocialLogin, FacebookButton, GoogleButton, RegisterLink } from './LoginFormStyles';
import { Facebook, Google } from '../../assets/Icons';

function LoginForm() {
  const { values, errors, touched, handleChange, handleSubmit, isValid, dirty } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    }),
    onSubmit: (vals) => {
      alert(JSON.stringify(vals, null, 2));
    },
  });

  return (
    <Container>
      <Title>LOGIN</Title>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="email"
          id="email"
          type="email"
          label="Email"
          icon="envelope"
          value={values.email}
          onChange={handleChange}
          showError={errors.email && touched.email}
          errorMessage={errors.email}
        />
        <Input
          name="password"
          id="email"
          type="password"
          label="Password"
          icon="lock"
          value={values.password}
          onChange={handleChange}
          showError={errors.password && touched.password}
          errorMessage={errors.password}
        />
        <Button type="submit" disabled={!isValid || !dirty}>
          LOGIN
        </Button>
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
