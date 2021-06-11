import Layout from '../components/Layout';
import Download from '../components/Download';

export default function Testimonianze() {
  return (
    <Layout>
      <header className="containter">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1>Che cos’è un disturbo alimentare?</h1>
            <p className="lead">
              I Disturbi del Comportamento Alimentare sono patologie complesse,
              determinate da condizioni di disagio psicologico ed emotivo, che quindi richiedono un
              trattamento sia del problema alimentare in sé che della sua natura psichica.
            </p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Le testimonianze</h2>
          </div>
        </div>
      </div>
      <Download />
    </Layout>
  );
}
