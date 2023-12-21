import { Linkedin } from 'react-feather';
import { Link } from 'react-router-dom';

import React from 'react';
import Wrapper from '../Wrapper/Wrapper';

import adam from '../../assets/developers-pictures/Adam.png';
import florian from '../../assets/developers-pictures/Florian.png';
import jean from '../../assets/developers-pictures/Jean.png';
import julien from '../../assets/developers-pictures/Julien.png';
import quentin from '../../assets/developers-pictures/Quentin.png';

import './AboutUs.scss';

const developers = [
  {
    name: 'Julien',
    image: julien,
    id: 44,
    role: 'Product Owner',
    linkedin: 'https://www.linkedin.com/in/julien-miano',
  },
  {
    name: 'Florian',
    image: florian,
    id: 36,
    role: 'Scrum Master',
    linkedin: 'https://www.linkedin.com/in/florian-jager47/',
  },
  { name: 'Jean', image: jean, id: 40, role: 'Git Master' },
  {
    name: 'Adam',
    image: adam,
    id: 35,
    role: 'Lead Frontend Developer',
    linkedin: 'https://www.linkedin.com/in/adammory/',
  },
  { name: 'Quentin', image: quentin, id: 34, role: 'Lead Backend Developer' },
];

/**
 * AboutUs component.
 *
 * @returns {JSX.Element} The rendered AboutUs component.
 */
const AboutUs = () => {
  return (
    <div className="about-us">
      <Wrapper size="95%">
        <div className="about-us_top">
          <div className="about-us_text">
            <h1 className="about-us_title">Qui sommes-nous ?</h1>
            <p>
              Bienvenue sur O&#39;kemon, le rendez-vous incontournable des
              collectionneurs de cartes Pokémon !
            </p>
            <br />
            <h2 className="about-us_subtitle">Notre histoire</h2>
            <p>
              Nous sommes une équipe de 5 développeurs web passionnés par
              l&#39;univers Pokémon. Nous avons décidé de créer ce site pour
              permettre aux collectionneurs de cartes Pokémon de gérer leur
              collection et de la partager avec d&#39;autres passionnés.
            </p>
            <br />
            <h2 className="about-us_subtitle">Notre mission</h2>
            <p>
              Chez O&#39;kemon, notre mission est de créer une communauté
              passionnée autour de la collection de cartes Pokémon. Nous offrons
              une plateforme conviviale où les amateurs de Pokémon peuvent
              partager, explorer et interagir avec des milliers de cartes de
              leur collection préférée.
            </p>
            <br />
            <h2 className="about-us_subtitle">Rejoignez la Communauté</h2>
            <p>
              Que vous soyez un collectionneur chevronné ou un nouvel adepte de
              l&#39;univers Pokémon, O&#39;kemon est l&#39;endroit idéal pour
              connecter, échanger et célébrer votre passion. Rejoignez-nous dès
              aujourd&#39;hui et plongez dans le monde magique des cartes
              Pokémon !
            </p>

            <h2 className="about-us_subtitle">Notre équipe</h2>
            <div className="developers-section">
              {developers.map((developer) => (
                <div className="developer-circle" key={developer.name}>
                  <Link
                    to={`/utilisateurs/${developer.id}`}
                    key={developer.id}
                    className="developer-circle"
                  >
                    <img
                      src={developer.image}
                      alt={` ${developer.name}, développeur O'kemon`}
                      className="developer-photo"
                    />
                    <p className="developer-name">{developer.name}</p>
                    <p className="developer-role">{developer.role}</p>
                  </Link>
                  {developer.linkedin && (
                    <a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="developer-linkedin"
                    >
                      <Linkedin />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AboutUs;
