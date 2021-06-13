import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';

export default function Download({ className, doesntCover }) {
  const { mockup } = useStaticQuery(graphql`query Download {
    mockup: file(relativePath: {eq: "mockup intro app.png"}) {
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
          <div className="row">

            <div className="col-12 col-lg-4 offset-lg-1 pb-5">
              <h2>Scarica l’App</h2>
              <p className="lead">
                Inizia il tuo percorso con Feelo che ti aiuterà ad affrontare il
                disturbo alimentare con chi ti vuole bene.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary">Android</a>
                <a href="#" className="btn btn-outline-primary">iOS</a>
              </p>
            </div>
            <div className="col-12 col-lg-4 offset-lg-2 mt-n3 text-center position-relative">
              <GatsbyImage
                alt="Mockup della schermata iniziale"
                image={getImage(mockup)}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

Download.defaultProps = {
  doesntCover: true,
};
