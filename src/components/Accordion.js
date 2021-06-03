import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@fluentui/react-icons-mdl2';

export default function Accordion({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`accordion my-2 ${open && 'open'}`}>
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="col">
          {question}
        </div>
        <div className="col-auto accordion-icon">
          <ChevronUpIcon />
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
