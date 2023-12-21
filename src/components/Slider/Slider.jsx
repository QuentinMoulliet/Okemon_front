import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Slider.scss';

import Carousel from '../Carousel/Carousel';

import { getRandomCardFromLastSet } from '../../actions/cards';

/**
 * Slider component.
 *
 * @returns {JSX.Element} The rendered Slider component.
 */
const Slider = () => {
  const [counter, setCounter] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(1);
  const screenSize = useSelector((state) => state.main.screenSize);

  useEffect(() => {
    if (screenSize < 586) {
      setCardsAmount(1);
    } else if (screenSize < 856) {
      setCardsAmount(2);
    } else if (screenSize < 1125) {
      setCardsAmount(3);
    } else {
      setCardsAmount(4);
    }
  }, [screenSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((n) => n + 1);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      key={counter}
      length={cardsAmount}
      title="Découvrir le dernier set"
      getCards={getRandomCardFromLastSet}
    />
  );
};

export default Slider;
