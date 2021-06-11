import { graphql, Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Modal, ModalBody } from 'reactstrap';
import { PlayIcon } from '@fluentui/react-icons-mdl2';
import classNames from 'classnames';
import { ReactComponent as Filo } from '../images/filo.svg';
import { ReactComponent as Quote } from '../images/quote.svg';
import Layout from '../components/Layout';
import Download, { GooglePlayButton, PlayStoreButton } from '../components/Download';

function Testimonianza({
  nome, image, children, className, ...props
}) {
  return (
    <div className={`row align-items-center gx-1 py-1 ${className}`} {...props}>
      <div className="col-3">
        <Quote style={{ position: 'absolute', zIndex: 8, left: -10 }} />
        <div className="thumbnail" style={{ borderRadius: '50%', overflow: 'hidden' }}>
          <GatsbyImage alt={`Foto di ${nome}`} image={getImage(image)} />
        </div>
      </div>
      <div className="col">
        <p className="small mb-0">{nome}</p>
        <p className="lead fw-bold">{children}</p>
      </div>
    </div>
  );
}

function Hero({ className, children, reverse }) {
  return (
    <div className={classNames('container-fluid hero ', className)}>
      <div className="row g-2">
        <div className="col-12">
          <div className="container">
            <div className={classNames('row ', {
              'flex-lg-row-reverse': reverse,
            })}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home({
  data: {
    sofia,
    maria,
    giulia,
    download,
    proposta,
    landing,
    mockups: { nodes: mockups },
  },
}) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <Layout fixedHeader hideFooter>
      <div className="container-fluid px-0 gx-0 py-5 gradient3">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row g-0">
                <div className="col-12 text-center">
                  <h1 className="text-primary">Ciao, io sono Feelo</h1>
                  <p className="lead">
                    L’app pensata per affrontare i disturbi alimentari insieme a chi ti
                    vuole bene.
                  </p>
                  <p>
                    <button className="btn btn-lg btn-primary">Scarica Feelo</button>
                  </p>
                </div>
              </div>
            </div>
            <Hero className="gradient2 clip10">
              <div className="col-12 col-lg-6">
                <h2>Ecco cosa propongo</h2>
                <p className="lead">
                  Vi mostrerò come il lavoro di squadra possa rivelarsi una strategia vincente per
                  imparare a sostenersi a vicenda durante il trattamento di un disturbo
                  dell’alimentazione.
                </p>
              </div>
            </Hero>

            <Hero reverse className=" gradient1 clip01">
              <div className="col-12 col-lg-6">
                <h2>Per chi soffre di disturbi alimentari...</h2>
                <p className="lead">
                  Esiste una stretta relazione tra pensieri, emozioni e comportamenti per questo ti
                  guiderò nella scoperta di te stesso per affrontare le tue paure.
                </p>
              </div>
            </Hero>
            <Hero className="gradient2 clip10">
              <div className="col-12 col-lg-6">
                <h2>...e per coloro che gli vogliono bene</h2>
                <p className="lead">
                  Il mio supporto si fonda sulla terapia cognitivo comportamentale che promuove le
                  relazioni e il dialogo.
                </p>
              </div>
            </Hero>
          </div>
        </div>
      </div>
      <Download />
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
  sofia: file(relativePath: {eq: "home-testimonianze-sofia.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  maria: file(relativePath: {eq: "home-testimonianze-maria.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  giulia: file(relativePath: {eq: "home-testimonianze-giulia.png"}) {
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

}`;
