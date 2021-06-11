import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactComponent as DownloadClip } from '../images/wave-10-1x.svg';

function GooglePlayButton({ className }) {
  return (
    <div className={'d-inline-block ' && className} style={{ width: '10em' }} />
  );
}

function PlayStoreButton({ className }) {
  return (
    <div className={'d-inline-block ' && className} style={{ width: '10em' }} />
  );
}

export { PlayStoreButton, GooglePlayButton };

export default function () {
  const { mockup } = useStaticQuery(graphql`query Download {
    mockup: file(relativePath: {eq: "home-screenshot-1.png"}) {
      childImageSharp{
        gatsbyImageData(
          layout: FULL_WIDTH
        )
      }
    }
  }`);
  return (
    <section id="download" className="container-fluid">
      <DownloadClip width={0} height={0} />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6 col-lg-4 offset-lg-1">
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
          <div className="col-12 col-lg-6 text-center position-relative">
            <GatsbyImage alt="Mockup della schermata iniziale" style={{ maxWidth: '40%' }} image={getImage(mockup)} className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
