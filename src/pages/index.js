import { graphql, Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Modal, ModalBody } from 'reactstrap';
import { PlayIcon } from '@fluentui/react-icons-mdl2';
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
  // useEffect(() => {
  //   gsap.to('#filo_svg__animami', {
  //     drawSvg: '10%',
  //   });
  // }, []);

  const [activeSlide, setActiveSlide] = useState(0);
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <Layout fixedHeader hideFooter>
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-12">
            <Swiper
              className="home-slider position-relative gx-2"
              pagination
              direction="vertical"
              mousewheel
              parallax
              onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
              speed={1000}
              data-active-slide={activeSlide}
            >
              <Filo slot="wrapper-start" />
              <SwiperSlide>
                <div className="container d-flex align-items-center hero-section">
                  <div className="row align-items-center">
                    <div id="home-landing-image" data-swiper-parallax-opacity={0}>
                      <GatsbyImage alt="Immagini" image={getImage(landing)} />
                    </div>
                    <div className="col-12 col-lg-5">
                      <h1 className="display-3 handwritten">Ritrovarsi è una conquista!</h1>
                      <p className="lead py-2">
                        Feelo è l’app pensata per affrontare i disturbi alimentari insieme a chi ti
                        vuol bene.
                      </p>
                      <div>
                        <a href="#download" className="btn btn-primary me-1 mb-1">Scarica Feelo</a>
                        <Link to="/scopri" className="btn btn-outline-primary me-1 mb-1">
                          Scopri
                          cos'è
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <section className="container d-flex align-items-center hero-section">
                  <div className="row text-center justify-content-center">
                    <div className="col-12">
                      <h2 className="handwritten h1" data-swiper-parallax-y="-15%">
                        Ciao, io sono
                        Feelo
                      </h2>
                    </div>
                    <div className="col-12 col-lg-8">
                      <p className="lead">
                        Vi mostrerò come il lavoro di squadra possa rivelarsi una strategia vincente
                        per imparare a sostenersi a vicenda durante il trattamento di un disturbo
                        dell’alimentazione.
                      </p>
                    </div>
                    <div className="col-12 col-lg-8">

                      <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%' }}>
                        <iframe
                          src="https://player.vimeo.com/video/531964255?title=0&byline=0"
                          style={{
                            position: 'absolute', left: 0, top: 0, width: '100%', height: '100%',
                          }}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <script src="https://player.vimeo.com/api/player.js" />
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide className="">
                <section
                  className="container hero-section text-center"
                  data-swiper-parallax-y="-15%"
                >
                  <div className="row align-items-center justify-content-center w-100">
                    <div className="col-12 col-lg-6">
                      <h2 className="handwritten h1">Ecco cosa ti propongo</h2>
                      <p className="lead" data-swiper-parallax-opacity="0">
                        Il mio percorso segue i principi della terapia cognitivo comportamentale o
                        CBT, attualmente considerata a livello internazionale una dei modelli più
                        efficaci per la comprensione dei disturbi psicopatologici.
                      </p>
                    </div>
                  </div>
                </section>
                <div className="home-mockup" id="home-mockup-1" data-swiper-parallax="10%">
                  <GatsbyImage alt="Mockup" image={getImage(mockups[0])} />
                </div>
                <div className="home-mockup" id="home-mockup-2" data-swiper-parallax="-20%">
                  <GatsbyImage alt="Mockup" image={getImage(mockups[1])} />
                </div>
                <div className="home-mockup" id="home-mockup-3" data-swiper-parallax="-30%">
                  <GatsbyImage alt="Mockup" image={getImage(mockups[0])} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <section className="container hero-section">
                  <div className="row">
                    <div className="col-12 col-lg-6 offset-lg-1">
                      <h2>Pensata per chi soffre di disturbi alimentari...</h2>
                      <p>Il periodo che stai affrontando è difficile, fatto di alti e bassi. Ti aiuterò ad affrontare questa situazione supportandoti in ogni momento. </p>
                    </div>
                    <div className="col-5 text-center" style={{ minHeight: '25vh' }}>
                      <a href="#" className="btn btn-outline-primary">Perché farti aiutare?</a>
                    </div>
                  </div>
                  <div className="row flex-lg-row-reverse">
                    <div className="col-12 col-lg-6 offset-lg-1">
                      <h2>...e per i Feeler</h2>
                      <p>Che sia un familiare o un amico, il feeler è colui che la persona affetta da disturbi alimentari sente vicina. Ti aiuterò a comprenderla e sostenerla durante le sue giornate!</p>
                    </div>
                    <div className="col-5 text-center" style={{ minHeight: '25vh' }}>
                      <a href="#" className="btn btn-outline-primary">Perché diventare Feeler?</a>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide className="">
                <section className="container hero-section ">
                  <div className="row">
                    <div className="col-12">
                      <h2>Scarica l’app</h2>
                    </div>
                    <div className="col-6">
                      <p className="lead">Scarica Feelo e iniziamo il nostro percorso insieme. </p>
                      <p>
                        <GooglePlayButton />
                        <PlayStoreButton />
                      </p>
                    </div>
                  </div>
                  <div id="home-download-image">
                    <GatsbyImage alt={'Scarica l\'app'} image={getImage(download)} />
                  </div>

                  <footer className="container text-light">
                    <div className="row text-uppercase text-light">
                      <div className="col-12 col-lg-auto">
                        F, IG,
                      </div>
                      <div className="col-12 col-lg-auto">
                        <a
                          className="link-text "
                        >
                          Termini e condizioni
                        </a>
                      </div>
                    </div>
                  </footer>
                </section>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Modal isOpen={modal} toggle={toggleModal} centered>
          <ModalBody className="p-0">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%' }}>
              <iframe
                src="https://player.vimeo.com/video/531964255?title=0&byline=0"
                style={{
                  position: 'absolute', left: 0, top: 0, width: '100%', height: '100%',
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
            <div className="position-absolute w-100 text-center p-1">
              <button className="btn btn-text" onClick={toggleModal}>Close</button>
            </div>
          </ModalBody>
        </Modal>
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
