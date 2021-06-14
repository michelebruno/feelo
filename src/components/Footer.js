import { Link } from 'gatsby';
import { ReactComponent as InstagramIcon } from
  '../images/instagram.svg';

export default function Footer() {
  return (
    <footer className="container-fluid py-2 bg-primary text-white">
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row">
              <div className="row justify-content-between text-dark py-1">
                <div className="col-3">
                  <Link to="/">Home</Link>
                  <Link to="/">Scopri</Link>
                </div>
                <div className="col-3">
                  <h6 className="text-white">Condizioni</h6>
                  <ul className="list-unstyled text-light small">
                    <li>Privacy Policy</li>
                  </ul>

                </div>
                <div className="col-3">
                  <h6 className="text-white">Download App</h6>
                  <ul className="list-unstyled text-light small">
                    <li>Scarica per iPhone</li>
                    <li>Scarica per Android</li>
                  </ul>
                </div>
                <div className="col-3">
                  <h6 className="text-white">Contatti</h6>
                  <ul className="list-unstyled text-light small">
                    <li>Supporto</li>
                    <li>info@feelo.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="w-100 border-bottom border-white" />
              </div>

              <div className="col-11 py-1" style={{ fontSize: '0.8em', lineHeight: 1 }}>
                <p className="">
                  Feelo Europe S.A. | Via Giuseppe Candiani, 72 20138 Milano |
                  VAT LU30726739 | società del gruppo Feelo S.p.A
                </p>
                <p className="">
                  Ⓒ 2021 Feelo. All Rights Reserved.
                </p>
              </div>
              <div className="col-1 ">
                <span className="p-1 m-1 bg-white rounded-3 w-auto shadow d-inline-block">
                  <InstagramIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
