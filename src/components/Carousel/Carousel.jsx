import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Carousel.scss';

import Card from '../Card/Card';
import Wrapper from '../Wrapper/Wrapper';
import Loading from '../Loading/Loading';

/**
 * Carousel component.
 *
 * @param {Object} props - The props object.
 * @param {number} props.length - The number of cards to display.
 * @param {string} props.title - The carousel title.
 * @param {Function} props.getCards - The function to get the cards.
 * @returns {JSX.Element} The rendered Carousel component.
 */
const Carousel = ({ length, title, getCards }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      const cardsPromises = Array.from({ length }, getCards);
      const allCards = await Promise.all(cardsPromises);
      setCards(allCards);
      setLoading(false);
    };

    fetchCards();
  }, [length, getCards]);

  return (
    <Wrapper>
      <h2 className="section_title">{title}</h2>
      {loading && <Loading />}
      {!loading && (
        <div className="carousel">
          {cards.map((card) => (
            <div key={card.join('-')} className="carousel_card">
              <Card
                image={`https://images.pokemontcg.io/${card[0]}/${card[1]}.png`}
                name={`Carte #${card[1]}`}
                home
                id={`${card[0]}-${card[1]}`}
                type="card"
              />
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

Carousel.propTypes = {
  length: PropTypes.number.isRequired,
  title: PropTypes.string,
  getCards: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  title: '',
};

export default Carousel;
