import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

/**
 * Footer component.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-contact">
          <Link to="/qui-sommes-nous">
            <button type="button" className="button-footer">
              Qui sommes-nous ?
            </button>
          </Link>
        </div>

        <div className="footer-mentions">
          <Link to="/mentions-legales">
            <button type="button" className="button-footer">
              Mentions légales
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
