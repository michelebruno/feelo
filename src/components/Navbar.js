import { Link } from 'gatsby';

import { useState } from 'react';
import { navigate } from 'gatsby-link';
import classNames from 'classnames';
import { CalendarCancel20Filled, LineHorizontal320Filled } from '@fluentui/react-icons';
import { ReactComponent as Logo } from '../images/logo-resp.svg';

export default function Navbar({ title }) {
  const [navbarStatus, setNavbarStatus] = useState(false);

  function openNavbar() {
    setNavbarStatus(() => true);
  }

  function closeNavbar() {
    setNavbarStatus(() => false);
  }

  return (
    <div id="navbar-wrapper" className={classNames('container')}>
      <div
        className="row justify-content-between align-items-center py-2 navbar-collapse navbar-expand-md"
      >
        <div id="logo-container" className="col ">
          <Logo className="h-100 text-primary" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        </div>
        <div className="col-auto">
          <button
            className="navbar-toggler"
            type="button"
            onClick={openNavbar}
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <LineHorizontal320Filled />
          </button>
        </div>
        <nav className={`col-auto collapse navbar-collapse justify-content-end ${navbarStatus
          ? 'show'
          : ''}`}
        >
          <Logo className="logo d-md-none" />
          <div className="col-12 px-1 position-absolute d-md-none close-button-container">

            <button
              className="navbar-toggler btn-close"
              type="button"
              onClick={closeNavbar}
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/scopri/">
                Scopri
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/testimonianze/">
                Testimonianze
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/progetto/">
                Progetto
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/faq/">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#download"
                className="btn btn-outline-primary d-none d-lg-inline"
              >
                Download
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
