import Layout from '../components/Layout';
import Accordion from '../components/Accordion';

export default function Faq() {
  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>Domande frequenti</h1>
          </div>

          <div className="col-12 col-md-8">
            <Accordion question="Posso isrivermi anche se non ho un feeler con cui connettermi?">
              Ciaooo
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
}
