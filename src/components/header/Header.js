import { HeaderStyled } from './Header.styled';
import Navigation from './navigation';

const Header = ({ headeLinks, colors }) => {
  return (
    <HeaderStyled>
      <a href="/#" className="logo">
        LOGO
      </a>
      <Navigation headeLinks={headeLinks} colors={colors}></Navigation>
    </HeaderStyled>
  );
};

export default Header;
