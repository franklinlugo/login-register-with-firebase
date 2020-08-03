import React from 'react';
import styled from 'styled-components';
import { node, arrayOf, oneOfType } from 'prop-types';

const Container = styled.div`
  position: relative;
  background: linear-gradient(180deg, #0250c5, #d43f8d);
  width: 100vw;
  height: 100vh;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: url('../images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

function FormBackground({ children }) {
  return <Container>{children}</Container>;
}

FormBackground.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};

export default FormBackground;
