/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';

import './SingleCard.scss';

import Wrapper from '../Wrapper/Wrapper';
import Card from '../Card/Card';
import { serverUrl, closeSingleCardModal, apiKey } from '../../actions/main';

/**
 * SingleCardButtons component.
 * @returns {JSX.Element} The rendered SingleCardButtons component.
 */
const SingleCardButtons = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [owners, setOwners] = useState([]);
  const [wishers, setWishers] = useState([]);
  const [countOwners, setCountOwners] = useState(0);
  const [countWishers, setCountWishers] = useState(0);

  useEffect(() => {
    const usersByCard = async () => {
      try {
        axios.get(`${serverUrl}/api/carte/details/${slug}`).then((response) => {
          setOwners(response.data.owners);
          setWishers(response.data.wishers);
          setCountOwners(response.data.owners.length);
          setCountWishers(response.data.wishers.length);
        });
      } catch (error) {
        console.error(`Error fetching users for card with api_id ${slug}:`);
      }
    };
    usersByCard();
  }, [slug]);

  let ownersResponse = `${countOwners} personnes la possèdent`;
  if (countOwners === 1) {
    ownersResponse = '1 personne la possède';
  } else if (countOwners === 0) {
    ownersResponse = 'Personne ne la possède';
  }

  let wishersResponse = `${countWishers} personnes la veulent`;
  if (countWishers === 1) {
    wishersResponse = '1 personne la veut';
  } else if (countWishers === 0) {
    wishersResponse = 'Personne ne la veut';
  }

  return (
    <div className="single_card-buttons">
      <div className="single_card-buttons-inline">
        <div className="single_card-button-container">
          <button className="single_card-button" type="button">
            {ownersResponse}
          </button>
          <ul className="single_card-userlist">
            {owners.map((owner) => (
              <li className="single_card-user" key={owner.id}>
                <button
                  type="button"
                  className="button-filter"
                  onClick={() => {
                    navigate(`/utilisateurs/${owner.id}`);
                  }}
                >
                  {owner.nickname}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="single_card-button-container">
          <button className="single_card-button" type="button">
            {wishersResponse}
          </button>
          <ul className="single_card-userlist">
            {wishers.map((wisher) => (
              <li className="single_card-user" key={wisher.id}>
                <button
                  type="button"
                  className="button-filter"
                  onClick={() => {
                    navigate(`/utilisateurs/${wisher.id}`);
                  }}
                >
                  {wisher.nickname}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/**
 * SingleCard component.
 * @returns {JSX.Element} The rendered SingleCard component.
 */
const SingleCard = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const screenSize = useSelector((state) => state.main.screenSize);

  const [name, setName] = useState('');
  const [smallImage, setSmallImage] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [symbol, setSymbol] = useState('');
  const [nameOfSet, setNameOfSet] = useState('');

  const singleCardModal = useSelector((state) => state.main.singleCardModal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.pokemontcg.io/v2/cards/${slug}?select=name,id,images,set`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );
        setName(response.data.data.name);

        setSmallImage(response.data.data.images.small);
        setLargeImage(response.data.data.images.large);
        setSymbol(response.data.data.set.images.symbol);
        setNameOfSet(response.data.data.set.name);
      } catch (error) {
        console.error(
          `Error fetching data for card with api_id ${slug}:`,
          error
        );
      }
    };

    fetchData();
  }, [screenSize, slug]);

  return (
    <div className="single_card-page">
      <Wrapper>
        <div className="single_card">
          <div className="single_card-top">
            <h2 className="single_card-name">{name}</h2>
            <h3 className="single_card-set_name">{nameOfSet}</h3>

            <img
              src={symbol}
              alt={nameOfSet}
              className="single_card-set_symbol"
            />

            {screenSize >= 900 && <SingleCardButtons />}
          </div>
          <div className="single_card-image">
            <Card
              image={smallImage}
              type="card"
              name={name}
              id={slug}
              home
              singleCard
            />
          </div>
          {screenSize < 900 && <SingleCardButtons />}
        </div>
      </Wrapper>

      {screenSize >= 550 && (
        <Popup
          open={singleCardModal}
          closeOnDocumentClick
          onClose={() => dispatch(closeSingleCardModal())}
          contentStyle={{ width: '80%' }}
          overlayStyle={{ backdropFilter: 'blur(3px)' }}
          modal
        >
          <div
            className="single_card-popup"
            onClick={() => dispatch(closeSingleCardModal())}
          >
            <img src={largeImage} alt={name} />
          </div>
        </Popup>
      )}
    </div>
  );
};

export default SingleCard;
