import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.txtColor};

  .sectionTitle {
    padding: 20px 0;
  }
`;
