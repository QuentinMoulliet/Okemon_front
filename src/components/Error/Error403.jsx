import './Error.scss';
import errorImage from '../../assets/frustratedpikachu.png';

/**
 * Error403 component displays an error message with a frustrated Pikachu image.
 *
 * @component
 * @returns {JSX.Element} - The rendered Error403 component.
 */
const Error403 = () => {
  return (
    <div className="error_container">
      <h1 className="error_message">
        <span className="error_number">Erreur 403</span>
        <br />
        Accès non-autorisé
      </h1>
      <img src={errorImage} alt="frustrated pikachu" className="error_image" />
    </div>
  );
};

export default Error403;
