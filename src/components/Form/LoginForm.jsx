import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import './Form.scss';

import Field from '../Field/Field';

import { displayFlashMessage } from '../../actions/main';

/**
 * LoginForm component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.email - The email value.
 * @param {string} props.password - The password value.
 * @param {Function} props.changeField - The function to handle the field change.
 * @param {Function} props.handleLogin - The function to handle the login.
 * @param {Function} props.close - The function to close the modal.
 * @returns {JSX.Element} The rendered LoginForm component.
 */
const LoginForm = ({ email, password, changeField, handleLogin, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email) || email === '') {
      dispatch(
        displayFlashMessage({
          message: 'Veuillez saisir une adresse email valide',
          flashType: 'error',
          displayed: true,
        })
      );
    } else if (password === '' || password === undefined) {
      dispatch(
        displayFlashMessage({
          message: 'Veuillez entrer un mot de passe',
          flashType: 'error',
          displayed: true,
        })
      );
    } else {
      dispatch(handleLogin());
      changeField('', 'email');
      changeField('', 'password');
      close();
    }
  };

  return (
    <>
      <h2 className="form_title">Connexion</h2>
      <h4>Si la connexion ne fonctionne pas, le serveur est OFFLINE</h4>
      <form className="modal_form" onSubmit={handleSubmit}>
        <Field
          name="email"
          type="text"
          placeholder="Adresse email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={changeField}
          value={password}
        />
        <button type="submit" className="button-primary">
          Connexion
        </button>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default LoginForm;
