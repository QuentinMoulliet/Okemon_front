// To change search value
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const changeSearchValue = (searchValue) => ({
  type: CHANGE_SEARCH_VALUE,
  searchValue,
});

// To search
export const SEARCH = 'SEARCH';
export const search = (value) => ({
  type: SEARCH,
  value,
});

// To compare to previous search
export const COMPARE_TO_PREVIOUS_SEARCH = 'COMPARE_TO_PREVIOUS_SEARCH';
export const compareToPreviousSearch = () => ({
  type: COMPARE_TO_PREVIOUS_SEARCH,
});

// To fetch rarities
export const FETCH_RARITIES = 'FETCH_RARITIES';
export const fetchRarities = (rarities) => ({
  type: FETCH_RARITIES,
  rarities,
});

// To fetch types
export const FETCH_TYPES = 'FETCH_TYPES';
export const fetchTypes = (types) => ({
  type: FETCH_TYPES,
  types,
});

// To fetch sets
export const FETCH_SETS = 'FETCH_SETS';
export const fetchSets = (sets) => ({
  type: FETCH_SETS,
  sets,
});

// To change filter one's name
export const CHANGE_FILTER_ONE_NAME = 'CHANGE_FILTER_ONE_NAME';
export const changeFilterOneName = (filterOneName) => ({
  type: CHANGE_FILTER_ONE_NAME,
  filterOneName,
});

// To change filter two's name
export const CHANGE_FILTER_TWO_NAME = 'CHANGE_FILTER_TWO_NAME';
export const changeFilterTwoName = (filterTwoName) => ({
  type: CHANGE_FILTER_TWO_NAME,
  filterTwoName,
});

// To change filter three's name
export const CHANGE_FILTER_THREE_NAME = 'CHANGE_FILTER_THREE_NAME';
export const changeFilterThreeName = (filterThreeName) => ({
  type: CHANGE_FILTER_THREE_NAME,
  filterThreeName,
});

// To change filter one's value
export const CHANGE_FILTER_ONE_VALUE = 'CHANGE_FILTER_ONE_VALUE';
export const changeFilterOneValue = (filterOneValue) => ({
  type: CHANGE_FILTER_ONE_VALUE,
  filterOneValue,
});

// To change filter two's value
export const CHANGE_FILTER_TWO_VALUE = 'CHANGE_FILTER_TWO_VALUE';
export const changeFilterTwoValue = (filterTwoValue) => ({
  type: CHANGE_FILTER_TWO_VALUE,
  filterTwoValue,
});

// To change filter three's value
export const CHANGE_FILTER_THREE_VALUE = 'CHANGE_FILTER_THREE_VALUE';
export const changeFilterThreeValue = (filterThreeValue) => ({
  type: CHANGE_FILTER_THREE_VALUE,
  filterThreeValue,
});

// To check if new filter selected
export const SET_NEW_FILTER_SELECTED = 'SET_NEW_FILTER_SELECTED';
export const setNewFilterSelected = (isNewFilter) => ({
  type: SET_NEW_FILTER_SELECTED,
  isNewFilter,
});

// To change search user value
export const CHANGE_SEARCH_USER_VALUE = 'CHANGE_SEARCH_USER_VALUE';
export const changeSearchUserValue = (searchedUserValue) => ({
  type: CHANGE_SEARCH_USER_VALUE,
  searchedUserValue,
});
