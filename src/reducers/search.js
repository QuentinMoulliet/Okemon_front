import {
  CHANGE_SEARCH_VALUE,
  SEARCH,
  COMPARE_TO_PREVIOUS_SEARCH,
  FETCH_RARITIES,
  FETCH_TYPES,
  FETCH_SETS,
  CHANGE_FILTER_ONE_NAME,
  CHANGE_FILTER_TWO_NAME,
  CHANGE_FILTER_THREE_NAME,
  CHANGE_FILTER_ONE_VALUE,
  CHANGE_FILTER_TWO_VALUE,
  CHANGE_FILTER_THREE_VALUE,
  SET_NEW_FILTER_SELECTED,
  CHANGE_SEARCH_USER_VALUE,
} from '../actions/search';

export const initialState = {
  field: '',
  value: '',
  previousValue: '',
  rarities: [],
  types: [],
  sets: [],
  filterOneName: '',
  filterTwoName: '',
  filterThreeName: '',
  filterOneValue: '',
  filterTwoValue: '',
  filterThreeValue: '',
  prevFilterOneValue: '',
  prevFilterTwoValue: '',
  prevFilterThreeValue: '',
  isNewFilter: false,
  searchedUserField: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        field: action.searchValue,
      };

    case SEARCH:
      return {
        ...state,
        value: action.value,
      };

    case COMPARE_TO_PREVIOUS_SEARCH:
      return {
        ...state,
        previousValue: state.field,
      };

    case FETCH_RARITIES:
      return {
        ...state,
        rarities: action.rarities,
      };

    case FETCH_TYPES:
      return {
        ...state,
        types: action.types,
      };

    case FETCH_SETS:
      return {
        ...state,
        sets: action.sets,
      };

    case CHANGE_FILTER_ONE_NAME:
      return {
        ...state,
        filterOneName: action.filterOneName,
      };
    case CHANGE_FILTER_TWO_NAME:
      return {
        ...state,
        filterTwoName: action.filterTwoName,
      };
    case CHANGE_FILTER_THREE_NAME:
      return {
        ...state,
        filterThreeName: action.filterThreeName,
      };

    case CHANGE_FILTER_ONE_VALUE:
      return {
        ...state,
        filterOneValue: action.filterOneValue,
      };
    case CHANGE_FILTER_TWO_VALUE:
      return {
        ...state,
        filterTwoValue: action.filterTwoValue,
      };
    case CHANGE_FILTER_THREE_VALUE:
      return {
        ...state,
        filterThreeValue: action.filterThreeValue,
      };

    case SET_NEW_FILTER_SELECTED:
      return {
        ...state,
        isNewFilter: action.isNewFilter,
      };

    case CHANGE_SEARCH_USER_VALUE:
      return {
        ...state,
        searchedUserField: action.searchedUserValue,
      };

    default:
      return state;
  }
};

export default reducer;
