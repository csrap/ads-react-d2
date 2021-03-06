import { useContext } from 'react';

import classNames from 'classnames';
import Button from '../common/Button';
import { ReactComponent as Icon } from '../../assets/ads.svg';
import AuthContext from '../auth/context';
import { Link, NavLink } from 'react-router-dom';

function Header({ className }) {
  const { isLogged, handleLogout } = useContext(AuthContext);
  return (
    <header className={classNames('header', className)}>
      <Link to="/adverts">
        <div className="header-logo">
          <Icon width="32" height="32" />
        </div>
      </Link>
      <nav className="header-nav">
        <Button>
          <NavLink to="/adverts/new">New ADS</NavLink>
        </Button>
        {isLogged ? (
          <Button className="header-button" onClick={handleLogout}>
            {' '}
            Log Out{' '}
          </Button>
        ) : (
          <Button variant="primary"
            className="header-button"
            as={Link}
            to="/login"
          >

            {' '}
            Log In{' '}
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
