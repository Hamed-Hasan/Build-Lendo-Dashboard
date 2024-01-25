import React, { useState } from 'react';
import './FAQSection.scss'; 
import arrowDown from '../../assets/images/arr-down.svg';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>You Might Want to Know</h2>
      <div className="faq-item" onClick={() => toggle(0)}>
        <div className="faq-question">
          Why should I trust this tool?
          <img src={arrowDown} alt="Toggle" className={`arrow ${activeIndex === 0 ? 'active' : ''}`} />
        </div>
        <div className={`faq-answer ${activeIndex === 0 ? 'active' : ''}`}>
          <p>Build adaptive websites with HTML, CSS, Js and React for a seamless user experience. Use SCSS for efficient styling.</p>
        </div>
      </div>
      <div className="faq-item" onClick={() => toggle(1)}>
        <div className="faq-question">
          What risks are related to investments?
          <img src={arrowDown} alt="Toggle" className={`arrow ${activeIndex === 1 ? 'active' : ''}`} />
        </div>
        <div className={`faq-answer ${activeIndex === 1 ? 'active' : ''}`}>
          <p>Enhance React apps by mastering state management. Utilize JS for dynamic updates and SCSS for modular styling.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
