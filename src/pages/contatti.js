import { graphql } from 'gatsby';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import Layout from '../components/Layout';

export default function Contatti({ data: { associazioni: { nodes: associazioni } } }) {
  return (
    <Layout title="Contatti">
      <div className="container">
        <header className="row page-header justify-content-center">
          <div className="col-12">
            <h1 className="handwritten">Contatti</h1>
          </div>
        </header>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            {typeof window !== 'undefined' && (
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ minHeight: '400px' }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {associazioni.map(({ lat, long }) => (lat && long)
                && (
                  <Marker position={[lat, long]}>
                    <Popup>
                      A pretty CSS3 popup.
                      <br />
                      Easily customizable.
                    </Popup>
                  </Marker>
                ))}
            </MapContainer>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql` {
  associazioni: allAssociazioneCsv {
    nodes {
      Ambulatorio
      DayHospital
      RicoveroOspedaliero
      lat
      long
      luogo
    }
  }
}
`;
