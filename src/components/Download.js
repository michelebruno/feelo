import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactComponent as PlayStoreSvg } from '../images/play-store-badge.svg';

function GooglePlayButton({ className }) {
  const { file } = useStaticQuery(graphql`{
    file(relativePath: {eq: "google-play-badge.png"}) {
      childImageSharp{
        gatsbyImageData(
          layout: CONSTRAINED
        )
      }
    }
  }`);
  return <div className={'d-inline-block ' && className} style={{ width: '10em' }}><GatsbyImage alt="Google Play Badge" image={getImage(file)} /></div>;
}
function PlayStoreButton({ className }) {
  return <div className={'d-inline-block ' && className} style={{ width: '10em' }}><PlayStoreSvg /></div>;
}
export { PlayStoreButton, GooglePlayButton };

export default function () {
  return (
    <section className="container hero-section">
      <div className="row">
        <div className="col-12">
          <h2>Download</h2>
        </div>
        <div className="col-6">
          <p className="lead">Hey, siamo su play store!</p>
          <p>
            <a href="#" className="btn btn-link">Play store</a>
          </p>
        </div>
      </div>
    </section>
  );
}
