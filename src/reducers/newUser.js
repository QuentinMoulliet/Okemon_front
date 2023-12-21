import { CHANGE_NEW_USER_FIELD_VALUE } from '../actions/user';

export const initialState = {
  nickname: '',
  email: '',
  password: '',
  image: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NEW_USER_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
