import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';
import { ReactComponent as FiloHug } from '../images/filo-hug.svg';
import { ReactComponent as FiloDownload } from '../images/filo-download.svg';

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
    <div className="container-fluid">

      <section
        id="download"
        className={classNames(
          'row justify-content-between ',
          'clip10 gradient2 overflow-hidden',
          'py-xl-5',
          hug ? 'pb-0 pt-3' : 'py-3',
          {
            'mt-3': doesntCover,
          },
        )}
      >
        <div className="pt-4 col-12">
          <div className="container">
            <div className="row position-relative align-items-center">

              <div className="col-12 col-xl-4 offset-xl-1">
                <h2 className="h1">Scarica l’App</h2>
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
                  <div className="col-12 col-xl-5 text-center  mb-xl-n5" id="hug-container">
                    <div className="w-100 h-100 position-relative">
                      <FiloHug id="filo-hug" />

                      <GatsbyImage
                        image={getImage(abbraccio)}
                        alt="Abbraccio tra chi sta male e un suo Feeler"
                      />
                    </div>
                  </div>
                )
                : (
                  <div className="col-12 col-xl-4 offset-xl-2 text-center position-relative">
                    <FiloDownload id="filo-download" />
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
    </div>
  );
}

Download.defaultProps = {
  doesntCover: true,
};
