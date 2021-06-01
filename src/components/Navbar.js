import { Link } from 'gatsby';

import { useState } from 'react';
import { ReactComponent as Logo } from '../images/logo-resp.svg';

export default function Navbar({ title, fixed }) {
  const [navbarStatus, setNavbarStatus] = useState(false);

  function openNavbar() {
    setNavbarStatus(true);
  }

  function closeNavbar() {
    setNavbarStatus(false);
  }

  return (
    <div className={`container ${fixed && 'fixed-header'}`}>
      <div
        className="row justify-content-between align-items-center py-2 navbar-collapse navbar-expand-md"
      >
        <div id="logo-container" className="col ">
          <Logo className="h-100" />
        </div>
        <button
          className="navbar-toggler col"
          type="button"
          onClick={openNavbar}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
          Open nav
        </button>
        <nav className={`col-auto collapse navbar-collapse justify-content-end ${navbarStatus
          ? 'show'
          : ''}`}
        >
          <Logo className="logo d-md-none" />
          <button className="close-button d-md-none" onClick={closeNavbar}>Close</button>
          <ul className="nav">
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/scopri">
                Scopri
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/contatti">
                Contatti
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#download" className="btn btn-primary">
                Download
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
