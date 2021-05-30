import { Link } from 'gatsby';

import { ReactComponent as Logo } from '../images/logo-resp.svg';

export default function Navbar({ title, fixed }) {
  return (
    <div className={`container ${fixed && 'fixed-header'}`}>

      <div className="row justify-content-between align-items-center py-3">
        <div id="logo-container" className="col ">
          <Logo className="h-100" />
        </div>
        <nav className="col-auto">
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
