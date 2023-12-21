/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Plus, Minus } from 'react-feather';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './Card.scss';

import {
  addToCollection,
  removeFromCollection,
  addToWishlist,
  removeFromWishlist,
} from '../../actions/cards';

import { serverUrl, openSingleCardModal } from '../../actions/main';

/**
 * Card component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.image - The image url.
 * @param {string} props.name - The card name.
 * @param {string} props.type - The card type.
 * @param {string|number} props.id - The card id.
 * @param {boolean} props.home - Is the card displayed in the home page ?
 * @param {boolean} props.singleCard - Is the card a singleCard ?
 * @returns {JSX.Element} The rendered Card component.
 *
 * @returns {JSX.Element} The rendered Card component.
 *
 */
const Card = ({ image, name, type, id, home, singleCard }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logged = useSelector((state) => state.user.logged);
  const collection = useSelector((state) => state.user.collection);
  const wishlist = useSelector((state) => state.user.wishlist);
  const userId = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.user.token);

  const handleAddToCollection = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/api/cartes/ajout/collection/${id}/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Erreur lors de l'ajout à la collection :", error);
    }
  };

  const handleAddToWishlist = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/api/cartes/ajout/wishlist/${id}/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Erreur lors de l'ajout à la wishlist :", error);
    }
  };

  const handleDeleteFromCollection = async () => {
    try {
      const response = await axios.delete(
        `${serverUrl}/api/cartes/suppression/collection/${id}/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error(
        'Erreur lors de la suppression dans la collection :',
        error
      );
    }
  };

  const handleDeleteFromWishlist = async () => {
    try {
      const response = await axios.delete(
        `${serverUrl}/api/cartes/suppression/wishlist/${id}/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Erreur lors de la suppression dans la wishlist :', error);
    }
  };

  return (
    <>
      {type === 'none' && (
        <div className="card_container">
          <img src={image} className="card" alt={name} />
          <div
            className={home === true ? 'card_overlay home' : 'card_overlay'}
          />
        </div>
      )}
      {type === 'user' && (
        <Link to={`/utilisateurs/${id}`}>
          <div className="card_container">
            <div className="card_name-background">
              <h2 className="card_name">{name}</h2>
            </div>
            <img src={image} className="card" alt={name} />
          </div>
        </Link>
      )}
      {type === 'card' && (
        <div
          className="card_container"
          onClick={() =>
            singleCard
              ? dispatch(openSingleCardModal())
              : navigate(`/cartes/${id}`)
          }
        >
          <img src={image} className="card" alt={name} />
          {!collection.some((element) => element.api_id === id) &&
            !wishlist.some((element) => element.api_id === id) && (
              <div
                className={home === true ? 'card_overlay home' : 'card_overlay'}
              />
            )}
          {logged && (
            <div className="add_buttons">
              <button
                type="button"
                className="add_button"
                onClick={(event) => {
                  event.stopPropagation();
                  if (!collection.some((element) => element.api_id === id)) {
                    dispatch(addToCollection(id));
                    handleAddToCollection();
                  } else {
                    dispatch(removeFromCollection(id));
                    handleDeleteFromCollection();
                  }
                  if (wishlist.some((element) => element.api_id === id)) {
                    dispatch(removeFromWishlist(id));
                    handleDeleteFromWishlist();
                  }
                }}
              >
                {collection.some((element) => element.api_id === id) ? (
                  <Minus />
                ) : (
                  <Plus />
                )}
              </button>
              {!collection.some((element) => element.api_id === id) && (
                <button
                  type="button"
                  className="add_button"
                  onClick={(event) => {
                    event.stopPropagation();
                    if (!wishlist.some((element) => element.api_id === id)) {
                      dispatch(addToWishlist(id));
                      handleAddToWishlist();
                    } else {
                      dispatch(removeFromWishlist(id));
                      handleDeleteFromWishlist();
                    }
                  }}
                >
                  {wishlist.some((element) => element.api_id === id) ? (
                    <Heart fill="var(--color-text)" />
                  ) : (
                    <Heart />
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  home: PropTypes.bool,
  singleCard: PropTypes.bool,
};

Card.defaultProps = {
  type: 'none',
  id: '',
  home: false,
  singleCard: false,
};

export default Card;
