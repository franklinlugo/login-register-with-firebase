import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from 'common';
import { Container, Title, LoginLink } from './RegisterFormStyles';
import { app } from '../../firebase';

function RegisterForm() {
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
      await app.auth().createUserWithEmailAndPassword(vals.email, vals.password);
    },
  });

  return (
    <Container>
      <Title>REGISTER</Title>

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

      <LoginLink>
        Have an account? <Link to="/login">Log in</Link>
      </LoginLink>
    </Container>
  );
}

export default RegisterForm;
