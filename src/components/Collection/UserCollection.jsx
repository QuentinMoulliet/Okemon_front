/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './Collection.scss';

import Grid from '../Grid/Grid';

import { serverUrl, apiKey } from '../../actions/main';

/**
 * UserCollection component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.page - The page to display ('collection' or 'wishlist').
 * @returns {JSX.Element} The rendered UserCollection component.
 */
const UserCollection = ({ page }) => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [collection, setCollection] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setCollection([]);
    setWishlist([]);
    const getUser = async () => {
      const response = await axios.get(`${serverUrl}/api/utilisateurs/${slug}`);
      setData(response.data);

      let newCollection = [];
      let newWishlist = [];

      if (page === 'collection') {
        for (const card of response.data.userCollection) {
          const apiId = card.api_id;
          try {
            const cardResponse = await axios.get(
              `https://api.pokemontcg.io/v2/cards/${apiId}?select=name,id,images`,
              {
                headers: {
                  Authorization: apiKey,
                },
              }
            );
            const cardId = apiId;
            const image = cardResponse.data.data.images.small;
            const name = cardResponse.data.data.name;
            const type = 'card';

            const newCard = { cardId, image, name, type };
            newCollection = [...newCollection, newCard];
            setCollection(newCollection);
          } catch (error) {
            console.error(
              `Error fetching data for card with api_id ${apiId}:`,
              error
            );
          }
        }
      }

      if (page === 'wishlist') {
        for (const card of response.data.userWishlist) {
          const apiId = card.api_id;
          try {
            const cardResponse = await axios.get(
              `https://api.pokemontcg.io/v2/cards/${apiId}?select=name,id,images`,
              {
                headers: {
                  Authorization: apiKey,
                },
              }
            );
            const cardId = apiId;
            const image = cardResponse.data.data.images.small;
            const name = cardResponse.data.data.name;
            const type = 'card';

            const newCard = { cardId, image, name, type };
            newWishlist = [...newWishlist, newCard];
            setWishlist(newWishlist);
          } catch (error) {
            console.error(
              `Error fetching data for card with api_id ${apiId}:`,
              error
            );
          }
        }
      }
    };

    getUser();
  }, [slug, page]);

  if (!data) {
    return null;
  }

  const { nickname } = data.user;

  let list = [];
  if (page === 'collection') {
    list = collection;
  } else if (page === 'wishlist') {
    list = wishlist;
  }
  return (
    <div className="user_collection">
      <h2 className="user_collection-title">
        {page === 'collection' ? 'Collection' : 'Wishlist'} de{' '}
        <Link to={`/utilisateurs/${slug}`} className="user_collection-name">
          {nickname}
        </Link>
      </h2>
      <Grid list={list} />
    </div>
  );
};

UserCollection.propTypes = {
  page: PropTypes.string.isRequired,
};

export default UserCollection;
