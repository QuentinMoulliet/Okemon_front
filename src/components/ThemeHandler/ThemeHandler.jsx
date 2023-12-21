import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import borderImageFire from '../../assets/borders/border-fire.png';
import borderImageWater from '../../assets/borders/border-water.png';
import borderImagePlant from '../../assets/borders/border-plant.png';

import { chooseTheme, loadState } from '../../actions/main';

/**
 * Component that handles the theme of the application based on the selected theme from the state.
 * Additional themes can be added as needed.
 */
const ThemeHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadState());
    }, 1000);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme !== null) {
      dispatch(chooseTheme(storedTheme));
    }
  }, [dispatch]);

  const theme = useSelector((state) => state.main.theme);
  useEffect(() => {
    switch (theme) {
      case 'water': {
        document.documentElement.style.setProperty(
          '--color-background',
          '#025162'
        );
        document.documentElement.style.setProperty(
          '--color-primary',
          '#055bc5'
        );
        document.documentElement.style.setProperty(
          '--color-secondary',
          '#162e3a'
        );
        document.documentElement.style.setProperty(
          '--border-image',
          `url(${borderImageWater})`
        );
        break;
      }
      case 'fire': {
        document.documentElement.style.setProperty(
          '--color-background',
          '#620202'
        );
        document.documentElement.style.setProperty(
          '--color-primary',
          '#c50606'
        );
        document.documentElement.style.setProperty(
          '--color-secondary',
          '#3a1616'
        );
        document.documentElement.style.setProperty(
          '--border-image',
          `url(${borderImageFire})`
        );

        break;
      }
      case 'plant': {
        document.documentElement.style.setProperty(
          '--color-background',
          '#156a32'
        );
        document.documentElement.style.setProperty(
          '--color-primary',
          '#05b33c'
        );
        document.documentElement.style.setProperty(
          '--color-secondary',
          '#173a24'
        );
        document.documentElement.style.setProperty(
          '--border-image',
          `url(${borderImagePlant})`
        );
        break;
      }
      default:
        break;
    }
  }, [theme]);

  return null;
};

export default ThemeHandler;
