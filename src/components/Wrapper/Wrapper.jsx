import PropTypes from 'prop-types';

import './Wrapper.scss';

/**
 * Wrapper component.
 *
 * @param {Object} props - The props object.
 * @param {Node} props.children - The children of the component.
 * @param {string} props.size - The size of the wrapper.
 * @returns {JSX.Element} The rendered Wrapper component.
 */
const Wrapper = ({ children, size }) => {
  const wrapperSize = {
    width: size,
  };

  return (
    <div className="wrapper" style={wrapperSize}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};

Wrapper.defaultProps = {
  size: '95%',
};

export default Wrapper;
