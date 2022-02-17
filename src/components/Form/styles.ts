import styled from 'styled-components';

export const Container = styled.form`
  background-color: ${({ theme }) => theme.colors.gray[850]};
  padding: 32px;
  border-radius: 8px;
  max-width: 500px;
  width: 500px;
  margin: 0 auto;
  box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.6);

  span {
    font-size: 2rem;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 24px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    display: inline-block;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    text-decoration: underline;
    letter-spacing: 1px;
    margin-right: 32px;
    font-size: 1rem;
    transition: 0.2s ease-in;

    :hover {
      filter: brightness(.8);
    }
  }

  button {
    font-size: 1rem;
    height: 48px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    max-width: 130px;
    font-weight: 600;
    width: 100%;
    font-size: 0.875rem;
    align-self: flex-end;
    background-color: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.gray[800]};
    transition: 0.2s ease-in;

    :hover {
      filter: brightness(.8);
    }
  }
`;
