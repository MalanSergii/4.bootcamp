import styled from 'styled-components';

export const HeaderNamvigation = styled.nav`
  background-color: ${props => props.theme.colors.bgColor};
  a {
    color: ${props => props.theme.colors.txtColor};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  transition: all 150ms linear;

  &:hover {
    color: ${props => props.theme.colors.accentColor};
  }
`;
