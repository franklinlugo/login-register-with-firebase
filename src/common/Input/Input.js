import React, { useState, useEffect } from 'react';
import { string, oneOf, func, bool } from 'prop-types';
import { Envelope, Lock, Error as ErrorIcon } from '../../assets/Icons';
import { Container, InputContainer, StyledLabel, StyledInput, IconWrapper, Focus, Error } from './InputStyles';

const IconEnum = Object.freeze({
  envelope: Envelope,
  lock: Lock,
});

function Input({ name, id, type = 'text', label, value = '', onChange, icon, showError, errorMessage }) {
  const [isFocused, setIsfocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(value.toString().length === 0);
  }, [value]);

  const handleOnFocus = () => setIsfocused(true);

  const handleOnBlur = () => setIsfocused(false);

  const Icon = IconEnum[icon];
  return (
    <Container>
      <InputContainer isFocused={isFocused} isEmpty={isEmpty}>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <IconWrapper>
          <Icon width="18px" />
        </IconWrapper>
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

export default Input;
