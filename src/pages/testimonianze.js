import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Download from '../components/Download';

function Testimonianza({ nome, children }) {
  return (
    <div className="row g-3 bg-white rounded-2 shadow">
      <div className="col-12">
        <div className="row">
          <div className="col-3">Aer</div>
          <div className="col">{nome}</div>
        </div>
      </div>
      <div className="col">
        <p className="lead">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function Testimonianze({ data: { forchetta } }) {
  const testimonianze = [
    {
      nome: 'Olivia',
      body: <>
        Incontrerai sempre persone che cercheranno di sminuire i tuoi successi. Cerca di non essere
        tu il primo a farlo perché a volte un vincitore è semplicemente un sognatore che non ha mai
        mollato.Ad oggi posso dire di essere orgogliosa di me stessa!
      </>,
    },
    {
      nome: 'Clarabella',
      body: <>
        Ci vuole tempo, ma il segreto che ho imparato con Feelo è che bisogna dare un significato
        diverso per noi stessi. Il cibo ho imparato ad associarlo all'unione, alla famiglia, ad un
        té con un’amica, a qualcuno che amo... E spesso quel qualcuno, grazie a questo cambio di
        visione, sono diventata io!
      </>,
    },
    {
      nome: 'Sofia',
      body: <>
        Ho sofferto di anoressia e bulimia, ci sono ricaduta ben due volte nella mia vita.
        Ho capito che conto più io che questa malattia, ma alle volte crollo anche io, ma provo a
        lottare e mi rialzo. Grazie a Feelo! Lui mi ha aiutato molto a pensarci meno, anche se ho
        ancora paura di ricaderci definitivamente.
      </>,
    },
    {
      nome: 'Clarabella',
      body: <>
        Ho sofferto di anoressia e bulimia, ci sono ricaduta ben due volte nella mia vita.
        Ho capito che conto più io che questa malattia, ma alle volte crollo anche io, ma provo a
        lottare e mi rialzo. Grazie a Feelo! Lui mi ha aiutato molto a pensarci meno, anche se ho
        ancora paura di ricaderci definitivamente.
      </>,
    },
    {
      nome: 'Orietta',
      body: <>
        Sapete qual è la scelta più difficile che io abbia mai fatto ma della quale non mi sono mai
        pentita? L’aver deciso di farmi aiutare. La verità è che, nonostante il cammino sia stato
        lungo e non sempre in discesa, quando iniziai ad intravedere la bellezza e i sorrisi,
        ricominciai a respirare aria pura, che sapeva di vita e decisi che non sarei mai più tornata
        indietro.
      </>,
    },
  ];

  return (
    <Layout>
      <header className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            <h1>Che cos’è un disturbo alimentare?</h1>
            <p className="lead">
              I Disturbi del Comportamento Alimentare sono patologie complesse,
              determinate da condizioni di disagio psicologico ed emotivo, che quindi richiedono un
              trattamento sia del problema alimentare in sé che della sua natura psichica.
            </p>
          </div>
          <div className="col-5">
            <GatsbyImage alt="Illustrazione che rappresenta il disturbo alimentare" image={getImage(forchetta)} />
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col offset-lg-1">
            <h2>Le testimonianze</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row flex-nowrap gx-4 py-4  ps-1 overflow-scroll">
          {testimonianze.map(({ nome, body }) => (
            <div key={nome} className="col-4 h-100">
              <Testimonianza nome={nome}>{body}</Testimonianza>
            </div>
          ))}
        </div>
      </div>
      <Download />
    </Layout>
  );
}

export const query = graphql`{
  forchetta: file(relativePath: {eq: "forchetta.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
      )
    }
  }
}`;
