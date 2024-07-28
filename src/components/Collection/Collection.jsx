/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';

import './Collection.scss';

import Grid from '../Grid/Grid';
import Search from '../Search/Search';
import Wrapper from '../Wrapper/Wrapper';

import {
  compareToPreviousSearch,
  setNewFilterSelected,
} from '../../actions/search';

import { serverUrl, stockUsersList, apiKey } from '../../actions/main';

/**
 * Collection component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.type - The type of collection to display ('cards' or 'users').
 * @returns {JSX.Element} The rendered Collection component.
 */
const Collection = ({ type }) => {
  const dispatch = useDispatch();

  const screenSize = useSelector((state) => state.main.screenSize);
  const searchValue = useSelector((state) => state.search.value);
  const prevSearchValue = useSelector((state) => state.search.previousValue);
  const searchedUserField = useSelector(
    (state) => state.search.searchedUserField
  );

  const filterOneName = useSelector((state) => state.search.filterOneName);
  const filterTwoName = useSelector((state) => state.search.filterTwoName);
  const filterThreeName = useSelector((state) => state.search.filterThreeName);
  const filterOneValue = useSelector((state) => state.search.filterOneValue);
  const filterTwoValue = useSelector((state) => state.search.filterTwoValue);
  const filterThreeValue = useSelector(
    (state) => state.search.filterThreeValue
  );

  const newFilterSelected = useSelector((state) => state.search.isNewFilter);

  let filterOneNameEng = filterOneName;
  if (filterOneName === 'Type') {
    filterOneNameEng = 'types';
  }

  /*
  The filter algorithm checks if the value of filterOneValue is not an empty string.
  If it is not empty, it constructs a filter string using the filterOneNameEng and filterOneValue.
  The filter string is in the format: "AND filterOneNameEng: *filterOneValue*"
  The filterOneValue is modified by replacing any spaces with dots.
  If the filterOneValue is an empty string, the filter string is also empty.
  */

  const filterOne =
    filterOneValue !== ''
      ? ` AND ${filterOneNameEng.toLowerCase()}:*${filterOneValue.replace(
          / /g,
          '.'
        )}*`
      : '';
  let filterTwoNameEng = filterTwoName;
  if (filterTwoName === 'Rareté') {
    filterTwoNameEng = 'rarity';
  }
  const filterTwo =
    filterTwoValue !== ''
      ? ` AND ${filterTwoNameEng.toLowerCase()}:*${filterTwoValue.replace(
          / /g,
          '.'
        )}*`
      : '';

  let filterThreeNameEng = filterThreeName;
  if (filterThreeName === 'Set') {
    filterThreeNameEng = 'set.name';
  }
  const filterThree =
    filterThreeValue !== ''
      ? ` AND ${filterThreeNameEng.toLowerCase()}:*${filterThreeValue.replace(
          / /g,
          '.'
        )}*`
      : '';

  const [wrapperSize, setWrapperSize] = useState('95%');
  const [allCards, setAllCards] = useState([]);
  const [allCardsPage, setAllCardsPage] = useState(1);

  const usersList = useSelector((state) => state.main.usersList);

  const cardsResearchLink = `https://api.pokemontcg.io/v2/cards?select=name,images,id&pageSize=12&page=${allCardsPage}&q=name:*${searchValue}*${filterOne}${filterTwo}${filterThree}&orderBy=number`;
  useEffect(() => {
    async function getCards() {
      const response = await axios.get(cardsResearchLink, {
        headers: {
          Authorization: apiKey,
        },
      });

      const newCards = response.data.data.map((card) => ({
        image: card.images.small,
        name: card.name,
        type: 'card',
        cardId: card.id,
      }));

      if (searchValue !== prevSearchValue || newFilterSelected) {
        setAllCards(newCards.slice(0, 12));
        setAllCardsPage(1);
        dispatch(compareToPreviousSearch(searchValue));
        dispatch(setNewFilterSelected(false));
      } else {
        setAllCards((prevCards) => [...prevCards, ...newCards]);
      }
    }
    getCards();
  }, [allCardsPage, searchValue, newFilterSelected]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setAllCardsPage((prevCount) => prevCount + 1);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardsList = allCards;

  let usersResearchLink = `${serverUrl}/api/utilisateurs`;
  if (searchedUserField !== '') {
    usersResearchLink = `${serverUrl}/api/utilisateurs/recherche/${searchedUserField}`;
  }
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(usersResearchLink);
        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const usersWithTypes = response.data.map((userWithType) => ({
            ...userWithType,
            type: 'user',
          }));
          dispatch(stockUsersList(usersWithTypes));
        }
      } catch (error) {
        dispatch(stockUsersList([]));
      }
    }
    getUsers();
  }, [searchedUserField]);

  let list = [];

  switch (type) {
    case 'cards':
      list = cardsList;
      break;
    case 'users':
      list = usersList;
      break;
    default:
      list = [];
  }

  useEffect(() => {
    if (screenSize < 1080) {
      setWrapperSize('95%');
    } else {
      setWrapperSize('30%');
    }
  }, [screenSize]);

  return (
    <div className={type === 'cards' ? 'collection' : 'collection_users'}>
      <Wrapper size={type === 'cards' ? wrapperSize : '95%'}>
      <h4>Si aucun utilisateur ne s'affiche, le serveur est OFFLINE.</h4>
        <Search type={type} />
      </Wrapper>
      <Grid list={list} type={type} />
    </div>
  );
};

Collection.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Collection;
