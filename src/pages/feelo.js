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
    'Ti guiderò attività di mindfulness quotidiane per liberare la mente da pensieri nocivi.', ,
    'Coinvolgerò te e i tuoi Feeler in attività condivise, per riflettere insieme sulla vostra relazione.',
    'Mi prenderò cura del tuo umore, con attività che ti aiutino  a gestire le tue emozioni e le tue relazioni.',
    'Se avrai bisogno di supporto in un momento particolare della giornata potrai sempre rivolgerti a me, scrivendomi un messaggio nella chat.',
    'In ogni momento potrai consultare l’andamento del tuo percorso sull’app e l’evoluzione delle relazioni con i tuoi Feeler.',
  ];
  return (
    <Layout>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center"><h1 className="handwritten">Come posso aiutarti?</h1></div>
          <div className="col-8 offset-md-2">
            <p className="lead text-center">
              Sappiamo che chi soffre di Disturbi alimentari, come anoressia, bulimia e binge eating
              disorder, ha bisogno di sentirsi compreso e supportato. Questo può avvenire grazie a una relazione
              efficace con chi gli sta a fianco affinchè si senta accompagnato in questo percorso.
            </p>
            <p>
              <a href="#download" className="btn btn-primary ">Scarica Feelo</a>
              <a href="#perché" className="btn btn-link">Cos’è un disturbo alimentare?</a>
            </p>
          </div>
          <div className="col-12 text-center">
            <h2>Per chi è pensato Feelo?</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-6">
              <h3>Per chi soffre di disturbi alimentari</h3>
              <p>
                Se soffri di un disturbo alimentare Feelo sa che il periodo che stai affrontando è difficile, fatto
                di alti e bass. Feelo conosce questi stati d’animo e ti aiuta ad affrontarli con serenità
                supportandoti ogni giorno.
              </p>
            </div>
            <div className="col-6">
              <Swiper pagination autoplay slidesPerView={1} loop>
                {featureGiulia.map((t) => (
                  <SwiperSlide key={t}>
                    <div className="position-relative">
                      <GatsbyImage alt="Ti guiderò" image={getImage(scopriGiulia1)} />
                      <p className="lead position-absolute handwritten text-center" style={{ bottom: 35 }}>
                        {t}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="row align-items-center flex-lg-row-reverse">
            <div className="col-6">
              <h3>Per i feeler</h3>
              <p>
                Se soffri di un disturbo alimentare Feelo sa che il periodo che stai affrontando è difficile, fatto
                di alti e bass. Feelo conosce questi stati d’animo e ti aiuta ad affrontarli con serenità
                supportandoti ogni giorno.
              </p>
            </div>
            <div className="col-6">
              <Swiper pagination autoplay slidesPerView={1} loop>
                {featureFeeler.map((t) => (
                  <SwiperSlide key={t}>
                    <div className="position-relative">
                      <GatsbyImage alt="Ti guiderò" image={getImage(scopriGiulia1)} />
                      <p className="lead position-absolute handwritten text-center" style={{ bottom: 35 }}>
                        {t}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Perchè nasce Feelo?</h2>
            </div>
            <div className="col-10">
              <p>
                I Disturbi del Comportamento Alimentare sono patologie complesse, determinate da condizioni di disagio
                psichico ed emotivo e richiedono un trattamento specifico.
              </p>
              <p>
                Il 2020 a causa del Covid-19 ha visto un aumento del 30% delle rihieste di supporto. Feelo nasce
                dall’idea che sia necessario un sostegno che accompagni laddove i medici non possono essere presenti.
              </p>
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
