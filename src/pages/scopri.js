import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from 'classnames';
import { useRef, useState } from 'react';
import {
  Book24Filled, Book24Regular,
  Chat24Filled, Chat24Regular,
  DocumentCopy24Filled, DocumentCopy24Regular,
  Home24Filled, Home24Regular,
  TaskListSquareLtr24Filled, TaskListSquareLtr24Regular,
} from '@fluentui/react-icons';
import { ReactComponent as FiloPeopleOver } from '../images/people-filo-over.svg';
import { ReactComponent as FiloPeople } from '../images/people-filo-completo.svg';
import Layout from '../components/Layout';
import Download from '../components/Download';
import { ReactComponent as FiloDownload } from '../images/filo-download.svg';
import { ReactComponent as FeeloChat } from '../images/feelo-chaticon.svg';
import { ReactComponent as FeeloChatFilled } from '../images/feelo-chaticon-filled.svg';

function Features({ features, sfondo, reverse }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const swiper = useRef();

  return (
    <div className={classNames('feature-wrapper row justify-content-center', { 'flex-row-reverse': !reverse })}>
      <div className="col-12 col-xl-9 align-self-stretch position-relative featurer-slider-wrapper">
        <div className="features-backgroud" slot="container-start">
          <GatsbyImage alt="Sfondo" image={getImage(sfondo)} />
        </div>

        <Swiper
          className="mx-auto"
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
      <div className="col-10 col-xl-3 d-flex flex-column justify-content-center align-content-center mt-n3 mt-0 position-relative" style={{ zIndex: 10 }}>
        <ul className=" d-flex justify-content-between list-unstyled flex-row flex-lg-column">
          {
            features.map(({ label, icon, iconActive }, index) => (
              <li
                onClick={() => swiper.current.slideTo(index + 1)}
                className={classNames('d-flex flex-column-reverse flex-lg-row small py-2 justify-content-end feature-list-item position-relative ', {
                  active: activeSlide === index,
                  'flex-xl-row-reverse': reverse,
                })}
                key={label}
              >
                <span className={classNames('px-2 py-1 py-xl-0 d-xl-inline feature-label')}>{label}</span>
                <span className="feature-icon">{activeSlide === index ? iconActive : icon}</span>
              </li>
            ))
          }
        </ul>
        {/* <h6 className="d-lg-none text-center text-white mb-0 "> */}
        {/*  {features[activeSlide].label} */}
        {/* </h6> */}
      </div>
    </div>
  );
}

export default function Feelo({
  data: {
    sfondoVerde,
    sfondoRosa,
    persone,
    feeler,
    giulia,
  },
}) {
  const featureGiulia = [
    {
      image: giulia.nodes[4], label: 'Home', icon: <Home24Regular />, iconActive: <Home24Filled />,
    },
    {
      image: giulia.nodes[0],
      label: 'Attività',
      icon: <TaskListSquareLtr24Regular />,
      iconActive: <TaskListSquareLtr24Filled />,
    },
    {
      image: giulia.nodes[3],
      label: 'Feelo',
      icon: <FeeloChat height={24} width={24} />,
      iconActive: <FeeloChatFilled height={24} width={24} />,
    },
    {
      image: giulia.nodes[2], label: 'Diario', icon: <Book24Regular />, iconActive: <Book24Filled />,
    },
    {
      image: giulia.nodes[1], label: 'Chat', icon: <Chat24Regular />, iconActive: <Chat24Filled />,
    },
  ];

  const featureFeeler = [
    {
      image: feeler.nodes[3], label: 'Home', icon: <Home24Regular />, iconActive: <Home24Filled />,
    },
    {
      image: feeler.nodes[0],
      label: 'Attività',
      icon: <TaskListSquareLtr24Regular />,
      iconActive: <TaskListSquareLtr24Filled />,
    },
    {
      image: feeler.nodes[4],
      label: 'Informazioni',
      icon: <DocumentCopy24Regular />,
      iconActive: <DocumentCopy24Filled />,
    },
    {
      image: feeler.nodes[2], label: 'Diario', icon: <Book24Regular />, iconActive: <Book24Filled />,
    },
    {
      image: feeler.nodes[1], label: 'Chat', icon: <Chat24Regular />, iconActive: <Chat24Filled />,
    },
  ];
  return (
    <Layout page="scopri">

      <div className="container">
        <header className="row page-header">
          <div className="col-12 col-xl-6 heading-column">
            <h1>
              Al centro la persona,
              {' '}
              <wbr />
              <br />
              {' '}
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
          <div className="col-12 col-xl-6 px-2 ps-xl-5 pe-xl-0 position-relative mt-xl-n4">
            <FiloPeople className="filo-people" />
            <GatsbyImage alt="Persone illustrate" image={getImage(persone)} />
            {' '}
            <FiloPeopleOver className="filo-people" />

          </div>
        </header>
        <div className="row flex-xl-row-reverse align-items-center position-relative py-3 py-lg-0">
          <div className="col-12 col-xl-1" />
          <div className="col-12 col-xl-4 offset-xl-1">
            <h2>A chi si trova al centro della tempesta...</h2>
            <p className="lead">
              Riscopri le tue potenzialità attraverso riflessioni e attività introspettive e
              coltiva le tue relazioni grazie alle
              {' '}
              <b>attività condivise</b>
              . Feelo sarà l’amico che sarà sempre accanto a te e terrà traccia dei tuoi progressi.
            </p>
          </div>
          <div className="col-12 col-xl-6">
            <Features features={featureGiulia} sfondo={sfondoRosa} />
          </div>
          <div className="col-12 col-xl-3 mx-auto">
            <FiloDownload id="filo-scopri" />
          </div>
        </div>
        <div className="row align-items-center  py-lg-0">
          <div className="col-12 col-xl-4 offset-xl-1 align-items-center">
            <h2>...ai feeler che arrivano in soccorso</h2>
            <p className="lead">
              Feelo ti aiuterà a comprendere al meglio gli aspetti del disturbo alimentare, tenendo
              traccia degli avanzamenti del tuo caro, che potrai supportare grazie al dialogo
              costruttivo in cui ti guiderà.
            </p>
          </div>
          <div className="col-12 col-xl-6 offset-xl-1">
            <Features features={featureFeeler} sfondo={sfondoVerde} reverse />
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
        layout: CONSTRAINED
      )
    }
  }
  sfondoVerde: file(relativePath: {eq: "sfondo-verde.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
      )
    }
  }
  persone: file(relativePath: {eq: "persone.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
      )
    }
  }
  feeler : allFile(
    filter: {relativePath: {regex: "/feeler-(.*)/i"}, sourceInstanceName: {eq: "mockups"}}
    sort: {fields: [relativePath], order: ASC}
  ) {
    nodes {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
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
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }

}`;