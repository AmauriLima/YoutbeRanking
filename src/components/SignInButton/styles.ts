import styled from 'styled-components';

export const Button = styled.button`
  height: 3rem;
  border-radius: 3rem;
  background: ${({ theme }) => theme.colors.gray[850]};
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;

  svg {
    width: 30px;
    height: 30px;

    &:first-child {
      margin-right: 1rem;
    }

    &.closeIcon {
      margin-left: 1rem;
    }
  }

  transition: 0.2s ease-in;

  &:hover {
    filter: brightness(.8);
  }
`;
