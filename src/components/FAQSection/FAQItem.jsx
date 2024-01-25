import React from 'react';
import arrowDown from '../../assets/images/arr-down.svg';

const FAQItem = ({ index, activeIndex, toggle, question, answer }) => (
  <div className="faq-item" onClick={() => toggle(index)}>
    <div className="faq-question">
      {question}
      <img src={arrowDown} alt="Toggle" className={`arrow ${activeIndex === index ? 'active' : ''}`} />
    </div>
    <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
      <p>{answer}</p>
    </div>
  </div>
);

export default FAQItem;
