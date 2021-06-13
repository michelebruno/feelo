import { graphql, Link } from 'gatsby';
import { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import { ReactComponent as FiloHero } from '../images/filo-hero.svg';
import { ReactComponent as FiloHeroOver } from '../images/filo-hero-over.svg';
import Layout from '../components/Layout';
import Download from '../components/Download';
import ClippedSection from '../components/ClippedSection';

export default function Home({
  data: {
    sedutoVerde,
    sedutoRosa,
    sfondoVerde,
    sfondoRosa,
    avatarRosa,
    doppioAvatar, propongoAttivita,
    propongoFeelo,
    mockups: { nodes: mockups },
  },
}) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <Layout>
      <div className="row gradient3 gx-0">
        <div className="col-12">
          <ClippedSection dontClip justifyCenter>
            <div className="col-12 col-lg-6  text-center pt-5 pb-5">
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
              <p>
                <button
                  onClick={() => document.getElementById('download').scrollIntoView()}
                  className="btn btn-primary position-relative"
                  style={{ zIndex: 999 }}
                >
                  Scarica
                  Feelo
                </button>
              </p>
            </div>
            <div className="col-10 d-flex" id="hero-image-wrapper">
              <FiloHero />
              <div id="home-seduto-rosa">
                <GatsbyImage alt="Seduto verde" image={getImage(sedutoRosa)} />
              </div>
              <div id="home-seduto-verde">
                <GatsbyImage alt="Seduto verde" image={getImage(sedutoVerde)} />
              </div>
              <FiloHeroOver />

            </div>
          </ClippedSection>
          <ClippedSection className="gradient2 clip10">
            <div className="col-12 col-lg-4 pb-5 offset-lg-1">
              <h2 className="mb-3">Ecco cosa propongo</h2>
              <p className="lead mb-3">
                Vi mostrerò come il lavoro di squadra possa rivelarsi una strategia vincente per
                {' '}
                <strong>imparare a sostenersi a vicenda</strong>
                {' '}
                durante il trattamento di un Disturbo
                dell’Alimentazione.
              </p>
            </div>
            <div className="col-12 col-lg position-relative" id="home-propongo-wrapper">
              <div id="home-propongo-verde">
                <GatsbyImage alt="Sfondo" image={getImage(sfondoVerde)} />
              </div>
              <div id="home-propongo-rosa">
                <GatsbyImage alt="Sfondo" image={getImage(sfondoRosa)} />
              </div>
              <div id="home-propongo-feelo">
                <GatsbyImage alt="Sfondo" image={getImage(propongoFeelo)} />
              </div>
              <div id="home-propongo-attivita">
                <GatsbyImage alt="Sfondo" image={getImage(propongoAttivita)} />
              </div>
            </div>
          </ClippedSection>
          <ClippedSection reverse className=" gradient1 clip01">
            <div className="col-12 col-lg-1" />
            <div className="col-12 col-lg-4 offset-lg-1">
              <h2>Per chi soffre di disturbi alimentari...</h2>
              <p className="lead">
                Esiste una stretta relazione tra pensieri, emozioni e comportamenti per questo
                {' '}
                <strong>
                  ti
                  guiderò nella scoperta di te stesso per affrontare le tue paure
                </strong>
                .
              </p>
              <Link className="btn btn-outline-primary" to="/scopri">
                Cos’è un disturbo alimentare?
              </Link>
            </div>
            <div className="col-12 col-lg-5" id="home-avatarRosa">
              <GatsbyImage alt="Avatar rosa" image={getImage(avatarRosa)} />
            </div>
          </ClippedSection>
          <ClippedSection className="gradient2 clip10">
            <div className="col-12 col-lg-4 offset-lg-1 pb-4">
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
            <div className="col-12 col-lg-7" id="home-doppioavatar">
              <GatsbyImage
                alt="Due avatar che si incontrano"
                objectPosition="right top"
                objectFit="scale-down"
                image={getImage(doppioAvatar)}
              />
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
          layout: FULL_WIDTH
        )
      }
    }
  }
  doppioAvatar: file(relativePath: {eq: "doppioavatar.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  sedutoRosa: file(relativePath: {eq: "omino_seduto_rosa.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  sedutoVerde: file(relativePath: {eq: "omino_seduto_verde.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  avatarRosa: file(relativePath: {eq: "avatar-rosa.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  landing: file(relativePath: {eq: "home-landing.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  proposta: file(relativePath: {eq: "home-proposta.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  download: file(relativePath: {eq: "home-download.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }

  sfondoRosa: file(relativePath: {eq: "sfondo-rosa.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  sfondoVerde: file(relativePath: {eq: "sfondo-verde.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  propongoAttivita: file(relativePath: {eq: "giulia-attivita.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  propongoFeelo: file(relativePath: {eq: "giulia-feelo.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }

}`;
