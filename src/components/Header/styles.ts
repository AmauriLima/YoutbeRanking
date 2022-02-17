import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[800]};
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      line-height: 5rem;
      color: ${({ theme }) => theme.colors.gray[300]};
      transition: 0.2s ease-in;

      & + a {
        margin-left: 2rem;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }

      &.active {
        color: ${({ theme }) => theme.colors.white};
        font-weight: bold;
      }

      &.active::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: ${({ theme }) => theme.colors.red[500]};
      }
    }

  }

  button {
    margin-left: auto;
  }
`;
