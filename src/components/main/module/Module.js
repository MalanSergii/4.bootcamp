import PropTypes from 'prop-types';
import { LessonCard } from './Module.styled';

const Module = ({ name, webinar, repository }) => {
  return (
    <LessonCard>
      <h3 className="lessonTitle">{name}</h3>
      <iframe
        width={560 / 2}
        height={315 / 2}
        src={webinar}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>{' '}
      <br />
      <a href={repository}>repository</a>
    </LessonCard>
  );
};

export default Module;

Module.propTypes = {
  name: PropTypes.string.isRequired,
  webinar: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
};
