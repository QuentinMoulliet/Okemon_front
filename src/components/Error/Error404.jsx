import './Error.scss';
import errorImage from '../../assets/confusedpikachu.png';

/**
 * Error404 component displays an error message with a confused Pikachu image.
 *
 * @component
 * @returns {JSX.Element} - The rendered Error404 component.
 */
const Error404 = () => {
  return (
    <div className="error_container">
      <h1 className="error_message">
        <span className="error_number">Erreur 404</span>
        <br />
        Page inconnue
      </h1>
      <img src={errorImage} alt="confused pikachu" className="error_image" />
    </div>
  );
};

export default Error404;
