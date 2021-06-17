import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/Layout';
import Download from '../components/Download';
import Testimonianza from '../components/Testimonianza';

export default function Testimonianze({ data: { forchetta } }) {
  const testimonianze = [
    {
      nome: 'Olivia',
      body: <>
        Incontrerai sempre persone che cercheranno di sminuire i tuoi successi. Cerca di non essere
        tu il primo a farlo perché a volte un vincitore è semplicemente un sognatore che non ha mai
        mollato. Ad oggi posso dire di essere orgogliosa di me stessa!
      </>,
    },
    {
      nome: 'Clarabella',
      body: <>
        Ci vuole tempo, ma il segreto che ho imparato con Feelo è che bisogna dare un significato
        diverso per noi stessi. Il cibo ho imparato ad associarlo all'unione, alla famiglia, ad un
        té con un’amica, a qualcuno che amo... E quel qualcuno, grazie a questo cambio di
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
    <Layout page="testimonianze">
      <header className="container gx-2">

        <div className="row justify-content-between">
          <Fade left>
            <div className="col-12 col-lg-6 heading-column">
              <h1>Che cos’è un disturbo alimentare?</h1>
              <p className="lead">
                I Disturbi del Comportamento Alimentare sono patologie complesse,
                determinate da condizioni di disagio psicologico ed emotivo, che quindi richiedono
                un
                trattamento sia del problema alimentare in sé che della sua natura psichica.
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="col-12 col-lg ">
              <GatsbyImage
                alt="Illustrazione che rappresenta il disturbo alimentare"
                image={getImage(forchetta)}
              />
            </div>
          </Fade>
        </div>
      </header>
      <div className="container gx-2">
        <div className="row">
          <Fade>
            <div className="col offset-xl-1 ">

              <h2>Le testimonianze</h2>
            </div>
          </Fade>
        </div>
      </div>
      <div className="container-fluid gx-1 gx-xl-4 testimonianze-wrapper">
        <div className="row flex-nowrap gx-1  gx-xl-4 py-2 px-xl-3 ps-1">
          {testimonianze.map(({ nome, body }) => (
            <Testimonianza key={nome} nome={nome}>{body}</Testimonianza>
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
        layout: CONSTRAINED
      )
    }
  }
}`;
