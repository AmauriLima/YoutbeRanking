import styled, { css } from 'styled-components';

type InputProps = {
  error?: string;
}

export const Input = styled.input<InputProps>`
  height: 48px;
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  outline: none;
  font-size: 1rem;
  margin-top: 4px;
  padding: 0 16px;
  border: 2px solid transparent;
  border-radius: 4px;
  transition: 0.2s ease-in;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger};
    border-color: ${theme.colors.danger} !important;
  `}
`;
