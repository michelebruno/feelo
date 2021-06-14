import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';

export default function Download({ className, doesntCover, hug }) {
  const { mockup, abbraccio } = useStaticQuery(graphql`query Download {
    mockup: file(relativePath: {eq: "mockup intro app.png"}) {
      childImageSharp{
        gatsbyImageData(
          layout: FULL_WIDTH
        )
      }
    }
    abbraccio: file(relativePath: {eq: "abbraccio.png"}) {
      childImageSharp{
        gatsbyImageData(
          layout: FULL_WIDTH
        )
      }
    }
  }`);
  return (
    <section
      id="download"
      className={classNames('row justify-content-between gx-0 clip01 gradient2 pb-2 ',
        {
          'mt-3': doesntCover,
        })}
    >
      <div className="col-12">
        <div className="container">
          <div className="row position-relative">

            <div className="col-12 col-lg-4 offset-lg-1 pb-5">
              <h2>Scarica l’App</h2>
              <p className="lead">
                Inizia il tuo percorso con Feelo che ti aiuterà ad affrontare il
                disturbo alimentare con chi ti vuole bene.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary me-1">Android</a>
                <a href="#" className="btn btn-outline-primary  me-1">iOS</a>
              </p>
            </div>
            {hug
              ? (
                <div className="col-12 col-lg-5 mt-n3 text-center mb-n2" id="hug-container">
                  <GatsbyImage image={getImage(abbraccio)} alt="Abbraccio tra chi sta male e un suo Feeler" />
                </div>
              )
              : (
                <div className="col-12 col-lg-4 offset-lg-2 mt-n3 text-center">
                  <GatsbyImage
                    alt="Mockup della schermata iniziale"
                    image={getImage(mockup)}
                    className="mx-auto"
                  />
                </div>
              )}
          </div>
        </div>

      </div>

    </section>
  );
}

Download.defaultProps = {
  doesntCover: true,
};
