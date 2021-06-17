import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';
import Fade from 'react-reveal/Fade';
import { ReactComponent as FiloHug } from '../images/filo-hug.svg';
import { ReactComponent as FiloDownload } from '../images/filo-download.svg';
import ClippedSection from './ClippedSection';

export default function Download({ className, doesntCover, hug }) {
  const { mockup, abbraccio } = useStaticQuery(graphql`query Download {
    mockup: file(relativePath: {eq: "mockup intro app.png"}) {
      childImageSharp{
        gatsbyImageData(
          layout: CONSTRAINED
        )
      }
    }
    abbraccio: file(relativePath: {eq: "abbraccio.png"}) {
      childImageSharp{
        gatsbyImageData(
          layout: CONSTRAINED
          width: 1000
        )
      }
    }
  }`);
  return (
    <ClippedSection
      className={classNames(
        'container-fluid',
        'clip10 gradient2 overflow-hidden',
        'py-lg-5',
        hug ? 'pb-0 pt-3' : 'py-3',
        {
          'mt-3': doesntCover,
        },
      )}
      id="download"
    >
      <div className="pt-4 col-12">
        <div className="container">
          <div className="row position-relative align-items-center">
            <div className="col-12 col-lg-5 col-xl-4 offset-xl-1">
              <h2 className="h1">Scarica l’App</h2>
              <p className="lead">
                Inizia il tuo percorso con Feelo che ti aiuterà ad affrontare il
                disturbo alimentare con chi ti vuole bene.
              </p>
              <p>
                <a href="#" className="btn btn-outline-primary me-1">Android</a>
                <a href="#" className="btn btn-outline-primary me-1">iOS</a>
              </p>
            </div>
            {hug
              ? (
                <div className="col-12  col-lg-5 offset-lg-1  text-center mb-xl-n5" id="hug-container">
                  <Fade bottom>

                    <div className="w-100 h-100 position-relative">
                      <FiloHug id="filo-hug" className="pt-4" />
                      <GatsbyImage
                        image={getImage(abbraccio)}
                        alt="Abbraccio tra chi sta male e un suo Feeler"
                      />
                    </div>
                  </Fade>
                </div>
              )
              : (
                <div className="col-12 col-lg-6 offset-lg-1 col-xl-4 offset-xl-2
                text-center position-relative overflow-hidden"
                >
                  <Fade bottom>
                    <FiloDownload id="filo-download" />
                    <GatsbyImage
                      alt="Mockup della schermata iniziale"
                      image={getImage(mockup)}
                      className="mx-auto"
                    />
                  </Fade>
                </div>
              )}
          </div>
        </div>

      </div>

    </ClippedSection>
  );
}

Download.defaultProps = {
  doesntCover: true,
};
