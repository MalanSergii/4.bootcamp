import styled from 'styled-components';

export const LessonCard = styled.li`
  padding: 10px;
  border-radius: 10px;

  &:not(:last-child) {
    margin: 0 40px 30px 0;
  }
  &:hover {
    .lessonTitle {
      color: ${({ theme }) => theme.colors.accentColor};
    }
  }

  .lessonTitle {
    margin-bottom: 10px;
    transition: all 150ms linear;
  }
`;
