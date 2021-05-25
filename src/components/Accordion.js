export default function Accordion({ question, children }) {
  return (
    <article className="accordion">
      <div>{question}</div>
    </article>
  );
}
