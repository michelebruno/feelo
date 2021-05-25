import { useState } from 'react';

export default function Accordion({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="accordion">
      <div className="bg-secondary rounded-2 px-3 py-2" onClick={() => setOpen(!open)}>{question}</div>
      <div className={open && 'd-none'}>
        {children}
      </div>
    </article>
  );
}
