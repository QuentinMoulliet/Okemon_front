export const CHANGE_USER_FIELD_VALUE = 'CHANGE_USER_FIELD_VALUE';
export const changeUserFieldValue = (value, field) => ({
  type: CHANGE_USER_FIELD_VALUE,
  value,
  field,
});

export const CHANGE_NEW_USER_FIELD_VALUE = 'CHANGE_NEW_USER_FIELD_VALUE';
export const changeNewUserFieldValue = (value, field) => ({
  type: CHANGE_NEW_USER_FIELD_VALUE,
  value,
  field,
});

export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const SAVE_SUCCESSFUL_LOGIN = 'SAVE_SUCCESSFUL_LOGIN';
export const saveSuccessfulLogin = (
  id,
  email,
  nickname,
  token,
  roles,
  image,
  catchphrase,
  contact,
  description,
  age,
  country,
  review,
  comment,
  user_number_card_collection,
  user_number_card_wishlist,
  collection,
  wishlist
) => ({
  type: SAVE_SUCCESSFUL_LOGIN,
  id,
  email,
  nickname,
  token,
  roles,
  image,
  catchphrase,
  contact,
  description,
  age,
  country,
  review,
  comment,
  user_number_card_collection,
  user_number_card_wishlist,
  collection,
  wishlist,
});

export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';
export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const HANDLE_SIGNIN = 'HANDLE_SIGNIN';
export const handleSignin = () => ({
  type: HANDLE_SIGNIN,
});

export const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
export const updateNickname = (nickname) => ({
  type: UPDATE_NICKNAME,
  nickname,
});

export const UPDATE_AGE = 'UPDATE_AGE';
export const updateAge = (age) => ({
  type: UPDATE_AGE,
  age,
});

export const UPDATE_COUNTRY = 'UPDATE_COUNTRY';
export const updateCountry = (country) => ({
  type: UPDATE_COUNTRY,
  country,
});

export const UPDATE_CATCHPHRASE = 'UPDATE_CATCHPHRASE';
export const updateCatchphrase = (catchphrase) => ({
  type: UPDATE_CATCHPHRASE,
  catchphrase,
});

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  contact,
});

export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
export const updateDescription = (description) => ({
  type: UPDATE_DESCRIPTION,
  description,
});

export const UPDATE_IMAGE = 'UPDATE_IMAGE';
export const updateImage = (image) => ({
  type: UPDATE_IMAGE,
  image,
});
