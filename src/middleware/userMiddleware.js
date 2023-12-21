import axios from 'axios';
import {
  HANDLE_LOGIN,
  saveSuccessfulLogin,
  HANDLE_SIGNIN,
  HANDLE_LOGOUT,
} from '../actions/user';

import { serverUrl, displayFlashMessage } from '../actions/main';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      axios
        .post(`${serverUrl}/connexion`, {
          username: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          store.dispatch(
            saveSuccessfulLogin(
              response.data.id,
              response.data.user,
              response.data.nickname,
              response.data.token.token,
              response.data.roles,
              response.data.image,
              response.data.catchphrase,
              response.data.contact,
              response.data.description,
              response.data.age,
              response.data.country,
              response.data.review,
              response.data.comment,
              response.data.user_number_card_collection,
              response.data.user_number_card_wishlist,
              response.data.collection,
              response.data.wishlist
            )
          );
          store.dispatch(
            displayFlashMessage({
              message: 'Connexion réussie',
              flashType: 'success',
              displayed: true,
            })
          );
        })
        .catch((error) => {
          console.log(error.response.data);
          store.dispatch(
            displayFlashMessage({
              message: `Echec de connexion : ${error.response.data.error}`,
              flashType: 'error',
              displayed: true,
            })
          );
        });
      break;

    case HANDLE_SIGNIN:
      axios
        .post(`${serverUrl}/api/utilisateurs/ajout`, {
          nickname: store.getState().newUser.nickname,
          email: store.getState().newUser.email,
          password: store.getState().newUser.password,
          image: store.getState().newUser.image,
        })
        .then((response) => {
          store.dispatch(
            displayFlashMessage({
              message: 'Inscription réussie',
              flashType: 'success',
              displayed: true,
            })
          );
        })
        .catch((error) => {
          store.dispatch(
            displayFlashMessage({
              message: `Echec de l'inscription : ${error.response.data}`,
              flashType: 'error',
              displayed: true,
            })
          );
        });
      break;

    case HANDLE_LOGOUT:
      axios.get(`${serverUrl}/deconnexion`).then((response) => {
        store.dispatch(
          displayFlashMessage({
            message: 'Déconnexion réussie',
            flashType: 'success',
            displayed: true,
          })
        );
      });

      break;

    default:
  }

  next(action);
};

export default userMiddleware;
