import { Link } from 'gatsby';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Download from '../components/Download';

function Hero() {
  return (
    <div className="container hero-section">
      <div className="row">
        <div className="col-5">
          <h1 className="display-3">Ascolta le emozioni!</h1>
          <p className="lead py-4">
            Riflettere su se stessi e con gli altri non è mai un’impresa facile, per questo Feelo è
            qui per aiutarti!
          </p>
          <div>
            <a href="#download" className="btn btn-primary btn-lg">Scarica Feelo</a>
            <Link className="btn btn-link btn-lg ">Scopri cos'è</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="container hero-section">
        <div className="row">
          <div className="col-12">
            <h2>Benvenuto su Feelo</h2>
          </div>
          <div className="col-12 col-lg-10 offset-lg-1">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/552398689?title=0&byline=0"
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js" />
          </div>
        </div>
      </section>
      <section className="container hero-section">
        <div className="row">
          <div className="col">
            <Card>
              <h2>Ecco cosa ti propongo</h2>
              <p className="lead">
                Attraverso attività e riflessioni appositamente pensate per sostenere te e i tuoi cari emotivamente
                durante
                il percorso terapeutico, ti mostrerò come il lavoro
                di squadra possa essere una strategia vincente!
              </p>
              <p className="text-right"><Link className="btn btn-link">Scopri di più</Link></p>
            </Card>

          </div>
        </div>
      </section>

      <section className="container hero-section">
        <div className="row">
          <div className="col-12">
            <Card>
              <div className="row">
                <div className="col-6">Video</div>
                <div className="col-6">
                  <h2>Prova subito un'attività</h2>
                  <p className="lead">
                    Questa riflessione guidata potrà esserti utile per capire cosa faremo insieme
                    all’interno dell’app. Premi play e iniziamo l’attività!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col">
            <h2>Cosa dicono i nostri utenti?</h2>
          </div>
        </div>
      </section>
      <Download />
    </Layout>
  );
}
