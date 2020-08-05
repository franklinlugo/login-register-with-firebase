import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 450px;
  padding: 70px 50px 30px;
  background: #fff;
`;

export const Title = styled.h3`
  margin: 0 0 16px 0;
  padding: 0;
  text-align: center;
  line-height: 1;
`;

export const SocialLogin = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'text text'
    'facebookButton googleButton';
  gap: 16px;
  span {
    grid-area: text;
    font-size: 16px;
    color: #999;
    text-align: center;
  }
`;

const SocialButton = css`
  display: grid;
  place-self: center;
  gap: 8px;
  width: 100%;
`;

export const FacebookButton = styled.button`
  grid-area: facebookButton;
  ${SocialButton}
`;
export const GoogleButton = styled.button`
  grid-area: googleButton;
  ${SocialButton}
`;
