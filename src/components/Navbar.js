import { Link, navigate } from 'gatsby';

import { useState } from 'react';

import classNames from 'classnames';
import { ReactComponent as Logo } from '../images/logo-resp.svg';

export default function Navbar() {
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
        className="row justify-content-between align-items-center py-2 navbar-collapse navbar-expand-lg"
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
            <i className="fluent-icons-filled-24">line_horizontal</i>
          </button>
        </div>
        <nav className={`col-auto collapse navbar-collapse justify-content-end ${navbarStatus
          ? 'show'
          : ''}`}
        >
          <Logo className="logo d-lg-none" />
          <div className="col-12 px-1 position-absolute d-lg-none close-button-container">

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
              <a
                to="#download"
                className="btn btn-outline-primary d-none d-lg-inline-block"
              >
                Download
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
