import {
  CHOOSE_THEME,
  LOAD_STATE,
  LISTEN_TO_SCREEN_SIZE,
  STOCK_USERS_LIST,
  OPEN_SINGLE_CARD_MODAL,
  CLOSE_SINGLE_CARD_MODAL,
  DISPLAY_FLASH_MESSAGE,
  HIDE_FLASH_MESSAGE,
} from '../actions/main';

export const initialState = {
  theme: '',
  stateLoaded: false,
  screenSize: window.innerWidth,
  usersList: [],
  singleCardModal: false,
  flashMessage: {
    message: '',
    flashType: '',
    displayed: false,
  },
};

/**
 * Main reducer for the website.
 * Handles general aspects of the website, such as the theme.
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_STATE:
      return {
        ...state,
        stateLoaded: true,
      };
    case CHOOSE_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    case LISTEN_TO_SCREEN_SIZE:
      return {
        ...state,
        screenSize: action.screenSize,
      };

    case STOCK_USERS_LIST:
      return {
        ...state,
        usersList: action.usersList,
      };

    case OPEN_SINGLE_CARD_MODAL:
      return {
        ...state,
        singleCardModal: true,
      };

    case CLOSE_SINGLE_CARD_MODAL:
      return {
        ...state,
        singleCardModal: false,
      };

    case DISPLAY_FLASH_MESSAGE:
      return {
        ...state,
        flashMessage: {
          message: action.message,
          flashType: action.flashType,
          displayed: true,
        },
      };

    case HIDE_FLASH_MESSAGE:
      return {
        ...state,
        flashMessage: {
          message: '',
          flashType: '',
          displayed: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;
