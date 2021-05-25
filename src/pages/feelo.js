import { Link } from 'gatsby';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import Layout from '../components/Layout';
import Card from '../components/Card';

SwiperCore.use([Pagination]);
export default function Feelo() {
  return (
    <Layout>

      <div className="container">
        <div className="row">
          <div className="col-12"><h1>Come posso aiutarti?</h1></div>
          <div className="col-8 offset-md-2">
            <p className="lead">
              Sappiamo che chi soffre di Disturbi alimentari, come anoressia, bulimia e binge eating
              disorder, ha bisogno di sentirsi compreso e supportato. Questo può avvenire grazie a una relazione
              efficace con chi gli sta a fianco affinchè si senta accompagnato in questo percorso.
            </p>

            <p>
              <a href="#download" className="btn btn-primary btn-lg">Scarica Feelo</a>
              <Link className="btn btn-link btn-lg ">Cos’è un disturbo alimentare?</Link>
            </p>
            <div className="col-12">
              <h2>Per chi è pensato Feelo?</h2>
              <Card>
                <div className="col-6">
                  <h3>Per chi soffre di disturbi alimentari</h3>
                  <p>
                    Se soffri di un disturbo alimentare Feelo sa che il periodo che stai affrontando è difficile, fatto
                    di alti e bass. Feelo conosce questi stati d’animo e ti aiuta ad affrontarli con serenità
                    supportandoti ogni giorno.
                    {' '}
                  </p>
                </div>
                <div className="col-6">
                  <Swiper slidesPerView={1} loop>
                    <SwiperSlide>
                      Ti guiderò attività di mindfulness quotidiane per liberare la mente da pensieri
                      nocivi.
                    </SwiperSlide>
                    <SwiperSlide>
                      Coinvolgerò te e i tuoi Feeler in attività condivise, per riflettere insieme sulla vostra
                      relazione.
                    </SwiperSlide>
                    <SwiperSlide>
                      Mi prenderò cura del tuo umore, con attività che ti aiutino a gestire le tue emozioni e le tue
                      relazioni.
                    </SwiperSlide>
                    <SwiperSlide>
                      Se avrai bisogno di supporto in un momento particolare della giornata potrai sempre rivolgerti a
                      me, scrivendomi un messaggio nella chat.
                    </SwiperSlide>
                    <SwiperSlide>
                      In ogni momento potrai consultare l’andamento del tuo percorso sull’app e l’evoluzione delle
                      relazioni con i tuoi Feeler.
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
