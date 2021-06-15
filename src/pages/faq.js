import { graphql } from 'gatsby';
import { Info24Regular } from '@fluentui/react-icons';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';
import Download from '../components/Download';
import { ReactComponent as InfoIcon } from '../icons/Info.svg';
import { ReactComponent as PersonIcon } from '../icons/Person.svg';
import { ReactComponent as PeopleIcon } from '../icons/People.svg';
import { ReactComponent as TaskListIcon } from '../icons/TaskList.svg';

function Group({ faqs, title, id }) {
  return (faqs
    ? (
      <section id={id}>
        <h2 className="text-center">{title}</h2>
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

function IndexItem({ IconComponent, children, to }) {
  return (
    <div className="faq-index-item" onClick={() => document.getElementById(to)?.scrollIntoView()}>
      <div className="icon w-50">
        <IconComponent className="w-100 h-100" />
      </div>
      <span className="fw-bolder">{children}</span>
    </div>
  );
}

export default function Faq({ data: { faqs } }) {
  function getCatFaqs(cat) {
    return faqs.group.find((i) => i.fieldValue === cat)?.nodes;
  }

  return (
    <Layout page="faq">
      <div className="container">
        <header className="row page-header justify-content-center mb-3">
          <div className="col-12 heading-column">
            <h1 className="text-center">Domande e risposte frequenti</h1>
          </div>
        </header>
        <div className="row justify-content-center pb-lg-5 mb-lg-5">
          <div className="col-12 col-lg-8">
            <div className="row row-cols-2 row-cols-lg-4">
              <div className="col">
                <IndexItem to="info" IconComponent={InfoIcon}>Info generali</IndexItem>
              </div>
              <div className="col">
                <IndexItem to="attivita" IconComponent={TaskListIcon}>Attività</IndexItem>
              </div>
              <div className="col">
                <IndexItem to="feeler" IconComponent={PeopleIcon}>Feeler</IndexItem>
              </div>
              <div className="col">
                <IndexItem to="account" IconComponent={PersonIcon}>Account</IndexItem>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">

          <div className="col-12 col-md-8">
            <Group id="info" title="Info generali" faqs={getCatFaqs('feelo')} />
            <Group id="attivita" title="Attività" faqs={getCatFaqs('attività')} />
            <Group id="feeler" title="Feeler" faqs={getCatFaqs('feeler')} />
            <Group id="account" title="Account" faqs={getCatFaqs('account')} />
          </div>
        </div>
      </div>
      <Download />
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
