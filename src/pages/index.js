import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ReactComponent as Filo } from '../images/filo.svg';
import Layout from '../components/Layout';
import Download from '../components/Download';

function Hero() {
  return (
    <div className="container d-flex align-items-center hero-section">
      <div className="row align-items-center">
        <div className="col-5">
          <h1 className="display-3 handwritten">Ascolta le emozioni!</h1>
          <p className="lead py-4">
            Riflettere su se stessi e con gli altri non è mai un’impresa facile, per questo Feelo è
            qui per aiutarti!
          </p>
          <div>
            <a href="#download" className="btn btn-primary btn-lg">Scarica Feelo</a>
            <Link to="/feelo" className="btn btn-link btn-lg ">Scopri cos'è</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    gsap.to('#filo_svg__animami', {
      drawSvg: '10%',
    });
  }, []);
  return (
    <Layout fixedHeader hideFooter>
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-12">

            <Swiper
              className="home-slider position-relative"
              pagination
              direction="vertical"
              mousewheel
            >
              <Filo slot="wrapper-start" className="position-absolute h-100 w-100" />
              <SwiperSlide>
                <Hero />
              </SwiperSlide>
              <SwiperSlide>
                <section className="container d-flex align-items-center hero-section">
                  <div className="row text-center">
                    <div className="col-12">
                      <h2 className="handwritten">Ciao, io sono feelo</h2>
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
                      <p className="text-right"><a className="btn btn-link">Scopri di più</a></p>
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
