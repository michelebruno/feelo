import { Link } from 'gatsby';
import { ReactComponent as AtIcon } from '../images/at-sign.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook.svg';
import { ReactComponent as TwitterIcon } from '../images/twitter.svg';
import { ReactComponent as IgIcon } from '../images/instagram.svg';
import { GooglePlayButton, PlayStoreButton } from './Download';

export default function Footer() {
  return (
    <footer className="container-fluid mt-3 bg-primary text-white">
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row">
              <div className="row justify-content-between small text-dark py-1">
                <div className="col-3">
                  <Link to="/">Home</Link>
                  <Link to="/">Scopri</Link>
                </div>
                <div className="col-auto">
                  <h6 className="text-white">Condizioni</h6>

                </div>
                <div className="col-3">
                  <h6 className="text-white">Download App</h6>
                </div>
                <div className="col-3">
                  <h6 className="text-white">Contatti</h6>
                </div>
              </div>
              <div className="w-100 border-bottom border-white" />
              <div className="col-12">
                <p className="small">
                  Feelo Europe S.A. | Via Giuseppe Candiani, 72 20138 Milano |
                  VAT LU30726739 | società del gruppo Feelo S.p.A
                </p>
                <p className="small">
                  Ⓒ 2021 Feelo. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
