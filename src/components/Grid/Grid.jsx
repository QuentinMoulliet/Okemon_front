import './Grid.scss';
import PropTypes from 'prop-types';

import Wrapper from '../Wrapper/Wrapper';

import Card from '../Card/Card';

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
 * Grid component.
 * @param {Object} props - The props object.
 * @param {Array} props.list - The list of items to display.
 * @returns {JSX.Element} The rendered Grid component.
 */
const Grid = ({ list }) => {
  return (
    <Wrapper>
      <div className="grid">
        {list.map((item, index) => {
          const key =
            item.type === 'card'
              ? `${item.cardId}-${index}`
              : `${item.id}-${index}`;

          const id = item.type === 'card' ? item.cardId : item.id;

          const profilePictureChoice = item.image;
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

          if (item.type === 'user') {
            return (
              <span className="grid-item" key={key}>
                <Card
                  image={profilePicture}
                  name={item.nickname}
                  type={item.type}
                  id={id}
                />
              </span>
            );
          }
          return (
            <span className="grid-item" key={key}>
              <Card
                image={item.image}
                name={item.name}
                type={item.type}
                id={id}
              />
            </span>
          );
        })}
      </div>
    </Wrapper>
  );
};

Grid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  list: PropTypes.array.isRequired,
};

export default Grid;
