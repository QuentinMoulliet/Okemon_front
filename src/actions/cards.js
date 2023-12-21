/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { apiKey } from './main';

export async function getRandomCardFromLastSet() {
  const response = await axios.get(
    'https://api.pokemontcg.io/v2/sets?select=id,total,name',
    {
      headers: {
        Authorization: apiKey,
      },
    }
  );
  const latestSet = response.data.data[response.data.data.length - 1];
  const randomNumber = Math.floor(Math.random() * latestSet.total) + 1;
  return [latestSet.id, randomNumber];
}

export const ADD_TO_COLLECTION = 'ADD_TO_COLLECTION';
export const addToCollection = (api_id) => ({
  type: ADD_TO_COLLECTION,
  api_id,
});

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const addToWishlist = (api_id) => ({
  type: ADD_TO_WISHLIST,
  api_id,
});

export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';
export const removeFromCollection = (api_id) => ({
  type: REMOVE_FROM_COLLECTION,
  api_id,
});

export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const removeFromWishlist = (api_id) => ({
  type: REMOVE_FROM_WISHLIST,
  api_id,
});
