import React from 'react';
import styled from 'styled-components';
import { node, arrayOf, oneOfType } from 'prop-types';

const Container = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  background: ${(props) => `linear-gradient(180deg, ${props.theme.secondary}, ${props.theme.primary})`};
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

    background-image: url('../assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1000;
  }
`;

function FormLayout({ children }) {
  return <Container>{children}</Container>;
}

FormLayout.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};

export default FormLayout;
