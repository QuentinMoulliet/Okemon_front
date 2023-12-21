import PropTypes from 'prop-types';

import './Circle.scss';

/**
 * Circular container with a specified size.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be rendered inside the circle.
 * @param {string} props.size - The size of the circle ('100px', '2rem', etc.).
 * @returns {JSX.Element} - The rendered Circle component.
 */
const Circle = ({ children, size }) => {
  const circleSize = {
    width: size,
    height: size,
  };

  return (
    <div className="circle" style={circleSize}>
      {children}
    </div>
  );
};

Circle.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
};

export default Circle;
