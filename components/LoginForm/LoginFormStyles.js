import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  padding: 70px 50px 30px;
  background: ${(props) => props.theme.white};
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
  margin: 32px 0 64px 0;
  span {
    grid-area: text;
    font-size: 16px;
    color: ${(props) => props.theme.gray};
    text-align: center;
  }
`;

const SocialButton = styled.button`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: center;
  align-content: center;
  gap: 16px;
  width: 100%;
  height: 40px;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;
  transform-style: preserve-3d;
  &:active {
    transform: scale(0.97);
  }
`;

export const FacebookButton = styled(SocialButton)`
  grid-area: facebookButton;
`;
export const GoogleButton = styled(SocialButton)`
  grid-area: googleButton;
`;

export const RegisterLink = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;
  color: ${(props) => props.theme.gray};
  text-align: center;
  a {
    color: ${(props) => props.theme.gray};
  }
`;
