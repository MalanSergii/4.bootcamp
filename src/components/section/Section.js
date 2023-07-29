import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';
import ModuleList from 'components/main/moduleList';

const Section = ({ title, moduleList }) => {
  return (
    <SectionStyled>
      {title && <h2 className="sectionTitle">{title}</h2>}
      <ModuleList moduleList={moduleList}></ModuleList>
    </SectionStyled>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  moduleList: PropTypes.arrayOf(PropTypes.shape),
};
