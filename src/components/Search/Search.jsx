import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search as SearchIcon } from 'react-feather';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Search.scss';

import {
  changeSearchValue,
  search,
  fetchRarities,
  fetchTypes,
  fetchSets,
  changeFilterOneName,
  changeFilterTwoName,
  changeFilterThreeName,
  changeFilterOneValue,
  changeFilterTwoValue,
  changeFilterThreeValue,
  setNewFilterSelected,
  changeSearchUserValue,
} from '../../actions/search';

/**
 * Search component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.type - The type of search to display ('cards' or 'users').
 * @returns {JSX.Element} The rendered Search component.
 */
const Search = ({ type }) => {
  const dispatch = useDispatch();
  const searchField = useSelector((state) => state.search.field);
  const rarities = useSelector((state) => state.search.rarities);
  const types = useSelector((state) => state.search.types);
  const sets = useSelector((state) => state.search.sets);

  const filterOneName = useSelector((state) => state.search.filterOneName);
  const filterTwoName = useSelector((state) => state.search.filterTwoName);
  const filterThreeName = useSelector((state) => state.search.filterThreeName);

  const filterOneValue = useSelector((state) => state.search.filterOneValue);
  const filterTwoValue = useSelector((state) => state.search.filterTwoValue);
  const filterThreeValue = useSelector(
    (state) => state.search.filterThreeValue
  );

  const [filterOneOpen, setFilterOneOpen] = useState(false);
  const [filterTwoOpen, setFilterTwoOpen] = useState(false);
  const [filterThreeOpen, setFilterThreeOpen] = useState(false);

  const newFilterSelected = useSelector((state) => state.search.isNewFilter);

  const searchedUserField = useSelector(
    (state) => state.search.searchedUserField
  );

  const handleChange = (evt) => {
    if (type === 'cards') {
      dispatch(changeSearchValue(evt.target.value));
    }
    if (type === 'users') {
      dispatch(changeSearchUserValue(evt.target.value));
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (type === 'cards') {
      dispatch(search(searchField.trim()));
    }
  };

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/rarities').then((response) => {
      dispatch(fetchRarities(response.data.data));
    });
  }, [dispatch]);

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/types').then((response) => {
      dispatch(fetchTypes(response.data.data));
    });
  }, [dispatch]);

  useEffect(() => {
    axios.get('https://api.pokemontcg.io/v2/sets').then((response) => {
      dispatch(fetchSets(response.data.data));
    });
  }, [dispatch]);

  useEffect(() => {
    if (type === 'cards') {
      dispatch(changeFilterOneName('Type'));
      dispatch(changeFilterTwoName('Rareté'));
      dispatch(changeFilterThreeName('Set'));
    }
  }, [type, dispatch]);

  return (
    <div className="search">
      <form className="search-field" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          onChange={handleChange}
          value={type === 'cards' ? searchField : searchedUserField}
          placeholder={
            type === 'cards'
              ? 'Rechercher des cartes...'
              : 'Rechercher des utilisateurs...'
          }
        />
        <button type="submit" className="search-button">
          <SearchIcon color="var(--color-background)" />
        </button>
      </form>

      {type === 'cards' && (
        <div className="search-filters">
          <div className="filter-block">
            <button
              type="button"
              className={
                filterOneValue !== '' ? 'button-search active' : 'button-search'
              }
              onClick={() => {
                setFilterOneOpen(!filterOneOpen);
                dispatch(changeFilterOneValue(''));
              }}
            >
              {filterOneName}
            </button>
            <ul className={filterOneOpen ? 'filter' : 'filter close'}>
              {type === 'cards' &&
                types.map((cardType) => (
                  <li className="filter-element" key={cardType}>
                    <button
                      className="button-filter"
                      type="button"
                      onClick={() => {
                        dispatch(changeFilterOneValue(cardType));
                        setFilterOneOpen(!filterOneOpen);
                        dispatch(setNewFilterSelected(!newFilterSelected));
                      }}
                    >
                      {cardType}
                    </button>
                  </li>
                ))}
            </ul>
            {type === 'cards' && filterOneValue !== '' && (
              <button
                type="button"
                className="chosen-element"
                onClick={() => {
                  dispatch(changeFilterOneValue(''));
                  dispatch(setNewFilterSelected(!newFilterSelected));
                }}
              >
                {filterOneValue}
              </button>
            )}
          </div>

          <div className="filter-block">
            <button
              type="button"
              className={
                filterTwoValue !== '' ? 'button-search active' : 'button-search'
              }
              onClick={() => {
                setFilterTwoOpen(!filterTwoOpen);
                dispatch(changeFilterTwoValue(''));
              }}
            >
              {filterTwoName}
            </button>
            <ul className={filterTwoOpen ? 'filter' : 'filter close'}>
              {type === 'cards' &&
                rarities.map((rarity) => (
                  <li className="filter-element" key={rarity}>
                    <button
                      className="button-filter"
                      type="button"
                      onClick={() => {
                        dispatch(changeFilterTwoValue(rarity));
                        setFilterTwoOpen(!filterTwoOpen);
                        dispatch(setNewFilterSelected(!newFilterSelected));
                      }}
                    >
                      {rarity}
                    </button>
                  </li>
                ))}
            </ul>
            {type === 'cards' && filterTwoValue !== '' && (
              <button
                type="button"
                className="chosen-element"
                onClick={() => {
                  dispatch(changeFilterTwoValue(''));
                  dispatch(setNewFilterSelected(!newFilterSelected));
                }}
              >
                {filterTwoValue}
              </button>
            )}
          </div>

          <div className="filter-block">
            <button
              type="button"
              className={
                filterThreeValue !== ''
                  ? 'button-search active'
                  : 'button-search'
              }
              onClick={() => {
                setFilterThreeOpen(!filterThreeOpen);
                dispatch(changeFilterThreeValue(''));
              }}
            >
              {filterThreeName}
            </button>
            <ul className={filterThreeOpen ? 'filter' : 'filter close'}>
              {type === 'cards' &&
                sets.map((set) => (
                  <li className="filter-element" key={set.id}>
                    <button
                      className="button-filter"
                      type="button"
                      onClick={() => {
                        dispatch(changeFilterThreeValue(set.name));
                        setFilterThreeOpen(!filterThreeOpen);
                        dispatch(setNewFilterSelected(!newFilterSelected));
                      }}
                    >
                      {set.name}
                    </button>
                  </li>
                ))}
            </ul>
            {type === 'cards' && filterThreeValue !== '' && (
              <button
                type="button"
                className="chosen-element"
                onClick={() => {
                  dispatch(changeFilterThreeValue(''));
                  dispatch(setNewFilterSelected(!newFilterSelected));
                }}
              >
                {filterThreeValue}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Search;
