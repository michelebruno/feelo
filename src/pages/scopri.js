import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import {
  Chat24Filled, Chat24Regular,
  Home24Filled,
  TaskListLtr24Filled,
  TaskListLtr24Regular,
} from '@fluentui/react-icons';
import Layout from '../components/Layout';
import Download from '../components/Download';

function Features({ features, sfondo }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const swiper = useRef();

  return (
    <div className="feature-wrapper row">
      <div className="col-3 d-flex flex-column justify-content-center">
        <ul className="list-unstyled">
          {
            features.map(({ label, icon }, index) => (
              <li
                onClick={() => swiper.current.slideTo(index + 1)}
                className={classNames('d-flex small py-1 justify-content-end feature-list-item', {
                  active: activeSlide === index,
                })}
                key={label}
              >
                <span className="px-1">{label}</span>
                <span>{icon}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="col-7 offset-lg-1 align-self-stretch position-relative">
        <div className="features-backgroud" slot="container-start">
          <GatsbyImage alt="Sfondo" image={getImage(sfondo)} />
        </div>
        <Swiper
          loop
          autoplay
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={(s) => swiper.current = s}
          onSlideChange={({ activeIndex }) => setActiveSlide(
            activeIndex < 6 ? activeIndex - 1 : activeIndex - 6,
          )}
        >
          {features.map(({ image, label }) => (
            <SwiperSlide key={label}>
              <GatsbyImage
                alt={'Mockup dell\'applicazione'}
                image={getImage(image)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default function Feelo({
  data: {
    sfondoVerde, sfondoRosa, persone, feeler: { nodes: feelerImages }, giulia,
  },
}) {
  const featureFeeler = [
    'Ti suggerirò un aggiornamento costante sulla situazione emotiva del tuo caro, consigliandoti in ogni situazione come stargli accanto.',
    'Coinvolgerò te e i tuoi Feeler in attività condivise, per riflettere insieme sulla vostra relazione.',
    'Coinvolgerò te e il tuo caro in attività condivise, per imparare a gestire le vostre emozioni e la vostra relazione.',
    'Ti proporrò una raccolta di articoli e contenuti informativi, per fornirti maggiori conoscenze sulla tematica e imparare a relazionarti con persone che ne soffrono.',
    'Ti suggerirò un aggiornamento costante sulla situazione emotiva del tuo caro, consigliandoti in ogni situazione come stargli accanto.',
  ];

  const featureGiulia = [
    { image: giulia.nodes[4], label: 'Home', icon: <Home24Filled /> },
    { image: giulia.nodes[0], label: 'Attività', icon: <TaskListLtr24Regular /> },
    { image: giulia.nodes[2], label: 'Diario', icon: 'Home' },
    { image: giulia.nodes[1], label: 'Chat', icon: <Chat24Regular /> },
    {
      image: giulia.nodes[3],
      label: 'Feelo',
      icon: <Home24Filled />,
    },
  ];
  return (
    <Layout>

      <div className="container">
        <header className="row page-header align-items-center">
          <div className="col-12 col-lg-6">
            <h1>
              Al centro la persona,
              non il disturbo
            </h1>
            <p className="lead ">
              Con contenuti dedicati, supporto le persone che soffrono di Disturbi Alimentari e i
              propri cari, spostando il focus dalla malattia ai pensieri positivi, con l’obiettivo
              di
              {' '}
              <strong>costruire un dialogo verso un percorso di guarigione</strong>
              .
            </p>
          </div>
          <div className="col-6">
            <GatsbyImage alt="Persone illustrate" image={getImage(persone)} />
          </div>
        </header>
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-12 col-lg-1" />
          <div className="col-12 col-lg-4 offset-lg-1">
            <h2>A chi si trova al centro della tempesta...</h2>
            <p>
              Riscopri le tue potenzialità attraverso riflessioni e attività introspettive e
              coltiva le tue relazioni grazie alle
              {' '}
              <b>attività condivise</b>
              . Feelo sarà l’amico che sarà sempre accanto a te e terrà traccia dei tuoi progressi.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <Features features={featureGiulia} sfondo={sfondoRosa} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 offset-lg-1 align-items-center">
            <h2>...ai feeler che arrivano in soccorso</h2>
            <p>
              Feelo ti aiuterà a comprendere al meglio gli aspetti del disturbo alimentare, tenendo
              traccia degli avanzamenti del tuo caro, che potrai supportare grazie al dialogo
              costruttivo in cui ti guiderà.
            </p>
          </div>
        </div>
      </div>
      <Download hug />
    </Layout>
  );
}

export const query = graphql`{
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
  persone: file(relativePath: {eq: "persone.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
  feeler : allFile(filter: {relativePath: {regex: "/scopri-feeler-(.*)/i"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
        )
      }
    }
  }
  giulia: allFile(
    filter: {relativePath: {regex: "/giulia-(.*)/i"}, sourceInstanceName: {eq: "mockups"}}
    sort: {fields: [relativePath], order: ASC}
  ) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }

}`;
