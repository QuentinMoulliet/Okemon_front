/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import './Header.scss';
import logoImage from '../../assets/logo.png';
import fireThemeLogo from '../../assets/themes-logo/fire.png';
import waterThemeLogo from '../../assets/themes-logo/water.png';
import plantThemeLogo from '../../assets/themes-logo/plant.png';

import LoginForm from '../Form/LoginForm';
import SigninForm from '../Form/SigninForm';
import Circle from '../Circle/Circle';
import SecondNavbar from '../SecondNavbar/SecondNavbar';

import { chooseTheme } from '../../actions/main';

import {
  changeUserFieldValue,
  changeNewUserFieldValue,
  handleLogin,
  handleLogout,
  handleSignin,
} from '../../actions/user';

/**
 * Header component.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const newEmail = useSelector((state) => state.newUser.email);
  const newPassword = useSelector((state) => state.newUser.password);
  const newNickname = useSelector((state) => state.newUser.nickname);

  const screenSize = useSelector((state) => state.main.screenSize);

  const logged = useSelector((state) => state.user.logged);

  const storeTheme = (theme) => {
    localStorage.setItem('theme', theme);
    dispatch(chooseTheme(theme));
  };

  const changeNewUserField = (value, field) => {
    const action = changeNewUserFieldValue(value, field);
    dispatch(action);
  };

  const changeField = (value, field) => {
    const action = changeUserFieldValue(value, field);
    dispatch(action);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  return (
    <header className="header">
      <div className="nav">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logoImage} alt="Logo" />{' '}
            <span className="logo_text">O&apos;kemon</span>
          </Link>
        </div>
        <input
          type="checkbox"
          id="nav-check"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="nav-links">
          <Link to="/cartes" className="navbar-button" onClick={closeMenu}>
            <button type="button" className="button-nav">
              Toutes les cartes
            </button>
          </Link>
          <Link
            to="/utilisateurs"
            className="navbar-button"
            onClick={closeMenu}
          >
            <button type="button" className="button-nav">
              Tous les utilisateurs
            </button>
          </Link>
          <Popup
            trigger={
              !logged && (
                <button type="button" className="button-nav">
                  Inscription
                </button>
              )
            }
            onOpen={closeMenu}
            contentStyle={{ width: '80%' }}
            overlayStyle={{ backdropFilter: 'blur(3px)' }}
            modal
          >
            {(close) => (
              <div className="modal">
                <SigninForm
                  nickname={newNickname}
                  email={newEmail}
                  password={newPassword}
                  changeField={changeNewUserField}
                  close={close}
                  handleSignin={handleSignin}
                />
              </div>
            )}
          </Popup>
          <Popup
            trigger={
              !logged && (
                <button type="button" className="button-nav">
                  Connexion
                </button>
              )
            }
            onOpen={closeMenu}
            contentStyle={{ width: '80%' }}
            overlayStyle={{ backdropFilter: 'blur(3px)' }}
            modal
          >
            {(close) => (
              <div className="modal">
                <LoginForm
                  email={email}
                  password={password}
                  changeField={changeField}
                  handleLogin={handleLogin}
                  handleLogout={handleLogout}
                  close={close}
                />
              </div>
            )}
          </Popup>

          {screenSize < 1080 && (
            <div className="second-navbar-header">
              {logged && <SecondNavbar closeMenu={closeMenu} />}
            </div>
          )}
          <div className="nav-themes">
            <div>
              <Circle size="2rem">
                <img
                  src={fireThemeLogo}
                  alt="logo feu"
                  className="logo-theme fire"
                  onClick={() => {
                    storeTheme('fire');
                  }}
                />
              </Circle>
            </div>
            <div className="themes_bottom">
              <Circle size="2rem">
                <img
                  src={waterThemeLogo}
                  alt="logo eau"
                  className="logo-theme water"
                  onClick={() => {
                    storeTheme('water');
                  }}
                />
              </Circle>
              <Circle size="2rem">
                <img
                  src={plantThemeLogo}
                  alt="logo plante"
                  className="logo-theme plant"
                  onClick={() => {
                    storeTheme('plant');
                  }}
                />
              </Circle>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check" className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </label>
        </div>
      </div>
      {screenSize >= 1080 && (
        <div className="second-navbar-header">
          {logged && <SecondNavbar closeMenu={closeMenu} />}
        </div>
      )}
    </header>
  );
};

export default Header;
