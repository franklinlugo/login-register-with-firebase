import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: grid;
  place-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  transform-style: preserve-3d;
  &:active {
    transform: scale(0.97);
  }
`;

function Button({ children, type = 'button' }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

Button.propTypes = {
  children: string,
  type: string,
};

export default Button;
