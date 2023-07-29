import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.txtColor};

  background-color: ${props => props.theme.colors.bgColor};

  .logo {
    color: ${props => props.theme.colors.txtColor};
    padding: 10px 5px;
    border: 2px solid;
    transition: all 150ms linear;

    &:hover {
      color: ${props => props.theme.colors.accentColor};
    }
  }
`;
