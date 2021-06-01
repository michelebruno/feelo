import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';

function Group({ faqs, title }) {
  return (faqs
    ? (
      <section>
        <h2>{title}</h2>
        <ul className="list-unstyled">
          {faqs.map(({ question, answer }) => (
            <Accordion
              key={question}
              question={question}
            >
              {answer}
            </Accordion>
          ))}
        </ul>
      </section>
    ) : null

  );
}

export default function Faq({ data: { faqs } }) {
  function getCatFaqs(cat) {
    return faqs.group.find((i) => i.fieldValue === cat)?.nodes;
  }

  const attivita = getCatFaqs('attività');
  return (
    <Layout>
      <div className="container">
        <header className="row page-header justify-content-center">
          <div className="col-12">
            <h1 className="text-center">Domande frequenti</h1>
          </div>
        </header>
        <div className="row justify-content-center">

          <div className="col-12 col-md-8">
            <Group title="Account" faqs={getCatFaqs('account')} />
            <Group title="Attività" faqs={getCatFaqs('feeler')} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`{
  faqs: allSheetsFaq {
    group(field: category) {
      nodes {
        answer
        category
        question
      }
      fieldValue
    }
  }
}`;