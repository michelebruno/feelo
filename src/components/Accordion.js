import { useState } from 'react';

export default function Accordion({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="accordion">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="col">
          {question}
        </div>
        <div className="col-auto">
          {open ? 'C' : 'O'}
        </div>
      </div>
      <div className={`accordion-body ${
        open && 'd-none'}`}
      >
        {children}
      </div>
    </article>
  );
}
