import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import './Form.scss';
import Field from '../Field/Field';

import bulbasaure from '../../assets/profile-pictures/bulbasaure_farmer.png';
import charmander from '../../assets/profile-pictures/charmander_student.png';
import squirtle from '../../assets/profile-pictures/squirtle_fireman.png';
import chansey from '../../assets/profile-pictures/chansey_nurse.png';
import evee from '../../assets/profile-pictures/evee_santa.png';
import mewtwo from '../../assets/profile-pictures/mewtwo_indian_dancer.png';
import pikachu from '../../assets/profile-pictures/pikachu_gangster.png';
import ratatta from '../../assets/profile-pictures/ratatta_trader.png';
import slowpoke from '../../assets/profile-pictures/slowpoke_astronaut.png';
import snorlax from '../../assets/profile-pictures/snorlax_matador.png';
import vulpix from '../../assets/profile-pictures/vulpix_scientist.png';
import magicarp from '../../assets/profile-pictures/magicarp_sushi_chef.png';

import { displayFlashMessage } from '../../actions/main';

const pictures = [
  { url: bulbasaure, name: 'bulbasaure_farmer.png' },
  { url: charmander, name: 'charmander_student.png' },
  { url: squirtle, name: 'squirtle_fireman.png' },
  { url: chansey, name: 'chansey_nurse.png' },
  { url: evee, name: 'evee_santa.png' },
  { url: mewtwo, name: 'mewtwo_indian_dancer.png' },
  { url: pikachu, name: 'pikachu_gangster.png' },
  { url: ratatta, name: 'ratatta_trader.png' },
  { url: slowpoke, name: 'slowpoke_astronaut.png' },
  { url: snorlax, name: 'snorlax_matador.png' },
  { url: vulpix, name: 'vulpix_scientist.png' },
  { url: magicarp, name: 'magicarp_sushi_chef.png' },
];

const ProfileImage = ({ image, alt, onClick }) => (
  <button type="button" className="button-none" onClick={onClick}>
    <img src={image} alt={alt} />
  </button>
);

/**
 * SigninForm component.
 * @param {Object} props - The props object.
 * @param {string} props.nickname - The nickname value.
 * @param {string} props.email - The email value.
 * @param {string} props.password - The password value.
 * @param {string} props.image - The image value.
 * @param {Function} props.changeField - The function to handle the field change.
 * @param {Function} props.handleSignin - The function to handle the signin.
 * @param {Function} props.close - The function to close the modal.
 * @returns {JSX.Element} The rendered SigninForm component.
 */
const SigninForm = ({
  nickname,
  email,
  password,
  changeField,
  handleSignin,
  close,
  image,
}) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (selectImage, selectImageUrl) => {
    setSelectedImage(selectImage);
    changeField(selectImageUrl, 'image');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (nickname === '') {
      dispatch(
        displayFlashMessage({
          message: 'Veuillez choisir un pseudo',
          flashType: 'error',
          displayed: true,
        })
      );
    } else if (nickname.length < 3) {
      dispatch(
        displayFlashMessage({
          message: 'Votre pseudo doit contenir au moins 3 caractères',
          flashType: 'error',
          displayed: true,
        })
      );
    } else if (!/\S+@\S+\.\S+/.test(email) || email === '') {
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
          message: 'Veuillez saisir un mot de passe',
          flashType: 'error',
          displayed: true,
        })
      );
    } else if (password.length < 8) {
      dispatch(
        displayFlashMessage({
          message: 'Votre mot de passe doit contenir au moins 8 caractères',
          flashType: 'error',
          displayed: true,
        })
      );
    } else if (
      password === password.toLowerCase() ||
      password === password.toUpperCase() ||
      !/\d/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/
    ) {
      dispatch(
        displayFlashMessage({
          message:
            'Votre mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial',
          flashType: 'error',
          displayed: true,
        })
      );
    } else if (selectedImage === null) {
      dispatch(
        displayFlashMessage({
          message: 'Veuillez choisir une image de profil',
          flashType: 'error',
          displayed: true,
        })
      );
    } else {
      dispatch(handleSignin());
      changeField('', 'nickname');
      changeField('', 'email');
      changeField('', 'password');
      close();
    }
  };

  return (
    <>
      <h2 className="form_title">Inscription</h2>
      <h4>Si l'incription ne fonctionne pas, le serveur est OFFLINE</h4>
      <form className="modal_form signin" onSubmit={handleSubmit}>
        <Field
          name="nickname"
          placeholder="Pseudo"
          onChange={changeField}
          value={nickname}
        />
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

        <label htmlFor="imageSelect" className="field-label">
          Image de profil
        </label>
        <div className="profile_image-container">
          {pictures.map((img, name) => (
            <ProfileImage
              key={img.name}
              image={img.url}
              alt={`image de profil ${name}`}
              onClick={() => handleImageSelect(img.url, img.name)}
              onChange={changeField}
              value={img.name}
              name="image"
            />
          ))}
        </div>

        {selectedImage && (
          <ProfileImage
            image={selectedImage}
            alt="Image sélectionnée"
            onClick={() => handleImageSelect(selectedImage)}
            onChange={changeField}
            value={image}
            name="image"
          />
        )}

        <button type="submit" className="button-primary">
          Inscription
        </button>
      </form>
    </>
  );
};

SigninForm.propTypes = {
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  image: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  handleSignin: PropTypes.func.isRequired,
};

ProfileImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SigninForm.defaultProps = {
  image: '',
};

export default SigninForm;
