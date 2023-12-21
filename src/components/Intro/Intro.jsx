import { Link } from 'react-router-dom';

import './Intro.scss';

import Wrapper from '../Wrapper/Wrapper';
import Card from '../Card/Card';

/**
 * Intro component.
 *
 * @returns {JSX.Element} The rendered Intro component.
 */
const Intro = () => {
  return (
    <Wrapper>
      <div className="intro">
        <div className="intro_top">
          <div className="intro_text">
            <h1 className="intro_title">O&#39;kemon</h1>
            <p>
              Bonjour et bienvenue sur notre site dédié aux cartes Pokémon !
            </p>
            <br />
            <p>
              Ici, vous pouvez ajouter votre collection de cartes et créer une
              wishlist pour les cartes que vous souhaitez acquérir.
            </p>
            <br />
            <p>
              Nous sommes ravis de vous accueillir et espérons que vous passerez
              un bon moment sur notre site. N’hésitez pas à nous contacter si
              vous avez des questions ou des commentaires. Merci de votre visite
              !
            </p>
          </div>

          <Card
            image="https://images.pokemontcg.io/swsh12pt5/160.png"
            name="pikachu"
            home
          />
        </div>
        <Link to="/cartes">
          <button type="button" className="button-primary">
            Collection complète
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Intro;
