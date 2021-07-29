import { graphql, Link } from 'gatsby';
import {
  GatsbyImage, getImage, getSrc, getSrcSet, StaticImage,
} from 'gatsby-plugin-image';
import Fade from 'react-reveal/Fade';
import { ReactComponent as FiloHero } from '../images/filo-hero.svg';
import { ReactComponent as FiloHeroOver } from '../images/filo-hero-over.svg';
import { ReactComponent as FiloGiulia } from '../images/filo-giulia-home.svg';
import { ReactComponent as FiloFeeler } from '../images/filo-home-feeler.svg';
import Layout from '../components/Layout';
import Download from '../components/Download';
import ClippedSection from '../components/ClippedSection';

export default function Home({
  data: {
    sedutoVerde,
    sedutoRosa,
    sfondoVerde,
    sfondoRosa,
    farfalla,
    avatarRosa,
    doppioAvatar, propongoAttivita,
    propongoFeelo,
  },
}) {
  return (
    <Layout page="home">
      <div className="row gx-0">
        <div className="col-12">
          <ClippedSection dontClip justifyCenter>
            <Fade>
              <div
                className="col-12 col-xl-7 text-center pt-2 pt-lg-4 pb-3 pb-lg-5  "
                style={{ opacity: 0 }}
              >
                <h1 className="text-primary fw-bold" id="home-title">Ciao, io sono Feelo</h1>
                <p className="lead">
                  L’app pensata per affrontare i
                  {' '}
                  <strong className="fw-bold">Disturbi Alimentari</strong>
                  <wbr />
                  <br />
                  {' '}
                  insieme a chi ti
                  vuole bene.
                </p>
                <p className="pb-2">
                  <button
                    onClick={() => document.getElementById('download').scrollIntoView()}
                    className="btn btn-primary position-relative"
                    style={{ zIndex: 999 }}
                  >
                    Scarica Feelo
                  </button>
                </p>
              </div>
            </Fade>
            <div className="col-xl-10 d-flex" id="hero-image-wrapper">
              <FiloHero />
              <div id="home-seduto-rosa" className="position-relative">
                <picture
                  className="img-fluid"
                >
                  {getImage(sedutoRosa).images.sources.map(({ sizes, srcSet, type }) => <source type={type} srcSet={srcSet} sizes={sizes} key={type} />)}
                  <img
                    className="img-fluid"
                    alt="Seduto rosa"
                    src={getSrc(sedutoRosa)}
                    srcSet={getSrcSet(sedutoRosa)}
                    width={getImage(sedutoRosa)?.width}
                    height={getImage(sedutoRosa)?.height}
                  />
                </picture>
              </div>
              <div id="home-seduto-verde" className=" mb-n2 mb-lg-0">
                <picture
                  className="img-fluid"
                >
                  {getImage(sedutoVerde).images.sources.map(({ sizes, srcSet, type }) => <source type={type} srcSet={srcSet} sizes={sizes} key={type} />)}
                  <img
                    className="img-fluid"
                    alt="Seduto verde"
                    src={getSrc(sedutoVerde)}
                    srcSet={getSrcSet(sedutoVerde)}
                    width={getImage(sedutoVerde)?.width}
                    height={getImage(sedutoVerde)?.height}
                  />
                </picture>
              </div>
              <FiloHeroOver />
            </div>
          </ClippedSection>
          <ClippedSection className="gradient2 clip10 cosapropongosection">

            <div
              className="col-12 col-lg-5 col-xl-4 offset-xl-1 pb-5 pb-lg-0 pb-xl-5 d-flex flex-column justify-content-center"
            >
              <Fade bottom>
                <h2 className="mt-x-3">Ecco cosa propongo</h2>
                <p className="lead mb-3 mb-lg-5">
                  Vi mostrerò come il lavoro di squadra possa rivelarsi una strategia vincente per
                  {' '}
                  <strong>imparare a sostenersi a vicenda</strong>
                  {' '}
                  durante il trattamento di un Disturbo
                  dell’Alimentazione.
                </p>
              </Fade>
            </div>

            <div
              className="col-12 col-lg-7 col-xl-6 offset-xl-1 align-self-stretch py-9 py-lg-10 py-xl-0 mt-n1"
              id="home-propongo-wrapper"
            >
              <div>
                <Fade bottom>
                  <div id="home-propongo-verde">
                    <img
                      className="img-fluid"
                      src={getSrc(sfondoVerde)}
                      srcSet={getSrcSet(sfondoVerde)}
                      alt="Sfondo"
                    />
                  </div>
                  <div id="home-propongo-rosa">
                    <img
                      className="img-fluid"
                      src={getSrc(sfondoRosa)}
                      srcSet={getSrcSet(sfondoRosa)}
                      alt="Sfondo"
                    />
                  </div>
                  <div id="home-propongo-feelo">
                    <img
                      className="img-fluid"
                      src={getSrc(propongoFeelo)}
                      srcSet={getSrcSet(propongoFeelo)}
                      alt="Sfondo"
                    />
                  </div>
                  <div id="home-propongo-attivita">
                    <img
                      className="img-fluid"
                      src={getSrc(propongoAttivita)}
                      srcSet={getSrcSet(propongoAttivita)}
                      alt="Sfondo"
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </ClippedSection>
          <ClippedSection
            reverse
            className="gradient1 clip01 overflow-hidden"
            innerClassName="mb-xl-1"
          >
            <div className="col-12 col-xl-1" />
            <Fade bottom>

              <div className="col-12 col-lg-5 offset-lg-1 col-xl-4 pb-xl-5">
                <h2>Per chi soffre di disturbi alimentari...</h2>
                <p className="lead">
                  Esiste una stretta relazione tra pensieri, emozioni e comportamenti per questo
                  {' '}
                  <strong>
                    ti guiderò nella scoperta di te stesso per affrontare le tue paure
                  </strong>
                  .
                </p>
                <Link className="btn btn-outline-primary d-inline-flex" to="/scopri">
                  Cos’è un disturbo alimentare?
                  <i className="ms-1 fluent-icons-filled-24 d-none d-lg-inline">arrow_right</i>
                </Link>
              </div>
            </Fade>
            <div
              className="col-12 col-lg-6 px-lg-2 position-xl-absolute"
              id="home-avatarRosa"
            >
              <div className="position-relative w-100 h-100">
                <div id="farfalla-giulia">
                  <GatsbyImage alt="Farfalla che vola" image={getImage(farfalla)} />
                </div>
                <FiloGiulia id="filo-giulia" />
                <GatsbyImage alt="Avatar rosa" image={getImage(avatarRosa)} />
              </div>
            </div>
          </ClippedSection>
          <ClippedSection
            className="gradient2 clip10 overflow-hidden"
            innerClassName="align-items-stretch"
          >
            <Fade bottom>
              <div className="col-12 col-lg-5 col-xl-4 offset-xl-1 pb-xl-5">
                <h2>...e per coloro che gli vogliono bene</h2>
                <p className="lead">
                  Il mio supporto si fonda sulla
                  {' '}
                  <strong>terapia cognitivo comportamentale</strong>
                  {' '}
                  che promuove le
                  relazioni e il dialogo.
                </p>
              </div>
            </Fade>
            <div
              className="col-12 col-lg-7 col-xl-6 offset-xl-1 position-lg-absolute mb-n3 mb-xl-0"
              id="home-doppioavatar"
            >
              <div className="position-relative w-100 h-100">
                <FiloFeeler id="filo-feeler" />
                <GatsbyImage
                  alt="Due avatar che si incontrano"
                  objectPosition="right top"
                  objectFit="scale-down"
                  image={getImage(doppioAvatar)}
                />
              </div>
            </div>
          </ClippedSection>
          <ClippedSection className="gradient1 pt-3 pt-xl-5" vimeo>
            <div className="col-12 py-xl-5">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/564375010?title=0&byline=0"
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js" />
            </div>
          </ClippedSection>
          <Download doesntCover={false} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`{
  mockups: allFile(
    sort: {fields: [relativePath]}
    filter: {relativePath: {regex: "/home-screenshot(.*)/"}
    }) {
    nodes {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
        )
      }
    }
  }
  doppioAvatar: file(relativePath: {eq: "doppioavatar.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 1000
      )
    }
  }
  sedutoRosa: file(relativePath: {eq: "omino_seduto_rosa.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 800
        quality: 100
      )
    }
  }
  sedutoVerde: file(relativePath: {eq: "omino_seduto_verde.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 800
        quality: 100
      )
    }
  }
  avatarRosa: file(relativePath: {eq: "avatar-rosa.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
      )
    }
  }
  landing: file(relativePath: {eq: "home-landing.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
      )
    }
  }
  proposta: file(relativePath: {eq: "home-proposta.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
      )
    }
  }
  farfalla: file(relativePath: {eq: "farfalla.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 300
      )
    }
  }
  sfondoRosa: file(relativePath: {eq: "sfondo-rosa.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 500
        quality: 40
      )
    }
  }
  sfondoVerde: file(relativePath: {eq: "sfondo-verde.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 500
        quality: 40
      )
    }
  }
  propongoAttivita: file(relativePath: {eq: "giulia-home.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 1000
      )
    }
  }
  propongoFeelo: file(relativePath: {eq: "feeler-home.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 1000
      )
    }
  }

}`;
