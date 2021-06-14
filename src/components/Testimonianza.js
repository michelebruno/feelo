import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Testimonianza({ nome, children }) {
  const { aereo } = useStaticQuery(graphql`{
    aereo: file(relativePath: {eq: "aereo.png"}) {
      childImageSharp{
        gatsbyImageData
      }
    }
  }`);

  return (
    <div className="row px-3 py-3 bg-white rounded-3 shadow h-100">
      <div className="col-12">
        <div className="row gx-2">
          <div className="col-2"><GatsbyImage className="mx-1" image={getImage(aereo)} alt="Aereoplanino di carta" /></div>
          <div className="col h2">{nome}</div>
        </div>
      </div>
      <div className="col pt-1">
        <p className="lead">
          {children}
        </p>
      </div>
    </div>
  );
}
