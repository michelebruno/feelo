import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ReactComponent as Filo } from '../images/filo.svg';
import Layout from '../components/Layout';
import Download from '../components/Download';

function Hero() {
  return (
    <div className="container d-flex align-items-center hero-section">
      <div className="row align-items-center">
        <div className="col-12 col-lg-5">
          <h1 className="display-3 handwritten">Ascolta le emozioni!</h1>
          <p className="lead py-4">
            Riflettere su se stessi e con gli altri non è mai un’impresa facile, per questo Feelo è
            qui per aiutarti!
          </p>
          <div>
            <a href="#download" className="btn btn-primary btn-lg">Scarica Feelo</a>
            <Link to="/scopri" className="btn btn-link btn-lg ">Scopri cos'è</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
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
        <div
          className={`modal fade ${modal && 'show d-block '}`}
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="w-100 text-end position-absolute">
                <button className="btn btn-link mt-n4 " onClick={toggleModal}>Close</button>
              </div>
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
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-12 gx-2">
            <Swiper
              className="home-slider position-relative"
              pagination
              direction="vertical"
              mousewheel
            >
              <Filo slot="wrapper-start" />
              <SwiperSlide>
                <Hero />
              </SwiperSlide>
              <SwiperSlide>
                <section className="container d-flex align-items-center hero-section">
                  <div className="row text-center">
                    <div className="col-12">
                      <h2 className="handwritten">Ciao, io sono Feelo</h2>
                    </div>
                    <div className="col-12 col-lg-10 offset-lg-1">
                      <p className="lead">
                        Attraverso attività e riflessioni appositamente pensate per sostenere te e i tuoi cari
                        emotivamente durante
                        il percorso terapeutico, ti mostrerò come il lavoro
                        di squadra possa essere una strategia vincente!
                      </p>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>
                <section className="container hero-section text-center">
                  <div className="row align-items-center w-100">
                    <div className="col-12">
                      <h2 className="handwritten">Ecco cosa ti propongo</h2>
                      <p className="lead">
                        Premi play e inizieremo una riflessione guidata che potrà esserti utile per iniziare a
                        conoscerci.
                      </p>
                      <p className="text-right">
                        <button onClick={toggleModal} className="btn btn-outline-primary">Inizia l'attività</button>
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
                          Feelo mi ha aiutata molto, c’è sempre qualche attività che risponde ai miei
                          bisogni.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7 offset-lg-5">
                      <div className="testimonianza">
                        <p>Giulia</p>
                        <p className="h4">
                          Bellissima app, la consiglio a tutti quelli che soffrono di disturbi alimentari. “Feelo mi ha
                          aiutata molto, c’è sempre qualche attività che risponde ai miei bisogni.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-7">
                      <div className="testimonianza">
                        <p>Maria</p>
                        <p className="h4">
                          Fantastica, finalmente riesco a parlare con mia figlia senza doverci litigare sempre!
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
              <SwiperSlide>

                <Download />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

      </div>
    </Layout>
  );
}
