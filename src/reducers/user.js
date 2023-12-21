import {
  CHANGE_USER_FIELD_VALUE,
  HANDLE_LOGOUT,
  SAVE_SUCCESSFUL_LOGIN,
  UPDATE_NICKNAME,
  UPDATE_AGE,
  UPDATE_COUNTRY,
  UPDATE_CATCHPHRASE,
  UPDATE_CONTACT,
  UPDATE_DESCRIPTION,
  UPDATE_IMAGE,
} from '../actions/user';

import {
  ADD_TO_COLLECTION,
  ADD_TO_WISHLIST,
  REMOVE_FROM_COLLECTION,
  REMOVE_FROM_WISHLIST,
} from '../actions/cards';

export const initialState = {
  logged: false,
  id: '',
  email: '',
  nickname: '',
  token: '',
  password: '',
  roles: [],
  image: '',
  catchphrase: '',
  contact: '',
  description: '',
  age: '',
  country: '',
  review: '',
  comment: '',
  user_number_card_collection: '',
  user_number_card_wishlist: '',
  collection: [],
  wishlist: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case SAVE_SUCCESSFUL_LOGIN:
      return {
        ...state,

        logged: true,
        id: action.id,
        email: action.email,
        nickname: action.nickname,
        token: action.token,
        password: '',
        roles: action.roles,
        image: action.image,
        catchphrase: action.catchphrase,
        contact: action.contact,
        description: action.description,
        age: action.age,
        country: action.country,
        review: action.review,
        comment: action.comment,
        user_number_card_collection: action.user_number_card_collection,
        user_number_card_wishlist: action.user_number_card_wishlist,
        collection: action.collection,
        wishlist: action.wishlist,
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        logged: false,
        id: '',
        nickname: '',
        token: '',
        email: '',
        password: '',
        roles: [],
        image: '',
        catchphrase: '',
        contact: '',
        description: '',
        age: '',
        country: '',
        review: '',
        comment: '',
        user_number_card_collection: '',
        user_number_card_wishlist: '',
        collection: [],
        wishlist: [],
      };

    case UPDATE_NICKNAME:
      return {
        ...state,
        nickname: action.nickname,
      };

    case UPDATE_AGE:
      return {
        ...state,
        age: action.age,
      };

    case UPDATE_COUNTRY:
      return {
        ...state,
        country: action.country,
      };

    case UPDATE_CATCHPHRASE:
      return {
        ...state,
        catchphrase: action.catchphrase,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contact: action.contact,
      };

    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.description,
      };

    case UPDATE_IMAGE:
      return {
        ...state,
        image: action.image,
      };

    case ADD_TO_COLLECTION: {
      const newCard = { api_id: action.api_id, card_id: '' };
      return {
        ...state,
        collection: [...state.collection, newCard],
        user_number_card_collection: state.user_number_card_collection + 1,
      };
    }

    case ADD_TO_WISHLIST: {
      const newCard = { api_id: action.api_id, card_id: '' };
      return {
        ...state,
        wishlist: [...state.wishlist, newCard],
        user_number_card_wishlist: state.user_number_card_wishlist + 1,
      };
    }

    case REMOVE_FROM_COLLECTION: {
      const newCollection = state.collection.filter(
        (card) => card.api_id !== action.api_id
      );

      return {
        ...state,
        collection: newCollection,
        user_number_card_collection: state.user_number_card_collection - 1,
      };
    }

    case REMOVE_FROM_WISHLIST: {
      const newWishlist = state.wishlist.filter(
        (card) => card.api_id !== action.api_id
      );

      return {
        ...state,
        wishlist: newWishlist,
        user_number_card_wishlist: state.user_number_card_wishlist - 1,
      };
    }

    default:
      return state;
  }
};

export default reducer;
