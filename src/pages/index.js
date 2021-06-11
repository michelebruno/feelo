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
          <div className="col-12" />
        </div>
        <Download />
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
