import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Footer() {
  const { logo } = useStaticQuery(graphql`{
    logo: file(relativePath: {eq: "favicon.png"}) {
      childImageSharp{
        gatsbyImageData(
          layout: CONSTRAINED
        )
      }
    }
  }`);
  return (
    <footer className="container-fluid pt-3 pb-2 bg-primary text-white">
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row">
              <div className="row row-cols-2 row-cols-lg-4 justify-content-between text-dark py-1 align-items-end align-items-lg-start">
                <div className="col mt-n2">
                  <span className="text-white d-block mb-1" style={{ width: '3em' }}><GatsbyImage image={getImage(logo)} alt="Logo di Feelo" /></span>
                  <ul className="list-unstyled text-light small">
                    <li><Link to="/" className="link-light h6">Home</Link></li>
                    <li><Link to="/scopri/" className="link-light h6">Scopri</Link></li>
                  </ul>

                </div>
                <div className="col">
                  <h6 className="text-white mb-0">Condizioni</h6>
                  <ul className="list-unstyled text-light small">
                    <li>Privacy Policy</li>
                  </ul>

                </div>
                <div className="col">
                  <h6 className="text-white mb-0">Download App</h6>
                  <ul className="list-unstyled text-light small">
                    <li>Scarica per iPhone</li>
                    <li>Scarica per Android</li>
                  </ul>
                </div>
                <div className="col">
                  <h6 className="text-white mb-0">Contatti</h6>
                  <ul className="list-unstyled text-light small">
                    <li>Supporto</li>
                    <li>info@feelo.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="w-100 border-bottom border-white" />
              </div>

              <div className="col py-1" style={{ fontSize: '0.8em', lineHeight: 1 }}>
                <p className="">
                  Feelo Europe S.A. | Via Giuseppe Candiani, 72 20138 Milano |
                  VAT LU30726739 | società del gruppo Feelo S.p.A
                </p>
                <p className="">
                  Ⓒ 2021 Feelo. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/wazybr/fluentui-system-icons-font/webfonts/css/fluent-icons-regular-24.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/wazybr/fluentui-system-icons-font/webfonts/css/fluent-icons-filled-24.css" />

    </footer>
  );
}
