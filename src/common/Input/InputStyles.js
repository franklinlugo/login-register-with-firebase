import styled, { keyframes, css } from 'styled-components';

export const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 0 0 32px;
  color: ${(props) => props.theme.gray};
  border-radius: 3px;
  border: none;
  z-index: 1000;
  outline: none;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 32px;
  padding: 4px 6px;
  background-color: #f7f7f7;
  transform: translate(0, -50%);
  line-height: 1;
  transition: 0.3s;
  border-radius: 3px;
  color: ${(props) => props.theme.gray};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translate(0, -50%);
  width: 28px;
  transition: 0.3s;
  svg {
    path {
      fill: #7f7f7f;
    }
  }
`;

const shadowAnimation = keyframes`
  to {
    box-shadow: 0px 0px 60px 20px;
    opacity: 0;
  }
`;

export const Focus = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  border-radius: 3px;
  color: transparent;
`;

const wrapperFocusedMixin = css`
  border-color: ${(props) => props.theme.primary};
  ${StyledLabel} {
    top: 0;
    left: 26px;
  }
  ${Focus} {
    animation: ${shadowAnimation} 0.5s ease-in-out forwards;
    color: rgba(211, 63, 141, 0.6);
  }
  ${IconWrapper} {
    svg {
      path {
        fill: ${(props) => props.theme.primary};
      }
    }
  }
`;

const wrapperWithValueMixin = css`
  ${StyledLabel} {
    top: 0;
    left: 26px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  /* margin-bottom: 24px; */
  border-radius: 3px;
  background-color: #f7f7f7;
  border: 1px solid;
  border-color: transparent;
  transition: 0.3s;
  ${({ isFocused }) => isFocused && wrapperFocusedMixin}
  ${({ isEmpty }) => !isEmpty && wrapperWithValueMixin}
`;

export const Error = styled.p`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  gap: 8px;
  margin: 4px 0 0 0;
  padding: 0;
  line-height: 1;
  color: #c80000;
`;

export const Container = styled.div`
  margin-bottom: 24px;
`;
