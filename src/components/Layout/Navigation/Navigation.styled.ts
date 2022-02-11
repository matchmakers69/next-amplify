import styled from 'styled-components';

export const NavContainer = styled.nav`
  align-items: center;
  justify-content: flex-end;
  padding-left: 4rem;
  display: flex;
  transition: all 0.3s 0.1s;
`;

export const NavList = styled.ul`
  display: grid;
  justify-content: right;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
`;

export const NavListItem = styled.li`
  &.active {
    a {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;

export const NavListItemLink = styled.a`
  position: relative;
  display: block;
  padding: 2rem 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;
