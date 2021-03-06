import { graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
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

function IndexItem({
  IconComponent, children, to, ...props
}) {
  return (
    <div className="faq-index-item" onClick={() => document.getElementById(to)?.scrollIntoView()} {...props}>
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
      <div className="container gx-2">
        <header className="row page-header justify-content-center mb-3">
          <Fade>
            <div className="col-12 heading-column">
              <h1 className="text-center">Domande e risposte frequenti</h1>
            </div>
          </Fade>
        </header>
        <div className="row justify-content-center pb-lg-5 mb-xl-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <div className="row row-cols-2 row-cols-lg-4 g-2">

              <Fade cascade>

                <div className="col">
                  <IndexItem to="info" IconComponent={InfoIcon}>Info generali</IndexItem>
                </div>
                <div className="col">
                  <IndexItem to="attivita" IconComponent={TaskListIcon}>Attivit??</IndexItem>
                </div>
                <div className="col">
                  <IndexItem to="feeler" IconComponent={PeopleIcon}>Feeler</IndexItem>
                </div>
                <div className="col">
                  <IndexItem to="account" IconComponent={PersonIcon}>Account</IndexItem>
                </div>

              </Fade>
              <div className="col-12" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <Group id="info" title="Info generali" faqs={getCatFaqs('feelo')} />
            <Group id="attivita" title="Attivit??" faqs={getCatFaqs('attivit??')} />
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
  faqs: allFaqCsv {
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
