import './LegalNotice.scss';

import Wrapper from '../Wrapper/Wrapper';

/**
 * LegalNotice component.
 *
 * @returns {JSX.Element} The rendered LegalNotice component.
 */
const LegalNotice = () => {
  return (
    <div className="legal-notice">
      <Wrapper size="95%">
        <div className="legal-notice_top">
          <div className="legal-notice_text">
            <h1 className="legal-notice_title">Mentions Légales</h1>
            <p className="legal-notice_date">En vigueur le 01/12/2023</p>
            <br />
            <p>
              Conformément aux dispositions des Articles 6-III et 19 de la Loi
              n&#39;2004-575 du 21 juin 2004 pour la Confiance dans l’économie
              numérique, dite L.C.E.N., il est porté à la connaissance des
              Utilisateurs du site o-kemon.surge.sh les présentes mentions
              légales. La connexion et la navigation sur le site (O&#39;kemon)
              par l’Utilisateur implique l&#39;acceptation intégrale et sans
              réserve des présentes mentions légales. Ces dernières sont
              accessibles sur le site à la rubrique « Mentions légales ».
            </p>
            <br />
            <h2 className="legal-notice_subtitle">ARTICLE 1 : L’éditeur</h2>
            <p>
              L&#39;éditeur du site est O&#39;kémon, dont le siège social est
              situé à 151 Boulevard du professeur Chen, 12345 - Bourg Palette.
              Pour toute correspondance ou question, veuillez nous contacter à
              l&#39;adresse électronique suivante : O-kemon@gmail.com.
            </p>
            <br />
            <h2 className="legal-notice_subtitle">ARTICLE 2 : L’hébergeur</h2>
            <p>
              L&#39;hébergeur du site est Surge . Pour toute question relative à
              l&#39;hébergement du site, veuillez contacter l&#39;hébergeur à
              l&#39;adresse suivante : Surge@gmail.com.
            </p>
            <br />
            <h2 className="legal-notice_subtitle">ARTICLE 3 : Accès au site</h2>
            <p>
              L&#39;accès au site est ouvert à tous les utilisateurs. Cependant,
              O&#39;kémon se réserve le droit de restreindre ou
              d&#39;interrompre l&#39;accès au site pour des raisons de
              maintenance ou pour toute autre raison jugée nécessaire.
            </p>
            <br />
            <h2 className="legal-notice_subtitle">
              ARTICLE 4 : Collecte des données
            </h2>
            <p>
              O&#39;kémon collecte des données conformément à la réglementation
              en vigueur. Les informations recueillies sont destinées à un usage
              interne et ne seront en aucun cas cédées à des tiers. Les
              utilisateurs ont le droit d&#39;accéder, de rectifier ou de
              supprimer leurs données en contactant O-kemon@gmail.com.
            </p>
            <br />
            <h2 className="legal-notice_subtitle">
              ARTICLE 5 : Cookies et statistiques
            </h2>
            <p>
              Notre site utilise des cookies à des fins statistiques. Les
              utilisateurs peuvent accepter ou refuser l&#39;utilisation de
              cookies lors de leur première visite sur le site. Les données
              statistiques collectées sont utilisées à des fins d&#39;analyse et
              d&#39;amélioration de l&#39;expérience utilisateur.
            </p>
            <br />
            <h2 className="legal-notice_subtitle">ARTICLE 6 : Propriété</h2>
            <p>
              O&#39;kémon est propriétaire exclusif du contenu du site, y
              compris les textes, images, et autres éléments. Toute reproduction
              ou utilisation non autorisée du contenu est strictement interdite.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default LegalNotice;
