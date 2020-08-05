import React from 'react';
import styled from 'styled-components';
import { node, arrayOf, oneOfType } from 'prop-types';

const Container = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  background: linear-gradient(180deg, #0250c5, #d43f8d);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  &::after {
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
    z-index: -1000;
  }
`;

function FormBackground({ children }) {
  return <Container>{children}</Container>;
}

FormBackground.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};

export default FormBackground;
