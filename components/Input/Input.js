import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { string } from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  margin-bottom: 16px;
  border-radius: 3px;
  background-color: #f7f7f7;
`;

const StyledInput = styled.input`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 0 0 46px;
  border-radius: 3px;
  border: none;
  z-index: 1000;
`;

const InputIcon = styled.img`
  position: absolute;
  top: 50%;
  left: ${({ isFocused }) => (isFocused ? '8px' : '16px')};
  transform: translate(0, -50%);
  width: 22px;
  transition: 0.3s;
`;

const shadowAnimation = keyframes`
  to {
    box-shadow: 0px 0px 60px 20px;
    opacity: 0;
  }
`;

const shadowAnimationMixin = css`
  animation: ${shadowAnimation} 0.5s ease-in-out forwards;
  color: rgba(211, 63, 141, 0.6);
`;

const Focus = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  border-radius: 3px;
  color: transparent;
  ${({ isFocused }) => isFocused && shadowAnimationMixin}
`;

function Input({ type = 'text', icon = '' }) {
  const [isFocused, setIsfocused] = useState(false);

  function handleOnFocus() {
    setIsfocused(true);
  }
  function handleOnBlur() {
    setIsfocused(false);
  }
  return (
    <Wrapper>
      <StyledInput onFocus={handleOnFocus} onBlur={handleOnBlur} type={type} />
      <InputIcon isFocused={isFocused} src={icon} />
      <Focus isFocused={isFocused} />
    </Wrapper>
  );
}

Input.propTypes = {
  type: string,
  icon: string,
};

export default Input;
