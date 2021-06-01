import { graphql, Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Modal, ModalBody } from 'reactstrap';
import { PlayIcon } from '@fluentui/react-icons-mdl2';
import { ReactComponent as Filo } from '../images/filo.svg';
import Layout from '../components/Layout';
import Download, { GooglePlayButton, PlayStoreButton } from '../components/Download';

export default function Home({ data: { home: { nodes: homeImages } } }) {
  // useEffect(() => {
  //   gsap.to('#filo_svg__animami', {
  //     drawSvg: '10%',
  //   });
  // }, []);

  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <Layout fixedHeader hideFooter>
      <div className="container-fluid px-0">
        <Modal isOpen={modal} toggle={toggleModal} centered>
          <ModalBody className="p-0">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%' }}>
              <iframe
                src="https://player.vimeo.com/video/554150656?title=0&byline=0"
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

        <div className="row g-0">
          <div className="col-12">
            <Swiper
              className="home-slider position-relative gx-2"
              pagination
              direction="vertical"
              mousewheel
              parallax
              speed={1000}
            >
              <Filo slot="wrapper-start" />
              <SwiperSlide>
                <div className="container d-flex align-items-center hero-section">
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-5">
                      <h1 className="display-3 handwritten">Ascolta le emozioni!</h1>
                      <p className="lead py-4">
                        Riflettere su se stessi e con gli altri non è mai un’impresa facile, per
                        questo Feelo è
                        qui per aiutarti!
                      </p>
                      <div>
                        <a href="#download" className="btn btn-primary me-1 mb-1">Scarica Feelo</a>
                        <Link to="/scopri" className="btn btn-outline-primary me-1 mb-1">Scopri cos'è</Link>
                      </div>
                    </div>
                    <div className="col-12 col-lg">
                      <GatsbyImage alt="Immagini" image={getImage(homeImages[0])} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <section className="container d-flex align-items-center  hero-section">
                  <div className="row text-center justify-content-center">
                    <div className="col-12">
                      <h2 className="handwritten h1">Ciao, io sono Feelo</h2>
                    </div>
                    <div className="col-12 col-lg-8">
                      <p className="lead">
                        Attraverso attività e riflessioni appositamente pensate per sostenere te e i
                        tuoi cari
                        emotivamente durante
                        il percorso terapeutico, ti mostrerò come il lavoro
                        di squadra possa essere una strategia vincente!
                      </p>
                    </div>

                    <div className="home-mockup" id="home-mockup-1" data-swiper-parallax="10%">
                      <GatsbyImage alt="Mockup" image={getImage(homeImages[1])} />
                    </div>
                    <div className="home-mockup" id="home-mockup-2" data-swiper-parallax="-20%">
                      <GatsbyImage alt="Mockup" image={getImage(homeImages[1])} />
                    </div>
                    <div className="home-mockup" id="home-mockup-3" data-swiper-parallax="-30%">
                      <GatsbyImage alt="Mockup" image={getImage(homeImages[1])} />
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="container hero-section text-center">
                  <div className="row align-items-center w-100">
                    <div className="col-12">
                      <h2 className="handwritten h1">Ecco cosa ti propongo</h2>
                      <p className="lead">
                        Premi play e inizieremo una riflessione guidata che potrà esserti utile per
                        iniziare a
                        conoscerci.
                      </p>
                      <p className="text-right">
                        <button onClick={toggleModal} className="btn btn-outline-primary">
                          Inizia l'attività
                          <PlayIcon />
                        </button>
                      </p>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="container hero-section">
                  <div className="row">
                    <div className="col-12 col-lg-7">
                      <div className="testimonianza">
                        <p>Sofia</p>
                        <p className="h4">
                          Feelo mi ha aiutata molto, c’è sempre qualche attività che risponde ai
                          miei
                          bisogni.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 offset-lg-5">
                      <div className="testimonianza">
                        <p>Giulia</p>
                        <p className="h4">
                          Bellissima app, la consiglio a tutti quelli che soffrono di disturbi
                          alimentari. “Feelo mi ha
                          aiutata molto, c’è sempre qualche attività che risponde ai miei bisogni.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="testimonianza">
                        <p>Maria</p>
                        <p className="h4">
                          Fantastica, finalmente riesco a parlare con mia figlia senza doverci
                          litigare sempre!
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="container hero-section ">
                  <div className="row">
                    <div className="col-12">
                      <h2>Download</h2>
                    </div>
                    <div className="col-6">
                      <p className="lead">Hey, siamo su play store!</p>
                      <p>
                        <GooglePlayButton />
                        <PlayStoreButton />
                      </p>
                    </div>
                  </div>

                  <footer className="container text-light">
                    <div className="row text-uppercase text-light">
                      <div className="col-12 col-lg-auto">
                        F, IG,
                      </div>
                      <div className="col-12 col-lg-auto">
                        <a
                          href
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

      </div>
    </Layout>
  );
}

export const query = graphql`{
  home: allFile(
    sort: {fields: [relativePath]}
    filter: {relativePath: {regex: "/home(.*)/"}
    }) {
    nodes {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
        )
      }
    }
  }
}`;
