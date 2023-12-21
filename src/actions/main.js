// server URL
export const serverUrl = 'https://quentinmoulliet-server.eddi.cloud';

// API key
export const apiKey = 'Bearer 925826ea-6132-4652-a8a8-6dd76b785365';

// To change the theme of the website.
export const CHOOSE_THEME = 'CHOOSE_THEME';
export const chooseTheme = (theme) => ({
  type: CHOOSE_THEME,
  theme,
});

// To load the state from the localStorage
export const LOAD_STATE = 'LOAD_STATE';
export const loadState = () => ({
  type: LOAD_STATE,
});

// To detect the screen size
export const LISTEN_TO_SCREEN_SIZE = 'LISTEN_TO_SCREEN_SIZE';
export const listenToScreenSize = (screenSize) => ({
  type: LISTEN_TO_SCREEN_SIZE,
  screenSize,
});

// To stock users list
export const STOCK_USERS_LIST = 'STOCK_USERS_LIST';
export const stockUsersList = (usersList) => ({
  type: STOCK_USERS_LIST,
  usersList,
});

// To open singleCard Modal
export const OPEN_SINGLE_CARD_MODAL = 'OPEN_SINGLE_CARD_MODAL';
export const openSingleCardModal = () => ({
  type: OPEN_SINGLE_CARD_MODAL,
});

// To close singleCard Modal
export const CLOSE_SINGLE_CARD_MODAL = 'CLOSE_SINGLE_CARD_MODAL';
export const closeSingleCardModal = () => ({
  type: CLOSE_SINGLE_CARD_MODAL,
});

// To display the flash message
export const DISPLAY_FLASH_MESSAGE = 'DISPLAY_FLASH_MESSAGE';
export const displayFlashMessage = (flashMessage) => ({
  type: DISPLAY_FLASH_MESSAGE,
  message: flashMessage.message,
  flashType: flashMessage.flashType,
  displayed: true,
});

// To hide the flash message
export const HIDE_FLASH_MESSAGE = 'HIDE_FLASH_MESSAGE';
export const hideFlashMessage = () => ({
  type: HIDE_FLASH_MESSAGE,
  message: '',
  flashType: '',
  displayed: false,
});
