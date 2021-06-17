import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Fade from 'react-reveal/Fade';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Download from '../components/Download';

function TeamMember({ nome, ruolo, image }) {
  return (
    <div className="text-center team-member d-flex flex-column align-items-center">
      <div className="rounded-3 mb-1" style={{ overflow: 'hidden' }}>
        <GatsbyImage alt={`Ritratto di ${nome}`} image={getImage(image)} />
      </div>
      <strong className="d-block h6 mb-0 text-center " style={{ whiteSpace: 'nowrap' }}>{nome}</strong>
      <span className="d-block" style={{ lineHeight: 1 }}>{ruolo}</span>
    </div>
  );
}

export default function Progetto({ data: { pics } }) {
  const team = [
    { nome: 'Maria Celeste Casolino', ruolo: 'CEO', image: pics.nodes[3] },
    { nome: 'Carmine Russo', ruolo: 'Customer Care', image: pics.nodes[2] },
    { nome: 'Arianna Priori', ruolo: 'Marketing', image: pics.nodes[0] },
    { nome: 'Michele Bruno', ruolo: 'Tech', image: pics.nodes[5] },
    { nome: 'Virginia Leccisotti', ruolo: 'Medico specialista in scienze dell’alimentazione', image: pics.nodes[6] },
    { nome: 'Barbara Roncalli', ruolo: 'Counselor familiare', image: pics.nodes[1] },
    { nome: 'Gresi Balliu', ruolo: 'Educatore', image: pics.nodes[4] },
  ];
  return (
    <Layout page="progetto">
      <header className="container gx-2">
        <Fade>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-6 text-center heading-column">
              <h1>Perché nasce Feelo?</h1>
              <p className="lead">
                L’app Feelo è stata realizzata al fine di supportare coloro che
                soffrono di disturbi alimentari e coloro che gli stanno vicini. L’app interviene dal
                punto di vista psicologico come strumento di affiancamento alla terapia cognitivo
                comportamentale, favorendo il dialogo e la relazione.
              </p>
            </div>
          </div>
        </Fade>
      </header>
      <div className="container pt-3 pt-xl-5 gx-2">
        <div className="row justify-content-center">
          <Fade>
            <div className="col-12 col-xl-8 text-center ">
              <h2 className="">Il team</h2>
            </div>
          </Fade>
          <div className="col-12 col-xl-8">
            <div className="row justify-content-center row-cols-2 row-cols-lg-4 gy-2">
              {team.map(({ image, nome, ruolo }) => (
                <div className="col">
                  <TeamMember image={image} nome={nome} ruolo={ruolo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Download />
    </Layout>
  );
}
export const query = graphql`{
  pics: allFile(
    filter: {relativePath: {regex: "/team_(.*)/i"}}
    sort: {fields: [relativePath], order: ASC}
  ) {
    nodes {
      relativePath
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 400
           quality: 90
        )
      }
    }
  }
}`;
