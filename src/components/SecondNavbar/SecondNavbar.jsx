import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { handleLogout } from '../../actions/user';
import { serverUrl } from '../../actions/main';

import './SecondNavbar.scss';

/**
 * SecondNavbar component.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.closeMenu - The function to close the menu.
 * @returns {JSX.Element} The rendered SecondNavbar component.
 */
const SecondNavbar = ({ closeMenu }) => {
  const dispatch = useDispatch();

  const nickname = useSelector((state) => state.user.nickname);
  const roles = useSelector((state) => state.user.roles);
  const logged = useSelector((state) => state.user.logged);
  const id = useSelector((state) => state.user.id);

  const handleLogoutClick = () => {
    dispatch(handleLogout());
    closeMenu();
  };

  return (
    <div className="second-navbar">
      <Link to="/profil" className="navbar-button" onClick={closeMenu}>
        <button type="button" className="button-nav second_nav-button">
          <span className="nickname">{nickname}</span>
        </button>
      </Link>
      <Link
        to={`/utilisateurs/${id}/collection`}
        className="navbar-button"
        onClick={closeMenu}
      >
        <button type="button" className="button-nav second_nav-button">
          Ma collection
        </button>
      </Link>
      <Link
        to={`/utilisateurs/${id}/wishlist`}
        className="navbar-button"
        onClick={closeMenu}
      >
        <button type="button" className="button-nav second_nav-button">
          Ma wishlist
        </button>
      </Link>
      <Link
        to={serverUrl}
        className="navbar-button"
        onClick={closeMenu}
        target="_blank"
        rel="noreferrer"
      >
        {roles.includes('ROLE_ADMIN') && (
          <button type="button" className="button-nav second_nav-button">
            Backoffice
          </button>
        )}
      </Link>

      {logged && (
        <button
          type="button"
          className="button-nav second_nav-button"
          onClick={handleLogoutClick}
        >
          Déconnexion
        </button>
      )}
    </div>
  );
};

SecondNavbar.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default SecondNavbar;
