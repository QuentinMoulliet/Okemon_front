import './Loading.scss';
import PropTypes from 'prop-types';

/**
 * Loading animation with a loading text.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be displayed while loading.
 * @returns {JSX.Element} - The rendered Loading component.
 */
const Loading = ({ text }) => {
  return (
    <div className="loading">
      <div className="pokeball" />
      <h2 className="loading_text">{text}</h2>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: '',
};

export default Loading;
