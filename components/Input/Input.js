import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { string, oneOf, func } from 'prop-types';
import { Envelope, Lock } from '../../assets/Icons';
import {Wrapper, StyledLabel, StyledInput, IconWrapper, Icon, Focus} from './InputStyles'

const IconEnum = Object.freeze({
  envelope: Envelope,
  lock: Lock,
});

function Input({ name, id, type = 'text', label, value = '', onChange, icon }) {
  const [isFocused, setIsfocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(value.toString().length === 0);
  }, [value]);

  const handleOnFocus = () => setIsfocused(true);

  const handleOnBlur = () => setIsfocused(false);

  const Icon = IconEnum[icon];
  return (
    <Wrapper isFocused={isFocused} isEmpty={isEmpty}>
      <StyledLabel>{label}</StyledLabel>
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
    </Wrapper>
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
};

export default Input;
