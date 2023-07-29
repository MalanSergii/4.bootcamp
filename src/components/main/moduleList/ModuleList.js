import Module from '../module/Module';
import { LessonsList } from './ModuleList.styled';

const ModuleList = ({ moduleList }) => {
  return (
    <LessonsList>
      {moduleList.map(({ name, webinar, repository }) => (
        <Module key={name} name={name} webinar={webinar} repository={repository}></Module>
      ))}
    </LessonsList>
  );
};

export default ModuleList;
