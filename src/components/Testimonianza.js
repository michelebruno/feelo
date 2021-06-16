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
    <div className=" col-11 col-lg-6 align-self-stretch testimonianza-item">
      <div className="py-3 px-lg-3 bg-white rounded-3 shadow container-fluid gx-2 h-100">

        <div className="row">
          <div className="col-12">
            <div className="row  ">
              <div className="col-3 col-lg-2 testimonianza-aereoplano"><GatsbyImage className=" mx-auto" image={getImage(aereo)} alt="Aereoplanino di carta" /></div>
              <div className="col h2">{nome}</div>
            </div>
          </div>
          <div className="col pt-1">
            <p className="mb-0">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
