import { graphql, Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

export default function Feelo({ data: { scopriGiulia1 } }) {
  const featureFeeler = [
    'Ti suggerirò un aggiornamento costante sulla situazione emotiva del tuo caro, consigliandoti in ogni situazione come stargli accanto.',
    'Coinvolgerò te e i tuoi Feeler in attività condivise, per riflettere insieme sulla vostra relazione.',
    'Coinvolgerò te e il tuo caro in attività condivise, per imparare a gestire le vostre emozioni e la vostra relazione.',
    'Ti proporrò una raccolta di articoli e contenuti informativi, per fornirti maggiori conoscenze sulla tematica e imparare a relazionarti con persone che ne soffrono.',
    'Ti suggerirò un aggiornamento costante sulla situazione emotiva del tuo caro, consigliandoti in ogni situazione come stargli accanto.',
  ];

  const featureGiulia = [
    'Ti guiderò attività di mindfulness quotidiane per liberare la mente da pensieri nocivi.',
    'Coinvolgerò te e i tuoi Feeler in attività condivise, per riflettere insieme sulla vostra relazione.',
    'Mi prenderò cura del tuo umore, con attività che ti aiutino  a gestire le tue emozioni e le tue relazioni.',
    'Se avrai bisogno di supporto in un momento particolare della giornata potrai sempre rivolgerti a me, scrivendomi un messaggio nella chat.',
    'In ogni momento potrai consultare l’andamento del tuo percorso sull’app e l’evoluzione delle relazioni con i tuoi Feeler.',
  ];
  return (
    <Layout>

      <div className="container">
        <header className="row justify-content-center page-header">
          <div className="col-12 text-center">
            <h1 className="handwritten">Come posso aiutarti?</h1>
          </div>
          <div className="col-12 col-lg-8">
            <p className="lead text-center">
              Sappiamo che chi soffre di Disturbi alimentari, come anoressia, bulimia e binge eating
              disorder, ha bisogno di sentirsi compreso e supportato. Questo può avvenire grazie a
              una relazione
              efficace con chi gli sta a fianco affinchè si senta accompagnato in questo percorso.
            </p>
            <p>
              <a href="#download" className="btn btn-primary ">Scarica Feelo</a>
              <a href="#perché" className="btn btn-link">Cos’è un disturbo alimentare?</a>
            </p>
          </div>
        </header>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2>Per chi è pensato Feelo?</h2>
          </div>
          <div
            className="row align-items-center justify-content-center bg-white rounded-3 py-3 my-3 shadow"
          >
            <div className="col-12 col-lg-4">
              <h3>Per chi soffre di disturbi alimentari</h3>
              <p>
                Se soffri di un disturbo alimentare Feelo sa che il periodo che stai affrontando è
                difficile, fatto di alti e bass. Feelo conosce questi stati d’animo e ti aiuta ad
                affrontarli con serenità supportandoti ogni giorno.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <Swiper pagination autoplay slidesPerView={1} loop>
                {featureGiulia.map((t) => (
                  <SwiperSlide key={t}>
                    <div className="position-relative">
                      <GatsbyImage alt="Ti guiderò" image={getImage(scopriGiulia1)} />
                      <p
                        className="lead position-absolute handwritten text-center"
                        style={{ bottom: 35 }}
                      >
                        {t}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div
            className="row align-items-center justify-content-center flex-lg-row-reverse bg-white rounded-3 py-3 my-3 shadow"
          >
            <div className="col-12 col-lg-4">
              <h3>Per i feeler</h3>
              <p>
                Se soffri di un disturbo alimentare Feelo sa che il periodo che stai affrontando è
                difficile, fatto
                di alti e bass. Feelo conosce questi stati d’animo e ti aiuta ad affrontarli con
                serenità
                supportandoti ogni giorno.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <Swiper pagination autoplay slidesPerView={1} loop>
                {featureFeeler.map((t) => (
                  <SwiperSlide key={t}>
                    <div className="position-relative">
                      <GatsbyImage alt="Ti guiderò" image={getImage(scopriGiulia1)} />
                      <p
                        className="lead position-absolute handwritten text-center"
                        style={{ bottom: 35 }}
                      >
                        {t}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="text-center">Perchè nasce Feelo?</h2>
              </div>
              <div className="col-12 col-lg-10">
                <p>
                  I Disturbi del Comportamento Alimentare sono patologie complesse, determinate da
                  condizioni di disagio
                  psichico ed emotivo e richiedono un trattamento specifico.
                </p>
                <p>
                  Il 2020 a causa del Covid-19 ha visto un aumento del 30% delle rihieste di
                  supporto. Feelo nasce
                  dall’idea che sia necessario un sostegno che accompagni laddove i medici non
                  possono essere presenti.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-3 why-card text-center">
                  <GatsbyImage alt="Perchè 1" image={getImage(scopriGiulia1)} />
                  <h3>
                    Le cause più diffuse
                  </h3>
                  <p>
                    I timori per la propria salute, le dispense piene di cibo, la carenza di
                    relazioni
                    sociali, l’impossibilità di reperire cure adeguate e di svolgere attività fisica
                    hanno favorito la diffusione dei disturbi alimentari.
                  </p>
                </div>
                <div className="col-12 col-lg-3 why-card text-center">
                  <GatsbyImage alt="Perchè 1" image={getImage(scopriGiulia1)} />
                  <h3>
                    Il peso dell’isolamento
                  </h3>
                  <p>
                    L’isolamento durante il lockdown nazionale ha portato a situazioni di convivenza
                    forzata, influendo negativamente sugli equilibri familiari con ripercussioni
                    sulla malattia.
                  </p>
                </div>
                <div className="col-12 col-lg-3 why-card text-center">
                  <GatsbyImage alt="Perchè 1" image={getImage(scopriGiulia1)} />
                  <h3>
                    Il ruolo dei familiari
                  </h3>
                  <p>
                    La famiglia svolge un ruolo fondamentale nell’ambito dei Disturbi Alimentari
                    avendo la funzione di ago della bilancia nell’andamneto di queste dinamiche.

                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`{
  scopriGiulia1: file(relativePath: {eq: "scopri-giulia-1.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
}`;
