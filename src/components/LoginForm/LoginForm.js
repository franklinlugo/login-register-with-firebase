import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Facebook, Google } from 'assets/Icons';
import { Input, Button } from 'common';
import { Container, Title, SocialLogin, FacebookButton, GoogleButton, RegisterLink } from './LoginFormStyles';
import { app, googleAuthProvider, facebookAuthProvider } from '../../firebase';

function LoginForm() {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    }),
    onSubmit: async (vals) => {
      await app.auth().signInWithEmailAndPassword(vals.email, vals.password);
    },
  });

  async function handleGoogleLogin() {
    await app.auth().signInWithPopup(googleAuthProvider);
  }

  async function handleFacebookLogin() {
    await app.auth().signInWithPopup(facebookAuthProvider);
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
        <Button type="submit">LOGIN</Button>
      </form>

      <SocialLogin>
        <span>Or login with</span>
        <FacebookButton onClick={handleFacebookLogin}>
          <Facebook />
          Facebook
        </FacebookButton>
        <GoogleButton onClick={handleGoogleLogin}>
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
