/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-autofocus */
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

import './Profile.scss';

import Wrapper from '../Wrapper/Wrapper';

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

/**
 * User component.
 * @returns {JSX.Element} The rendered User component.
 */
const User = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${serverUrl}/api/utilisateurs/${slug}`);
      setData(response.data);
    };

    getUser();
  }, [slug]);

  if (!data) {
    return null;
  }

  const { nickname } = data.user;
  const { age } = data.user;
  const { country } = data.user;
  const { image } = data.user;
  const { catchphrase } = data.user;
  const { contact } = data.user;
  const { description } = data.user;
  const { 1: collectionAmount } = data.userCountCollection[0];
  const { 1: wishlistAmount } = data.userCountWishlist[0];

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

  return (
    <div className="profile">
      <Wrapper>
        <div className="profile-wrapper">
          <div className="profile-top">
            <button className="button-profile profile-field" type="button">
              <span className="profile-nickname">{nickname}</span>
            </button>

            <div className="profile-group">
              <button className="button-profile profile-field" type="button">
                {age !== null ? `${age} ans` : 'Age'}
              </button>

              <button className="button-profile profile-field" type="button">
                {country !== null ? country : 'Pays'}
              </button>
            </div>
            <div className="profile-group">
              <Link
                to={`/utilisateurs/${slug}/collection`}
                className="profile-group"
              >
                <button className="button-profile profile-field" type="button">
                  Collection ({collectionAmount})
                </button>
              </Link>
              <Link
                to={`/utilisateurs/${slug}/wishlist`}
                className="profile-group"
              >
                <button className="button-profile profile-field" type="button">
                  Wishlist ({wishlistAmount})
                </button>
              </Link>
            </div>
          </div>
          <p className="profile_catchphrase profile-field" type="button">
            {catchphrase !== null ? catchphrase : 'Catchphrase'}
          </p>

          <p className="profile_catchphrase profile-field" type="button">
            {contact !== null ? contact : 'Contact'}
          </p>

          <div className="profile-middle">
            <button className="profile_picture-frame button-none" type="button">
              <img
                src={profilePicture}
                alt={image}
                className="profile_picture"
              />
            </button>
            <div
              className="profile_description profile-field"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  description !== null
                    ? description.replace(/\n/g, '<br/>')
                    : 'Description'
                ),
              }}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default User;
