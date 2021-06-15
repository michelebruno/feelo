import { useState } from 'react';
import { ChevronUp24Filled } from '@fluentui/react-icons';

export default function Accordion({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`accordion my-2 ${open && 'open'}`}>
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="col">
          {question}
        </div>
        <div className="col-auto accordion-icon">
          <ChevronUp24Filled />
        </div>
      </div>
      <div className={`accordion-body ${
        open || 'd-none'}`}
      >
        {children}
      </div>
    </article>
  );
}
