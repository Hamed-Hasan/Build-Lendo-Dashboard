
import React, { useState } from 'react';
import './FAQSection.scss';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Why should I trust this tool?',
      answer: 'Build adaptive websites with HTML, CSS, Js and React for a seamless user experience. Use SCSS for efficient styling.',
    },
    {
      question: 'What risks are related to investments?',
      answer: 'Enhance React apps by mastering state management. Utilize JS for dynamic updates and SCSS for modular styling.',
    },
  ];

  return (
    <div className="faq-section">
      <h2>You Might Want to Know</h2>
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          index={index}
          activeIndex={activeIndex}
          toggle={toggle}
          {...item}
        />
      ))}
    </div>
  );
};

export default FAQSection;
