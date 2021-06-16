import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from 'classnames';
import { useRef, useState } from 'react';
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
    <div className={classNames('feature-wrapper row justify-content-center',
      { 'flex-row-reverse': !reverse })}
    >
      <div className="col-12 col-lg-9 align-self-stretch position-relative featurer-slider-wrapper">
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
      <div
        className="col-10 col-lg-3 d-flex flex-column justify-content-center align-content-center mt-n3 mt-0 position-relative"
        style={{ zIndex: 10 }}
      >
        <ul className=" d-flex justify-content-between list-unstyled flex-row flex-lg-column">
          {
            features.map(({ label, icon, iconActive }, index) => (
              <li
                onClick={() => swiper.current.slideTo(index + 1)}
                className={classNames(
                  'd-flex flex-column-reverse flex-lg-row small py-2 justify-content-end feature-list-item position-relative ',
                  {
                    active: activeSlide === index,
                    'flex-lg-row-reverse': reverse,
                  },
                )}
                key={label}
              >
                <span className={classNames(
                  'px-2 py-1 py-lg-0 d-lg-inline feature-label',
                )}
                >
                  {label}
                </span>
                <span className="feature-icon">
                  {typeof icon === 'string'
                    ? (
                      <i className={activeSlide === index
                        ? 'fluent-icons-filled-24'
                        : 'fluent-icons-regular-24'}
                      >
                        {icon}
                      </i>
                    )
                    : (activeSlide === index ? iconActive : icon)}
                </span>
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
      image: giulia.nodes[4], label: 'Home', icon: 'home',
    },
    {
      image: giulia.nodes[0],
      label: 'Attività',
      icon: 'task_list_square',
    },
    {
      image: giulia.nodes[3],
      label: 'Feelo',
      icon: <FeeloChat height={24} width={24} />,
      iconActive: <FeeloChatFilled height={24} width={24} />,
    },
    {
      image: giulia.nodes[2],
      label: 'Diario',
      icon: 'book',
    },
    {
      image: giulia.nodes[1],
      label: 'Chat',
      icon: 'chat',
    },
  ];

  const featureFeeler = [
    {
      image: feeler.nodes[3], label: 'Home', icon: 'home',
    },
    {
      image: feeler.nodes[0],
      label: 'Attività',
      icon: 'task_list_square',
    },
    {
      image: feeler.nodes[4],
      label: 'Informazioni',
      icon: 'document_copy',
    },
    {
      image: feeler.nodes[2],
      label: 'Diario',
      icon: 'book',
    },
    {
      image: feeler.nodes[1], label: 'Chat', icon: 'chat',
    },
  ];
  return (
    <Layout page="scopri">

      <div className="container gx-2">
        <header className="row page-header">
          <div className="col-12 col-lg-6 heading-column">
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
          <div className="col-12 col-lg px-2 ps-xl-5 pe-xl-0 position-relative mt-xl-n4">
            <FiloPeople className="filo-people" />
            <GatsbyImage alt="Persone illustrate" image={getImage(persone)} />
            {' '}
            <FiloPeopleOver className="filo-people" />

          </div>
        </header>
        <div className="row flex-lg-row-reverse align-items-center position-relative py-3 py-lg-0">
          <div className="col-12 col-xl-1" />
          <div className="col-12 col-lg-5 col-xl-4 offset-lg-1">
            <h2>A chi si trova al centro della tempesta...</h2>
            <p className="lead">
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
          <div className="col-12 col-lg-3 mx-auto">
            <FiloDownload id="filo-scopri" />
          </div>
        </div>
        <div className="row align-items-center py-lg-0">
          <div className="col-12 col-lg-5 col-xl-4 offset-xl-1">
            <h2>...ai feeler che arrivano in soccorso</h2>
            <p className="lead">
              Feelo ti aiuterà a comprendere al meglio gli aspetti del disturbo alimentare, tenendo
              traccia degli avanzamenti del tuo caro, che potrai supportare grazie al dialogo
              costruttivo in cui ti guiderà.
            </p>
          </div>
          <div className="col-12 col-lg-6">
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
        width: 500
        quality: 40
      )
    }
  }
  sfondoVerde: file(relativePath: {eq: "sfondo-verde.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 500
        quality: 40
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
