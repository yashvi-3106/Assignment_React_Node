// Accordion Component
// Problem: Build an accordion where clicking on a question shows/hides its answer.

// Concepts Tested:

// useState
// Conditional rendering
// Dynamic data



import { useState } from 'react';

function Accordion() {
  const faqData = [
    { id: 1, question: 'What is React?', answer: 'React is a JavaScript library...' },
    { id: 2, question: 'What is a component?', answer: 'A component is a reusable...' },
    { id: 3, question: 'What is useState?', answer: 'useState is a Hook...' }
  ];


  const [openIds, setOpenIds] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenIds = new Set(openIds);
    if (newOpenIds.has(id)) {
      newOpenIds.delete(id);
    } else {
      newOpenIds.add(id);
    }
    setOpenIds(newOpenIds);
  };

  return (
    <div>
      <h1>FAQ Accordion (Multi-open)</h1>
      {faqData.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <button
            onClick={() => toggleItem(item.id)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '10px',
              background: '#f0f0f0',
              border: 'none',
              cursor: 'pointer',
              color: 'black',
            }}
          >
            {item.question}
          </button>
          {openIds.has(item.id) && (
            <div style={{ padding: '10px', background: '#fafafa', color: 'black' }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;