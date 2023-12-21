import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Ladder.scss';

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

async function getLadder() {
  const response = await axios.get(`${serverUrl}/api/classement`);
  return response.data;
}

/**
 * Ladder component.
 * @returns {JSX.Element} The rendered Ladder component.
 */
const Ladder = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getLadder().then((ladderData) => setData(ladderData));
  }, []);

  return (
    <Wrapper>
      <h2 className="section_title">
        Classement des meilleurs collectionneurs
      </h2>
      <div className="ladder-table-container">
        <table className="ladder-table">
          <thead>
            <tr>
              <th className="ladder-table-header">#</th>
              <th className="ladder-table-header">Photo de profil</th>
              <th className="ladder-table-header">Pseudo</th>
              <th className="ladder-table-header">Nombre de cartes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rankingNumber) => {
              const profilePictureChoice = row.image;
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
                <tr key={row.id} className="ladder-table-row">
                  <td className="ladder-table-data">{rankingNumber + 1}</td>
                  <td className="ladder-table-data">
                    <Link to={`/utilisateurs/${row.id}`}>
                      <img
                        src={profilePicture}
                        alt="Profil"
                        className="ladder-table-avatar"
                      />
                    </Link>
                  </td>
                  <td className="ladder-table-data">
                    <span className="ladder-table-data-element">
                      <Link to={`/utilisateurs/${row.id}`}>{row.nickname}</Link>
                    </span>
                  </td>
                  <td className="ladder-table-data">
                    <span className="ladder-table-data-element">
                      <Link to={`/utilisateurs/${row.id}/collection`}>
                        {row.card_number}
                      </Link>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Ladder;
