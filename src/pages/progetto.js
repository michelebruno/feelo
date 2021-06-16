import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Download from '../components/Download';

function TeamMember({ nome, ruolo, image }) {
  return (
    <div className="text-center">
      <div className="rounded-50">
        <GatsbyImage alt={`Ritratto di ${nome}`} image={getImage(image)} />
      </div>
      <strong className="d-block">{nome}</strong>
      <span className="d-block">{ruolo}</span>

    </div>
  );
}

export default function Progetto() {
  return (
    <Layout page="progetto">
      <header className="container">
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
      </header>
      <div className="container pt-xl-5">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8 text-center ">
            <h2 className="">Il team</h2>
          </div>
        </div>
      </div>
      <Download />
    </Layout>
  );
}
