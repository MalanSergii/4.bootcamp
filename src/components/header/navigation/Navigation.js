import PropTypes from 'prop-types';
import { HeaderNamvigation, NavItem, NavLink, NavigationList } from './Navigation.styled';

const Navigation = ({ headeLinks }) => {
  return (
    <HeaderNamvigation>
      <NavigationList>
        {headeLinks.map(link => (
          <NavItem key={link.id}>
            <NavLink href={link.path}>{link.name}</NavLink>
          </NavItem>
        ))}
      </NavigationList>
    </HeaderNamvigation>
  );
};

export default Navigation;

Navigation.propTypes = {
  headeLinks: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      path: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
