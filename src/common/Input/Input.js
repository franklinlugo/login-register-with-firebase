import React, { useState, useEffect, useRef } from 'react';
import { string, oneOf, func, bool } from 'prop-types';
import { Envelope, Lock, Error as ErrorIcon, EyeOpen, EyeClosed } from '../../assets/Icons';
import {
  Container,
  InputContainer,
  StyledLabel,
  StyledInput,
  IconWrapper,
  Focus,
  Error,
  EyeVisibility,
} from './InputStyles';

const IconEnum = Object.freeze({
  envelope: Envelope,
  lock: Lock,
});

function Input({ name, id, type = 'text', label, value = '', onChange, icon, showError, errorMessage }) {
  const [isFocused, setIsfocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const isPassword = useInputIsPasswordType(type);

  useEffect(() => {
    setIsEmpty(value.toString().length === 0);
  }, [value]);

  const handleOnFocus = () => setIsfocused(true);

  const handleOnBlur = () => setIsfocused(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [derivedInputType, setDerivedInputType] = useState('password');
  const handlePasswordVisibility = () => {
    setIsPasswordVisible((_) => !_);
    setDerivedInputType((_) => (_ === 'password' ? 'text' : 'password'));
  };

  const Icon = IconEnum[icon];
  return (
    <Container>
      <InputContainer isFocused={isFocused} isEmpty={isEmpty}>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput
          name={name}
          id={id}
          type={isPassword ? derivedInputType : type}
          value={value}
          onChange={onChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <IconWrapper>
          <Icon width="18px" />
        </IconWrapper>
        {isPassword && (
          <EyeVisibility onClick={handlePasswordVisibility} role="button">
            {isPasswordVisible ? <EyeOpen /> : <EyeClosed />}
          </EyeVisibility>
        )}
        <Focus />
      </InputContainer>
      {showError && (
        <Error>
          <ErrorIcon width="12px" />
          {errorMessage}
        </Error>
      )}
    </Container>
  );
}

Input.propTypes = {
  name: string,
  id: string,
  type: string,
  label: string,
  value: string,
  onChange: func,
  icon: oneOf(['envelope', 'lock']),
  showError: bool,
  errorMessage: string,
};

function useInputIsPasswordType(type) {
  const isPassword = useRef(type === 'password');
  return isPassword.current;
}

export default Input;
