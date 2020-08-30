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

export const LoginLink = styled.p`
  margin: 32px 0 0 0;
  padding: 0;
  line-height: 1;
  color: ${(props) => props.theme.gray};
  text-align: center;
  a {
    color: ${(props) => props.theme.gray};
  }
`;
