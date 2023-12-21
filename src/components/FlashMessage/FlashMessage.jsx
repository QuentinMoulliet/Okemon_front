/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useDispatch } from 'react-redux';
import { Check, X } from 'react-feather';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import './FlashMessage.scss';

import { hideFlashMessage } from '../../actions/main';

/**
 * FlashMessage component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.flashType - The type of flash message ('success' or 'error').
 * @param {string} props.message - The flash message.
 * @returns {JSX.Element} The rendered FlashMessage component.
 */
const FlashMessage = ({ flashType, message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideFlashMessage());
    }, 3000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <aside
      className="flashMessage"
      onClick={() => {
        dispatch(hideFlashMessage());
      }}
    >
      {flashType === 'success' && <Check />}
      {flashType === 'error' && <X />}
      <p className="flashMessage-text">{message}</p>
    </aside>
  );
};

FlashMessage.propTypes = {
  flashType: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default FlashMessage;
