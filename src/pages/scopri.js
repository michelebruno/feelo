import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Download from '../components/Download';

export default function Feelo({ data: { scopriGiulia1, feeler: { nodes: feelerImages } } }) {
  const featureFeeler = [
    'Ti suggerirò un aggiornamento costante sulla situazione emotiva del tuo caro, consigliandoti in ogni situazione come stargli accanto.',
    'Coinvolgerò te e i tuoi Feeler in attività condivise, per riflettere insieme sulla vostra relazione.',
    'Coinvolgerò te e il tuo caro in attività condivise, per imparare a gestire le vostre emozioni e la vostra relazione.',
    'Ti proporrò una raccolta di articoli e contenuti informativi, per fornirti maggiori conoscenze sulla tematica e imparare a relazionarti con persone che ne soffrono.',
    'Ti suggerirò un aggiornamento costante sulla situazione emotiva del tuo caro, consigliandoti in ogni situazione come stargli accanto.',
  ];

  const featureGiulia = [
    { image: scopriGiulia1, label: 'Home', icon: 'Home' },
  ];
  return (
    <Layout>

      <div className="container">
        <header className="row page-header">
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
        </header>
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-12 col-lg-4 offset-lg-2">
            <h2>A chi si trova al centro della tempesta...</h2>
            <p>
              Riscopri le tue potenzialità attraverso riflessioni e attività introspettive e
              coltiva le tue relazioni grazie alle
              {' '}
              <b>attività condivise</b>
              . Feelo sarà l’amico che sarà sempre accanto a te e terrà traccia dei tuoi progressi.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 align-items-center">
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
  scopriGiulia1: file(relativePath: {eq: "scopri-giulia-1.png"}) {
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
}`;
