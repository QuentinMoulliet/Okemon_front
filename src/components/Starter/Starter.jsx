/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useDispatch } from 'react-redux';

import fireThemeLogo from '../../assets/themes-logo/fire.png';
import waterThemeLogo from '../../assets/themes-logo/water.png';
import plantThemeLogo from '../../assets/themes-logo/plant.png';

import Circle from '../Circle/Circle';

import './Starter.scss';

import { chooseTheme } from '../../actions/main';

/**
 * Starter component displayed before entering the website.
 * Allows the user to choose a starter theme.
 * @returns {JSX.Element} The rendered Starter component.
 */
const Starter = () => {
  const dispatch = useDispatch();

  const storeTheme = (theme) => {
    localStorage.setItem('theme', theme);
    dispatch(chooseTheme(theme));
  };

  return (
    <div className="starter">
      <h1 className="starter_title">Choisis ton thème !</h1>
      <div className="starter_container">
        <div>
          <Circle size="20vh">
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
        <div className="starter_container-bottom">
          <Circle size="20vh">
            <img
              src={waterThemeLogo}
              alt="logo eau"
              className="logo-theme water"
              onClick={() => {
                storeTheme('water');
              }}
            />
          </Circle>
          <Circle size="20vh">
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
  );
};

export default Starter;
