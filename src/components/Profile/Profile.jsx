/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-autofocus */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Popup from 'reactjs-popup';
import DOMPurify from 'dompurify';

import './Profile.scss';

import Error403 from '../Error/Error403';
import Wrapper from '../Wrapper/Wrapper';

import {
  updateNickname,
  updateAge,
  updateCountry,
  updateCatchphrase,
  updateContact,
  updateDescription,
  updateImage,
} from '../../actions/user';

import { serverUrl } from '../../actions/main';

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
import adam from '../../assets/profile-pictures/adam.png';
import quentin from '../../assets/profile-pictures/quentin.png';
import jean from '../../assets/profile-pictures/jean.png';
import julien from '../../assets/profile-pictures/julien.png';
import florian from '../../assets/profile-pictures/florian.png';

let pictures = [
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

/**
 * @param {string} image
 * @param {string} alt
 * @param {function} onClick
 * @return {JSX.Element}
 */
const ProfileImage = ({ image, alt, onClick }) => (
  <button
    type="button"
    className="button-none"
    onClick={() => {
      onClick(image);
    }}
  >
    <img src={image} alt={alt} />
  </button>
);

/**
 * Profile component
 * @return {JSX.Element} The rendered Profile component.
 */
const Profile = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);

  const id = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.user.token);
  const roles = useSelector((state) => state.user.roles);

  const nickname = useSelector((state) => state.user.nickname);
  const [newNickname, setNewNickname] = useState(nickname);
  const [nicknameField, setNicknameField] = useState(false);

  const age = useSelector((state) => state.user.age);
  const [newAge, setNewAge] = useState(age);
  const [ageField, setAgeField] = useState(false);

  const country = useSelector((state) => state.user.country);
  const [newCountry, setNewCountry] = useState(country);
  const [countryField, setCountryField] = useState(false);

  const image = useSelector((state) => state.user.image);

  const catchphrase = useSelector((state) => state.user.catchphrase);
  const [newCatchphrase, setNewCatchphrase] = useState(catchphrase);
  const [catchphraseField, setCatchphraseField] = useState(false);

  const contact = useSelector((state) => state.user.contact);
  const [newContact, setNewContact] = useState(contact);
  const [contactField, setContactField] = useState(false);

  const description = useSelector((state) => state.user.description);
  const [newDescription, setNewDescription] = useState(description);
  const [descriptionField, setDescriptionField] = useState(false);

  const collectionAmount = useSelector(
    (state) => state.user.user_number_card_collection
  );

  const wishlistAmount = useSelector(
    (state) => state.user.user_number_card_wishlist
  );

  const [imageModal, setImageModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState(null);

  useEffect(() => {
    setNewNickname(nickname);
    setNewAge(age);
    setNewCountry(country);
    setNewCatchphrase(catchphrase);
    setNewContact(contact);
    setNewDescription(description);

    pictures = [
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

    if (roles.includes('ROLE_ADMIN')) {
      pictures = [
        ...pictures,
        { url: adam, name: 'adam.png' },
        { url: quentin, name: 'quentin.png' },
        { url: jean, name: 'jean.png' },
        { url: julien, name: 'julien.png' },
        { url: florian, name: 'florian.png' },
      ];
    }

    setSelectedImage(null);
    setSelectedImageName(null);
  }, [id, nickname, age, country, catchphrase, contact, description, roles]);

  const handleUpdateNickname = async (username, userId) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/utilisateurs/modification/pseudo/${userId}`,
        { nickname: username },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour du pseudo :', error);
    }
  };

  const handleUpdateAge = async (userAge, userId) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/utilisateurs/modification/age/${userId}`,
        { age: userAge },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'age :", error);
    }
  };

  const handleUpdateCountry = async (userCountry, userId) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/utilisateurs/modification/pays/${userId}`,
        { country: userCountry },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour du pays :', error);
    }
  };

  const handleUpdateCatchphrase = async (userCatchphrase, userId) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/utilisateurs/modification/phrase/${userId}`,
        { catchphrase: userCatchphrase },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la catchphrase :', error);
    }
  };

  const handleUpdateContact = async (userContact, userId) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/utilisateurs/modification/contact/${userId}`,
        { contact: userContact },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la contact :', error);
    }
  };

  const handleUpdateDescription = async (userDescription, userId) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/utilisateurs/modification/description/${userId}`,
        { description: userDescription },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la catchphrase :', error);
    }
  };

  const profilePictureChoice = image;
  let profilePicture;

  switch (profilePictureChoice) {
    case 'bulbasaure_farmer.png':
      profilePicture = bulbasaure;
      break;
    case 'charmander_student.png':
      profilePicture = charmander;
      break;
    case 'squirtle_fireman.png':
      profilePicture = squirtle;
      break;
    case 'chansey_nurse.png':
      profilePicture = chansey;
      break;
    case 'evee_santa.png':
      profilePicture = evee;
      break;
    case 'mewtwo_indian_dancer.png':
      profilePicture = mewtwo;
      break;
    case 'pikachu_gangster.png':
      profilePicture = pikachu;
      break;
    case 'ratatta_trader.png':
      profilePicture = ratatta;
      break;
    case 'slowpoke_astronaut.png':
      profilePicture = slowpoke;
      break;
    case 'snorlax_matador.png':
      profilePicture = snorlax;
      break;
    case 'vulpix_scientist.png':
      profilePicture = vulpix;
      break;
    case 'magicarp_sushi_chef.png':
      profilePicture = magicarp;
      break;
    case 'adam.png':
      profilePicture = adam;
      break;
    case 'quentin.png':
      profilePicture = quentin;
      break;
    case 'jean.png':
      profilePicture = jean;
      break;
    case 'julien.png':
      profilePicture = julien;
      break;
    case 'florian.png':
      profilePicture = florian;
      break;
    default:
      profilePicture = '';
  }

  const handleUpdateImage = async (userImage, userId) => {
    try {
      const response = await axios.put(
        `${serverUrl}/api/utilisateurs/modification/image/${userId}`,
        { image: userImage },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(updateImage(selectedImageName));

      setImageModal(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'image :", error);
    }
  };

  if (!logged) {
    return <Error403 />;
  }
  return (
    <div className="profile">
      <Wrapper>
        <div className="profile-wrapper">
          <div className="profile-top">
            {!nicknameField && (
              <button
                className="button-profile profile-field"
                type="button"
                onClick={() => {
                  setNicknameField(true);
                }}
              >
                <span className="profile-nickname">{nickname}</span>
              </button>
            )}
            {nicknameField && (
              <form
                onSubmit={(evt) => {
                  evt.preventDefault();
                  setNicknameField(false);
                  if (newNickname.trim() !== '') {
                    handleUpdateNickname(newNickname, id);
                    dispatch(updateNickname(newNickname.trim()));
                  }
                }}
              >
                <input
                  type="text"
                  placeholder={nickname}
                  className="profile-update profile-field"
                  onChange={(evt) => {
                    setNewNickname(evt.target.value);
                  }}
                  value={newNickname}
                  autoFocus
                  onBlur={() => {
                    setNicknameField(false);
                    if (newNickname.trim() !== '') {
                      handleUpdateNickname(newNickname, id);
                      dispatch(updateNickname(newNickname.trim()));
                    }
                  }}
                />
              </form>
            )}
            <div className="profile-group">
              {!ageField && (
                <button
                  className="button-profile profile-field"
                  type="button"
                  onClick={() => {
                    setAgeField(true);
                  }}
                >
                  {age !== null ? `${age} ans` : 'Age'}
                </button>
              )}
              {ageField && (
                <form
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    setAgeField(false);
                    if (newAge.trim() !== '') {
                      handleUpdateAge(newAge, id);
                      dispatch(updateAge(newAge.trim()));
                    }
                  }}
                >
                  <input
                    type="number"
                    min={1}
                    max={999}
                    placeholder={age}
                    className="profile-update profile-field"
                    onChange={(evt) => {
                      setNewAge(evt.target.value);
                    }}
                    value={newAge}
                    autoFocus
                    onBlur={() => {
                      setAgeField(false);
                      if (newAge.trim() !== '') {
                        handleUpdateAge(newAge, id);
                        dispatch(updateAge(newAge.trim()));
                      }
                    }}
                  />
                </form>
              )}
              {!countryField && (
                <button
                  className="button-profile profile-field"
                  type="button"
                  onClick={() => {
                    setCountryField(true);
                  }}
                >
                  {country !== null ? country : 'Pays'}
                </button>
              )}
              {countryField && (
                <form
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    setCountryField(false);
                    if (newCountry.trim() !== '') {
                      handleUpdateCountry(newCountry, id);
                      dispatch(updateCountry(newCountry.trim()));
                    }
                  }}
                >
                  <input
                    type="text"
                    placeholder={country}
                    className="profile-update profile-field"
                    onChange={(evt) => {
                      setNewCountry(evt.target.value);
                    }}
                    value={newCountry}
                    autoFocus
                    onBlur={() => {
                      setCountryField(false);
                      if (newCountry.trim() !== '') {
                        handleUpdateCountry(newCountry, id);
                        dispatch(updateCountry(newCountry.trim()));
                      }
                    }}
                  />
                </form>
              )}
            </div>
            <div className="profile-group">
              <Link
                to={`/utilisateurs/${id}/collection`}
                className="profile-group"
              >
                <button className="button-profile profile-field" type="button">
                  Collection ({collectionAmount})
                </button>
              </Link>
              <Link
                to={`/utilisateurs/${id}/wishlist`}
                className="profile-group"
              >
                <button className="button-profile profile-field" type="button">
                  Wishlist ({wishlistAmount})
                </button>
              </Link>
            </div>
          </div>
          {!catchphraseField && (
            <p
              className="profile_catchphrase profile-field"
              type="button"
              onClick={() => {
                setCatchphraseField(true);
              }}
            >
              {catchphrase !== null ? catchphrase : 'Catchphrase'}
            </p>
          )}
          {catchphraseField && (
            <form
              onSubmit={(evt) => {
                evt.preventDefault();
                setCatchphraseField(false);
                if (newCatchphrase.trim() !== '') {
                  handleUpdateCatchphrase(newCatchphrase, id);
                  dispatch(updateCatchphrase(newCatchphrase.trim()));
                }
              }}
            >
              <input
                type="text"
                maxLength="70"
                placeholder={catchphrase}
                className="profile-update profile-field"
                onChange={(evt) => {
                  setNewCatchphrase(evt.target.value);
                }}
                value={newCatchphrase}
                autoFocus
                onBlur={() => {
                  setCatchphraseField(false);
                  if (newCatchphrase.trim() !== '') {
                    handleUpdateCatchphrase(newCatchphrase, id);
                    dispatch(updateCatchphrase(newCatchphrase.trim()));
                  }
                }}
              />
            </form>
          )}
          {!contactField && (
            <p
              className="profile_catchphrase profile-field"
              type="button"
              onClick={() => {
                setContactField(true);
              }}
            >
              {contact !== null ? contact : 'Contact'}
            </p>
          )}
          {contactField && (
            <form
              onSubmit={(evt) => {
                evt.preventDefault();
                setContactField(false);
                if (newContact.trim() !== '') {
                  handleUpdateContact(newContact, id);
                  dispatch(updateContact(newContact.trim()));
                }
              }}
            >
              <input
                type="text"
                maxLength="70"
                placeholder={contact}
                className="profile-update profile-field"
                onChange={(evt) => {
                  setNewContact(evt.target.value);
                }}
                value={newContact}
                autoFocus
                onBlur={() => {
                  setContactField(false);
                  if (newContact.trim() !== '') {
                    handleUpdateContact(newContact, id);
                    dispatch(updateContact(newContact.trim()));
                  }
                }}
              />
            </form>
          )}
          <div className="profile-middle">
            <button
              className="profile_picture-frame button-none"
              type="button"
              onClick={() => {
                setImageModal(true);
              }}
            >
              <img
                src={profilePicture}
                alt={image}
                className="profile_picture"
              />
            </button>
            {!descriptionField && (
              <div
                className="profile_description profile-field"
                type="button"
                onClick={() => {
                  setDescriptionField(true);
                }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    description !== null
                      ? description.replace(/\n/g, '<br/>')
                      : 'Description'
                  ),
                }}
              />
            )}
            {descriptionField && (
              <textarea
                rows={18}
                placeholder={description}
                className="profile_description-update profile-field"
                onChange={(evt) => {
                  setNewDescription(evt.target.value);
                }}
                value={newDescription}
                autoFocus
                onBlur={() => {
                  setDescriptionField(false);
                  if (newDescription.trim() !== '') {
                    handleUpdateDescription(newDescription, id);
                    dispatch(updateDescription(newDescription.trim()));
                  }
                }}
              />
            )}
          </div>
        </div>
      </Wrapper>

      <Popup
        open={imageModal}
        closeOnDocumentClick
        onClose={() => {
          setImageModal(false);
        }}
        contentStyle={{ width: '80%' }}
        overlayStyle={{ backdropFilter: 'blur(3px)' }}
        modal
      >
        <div className="image-popup">
          Choisir une nouvelle image :
          <div className="profile_image-edit">
            {pictures.map((img, name) => (
              <ProfileImage
                key={img.name}
                image={img.url}
                alt={`image de profil ${name}`}
                onClick={() => {
                  setSelectedImage(img.url);
                  setSelectedImageName(img.name);
                }}
                value={img.name}
              />
            ))}
          </div>
          <div className="profile_image-selected">
            {selectedImage && (
              <ProfileImage
                image={selectedImage}
                alt="Image sélectionnée"
                value={image}
                name="image"
              />
            )}
          </div>
          <button
            type="button"
            className="button-primary"
            onClick={() => handleUpdateImage(selectedImageName, id)}
          >
            Modifier
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default Profile;

ProfileImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
