import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FaqItem = ({ question, answer, isOpen, toggleFaq }) => {
  return (
    <div
      className={`poppins w-[60%] m-auto faq-item p-5 shadow-lg cursor-pointer border rounded-md overflow-hidden transition-all duration-300 ease-in-out relative ${
        isOpen ? 'h-auto' : 'h-16'
      }`}
    >
      <div onClick={toggleFaq} className="flex justify-between items-center">
        <div className="font-semibold text-xl">{question}</div>
        <button>
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
        </button>
      </div>
      {isOpen && <div className="mt-2">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: 'Are there any hidden fees?',
      answer:
        'No, our pricing is transparent with no hidden costs.',
    },
    {
      id: 2,
      question: 'Can I change my plan later?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time.',
    },
    {
      id: 3,
      question: ' Is there a free trial available?',
      answer:
        'Yes, we offer a free trial for our individual and family plans.',
    },
    {
      id: 4,
      question: 'What payment methods do you accept? ',
      answer:
        "We accept major credit cards and PayPal.",
    },
    {
      id: 5,
      question: 'Do you offer refunds? ',
      answer:
        "Yes, we have a satisfaction guarantee. If you're not satisfied within the first 30 days, we'll refund your payment.",
    },
    {
      id: 6,
      question: 'How do I get started? ',
      answer:
        "Simply click on the 'Get Started' button under your preferred plan, and you'll be guided through the signup process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Faq px-10 lg:px-28 flex flex-col gap-5 my-28 ">
      <div className="">
        <h1 className='font-bold text-3xl text-center mb-10'>FREQUENTLY ANSWERED <span className='text-[#186BAD]'>QUESTIONS</span></h1>
      </div>
      {faqData.map((faq, index) => (
        <FaqItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          toggleFaq={() => toggleFaq(index)}
        />
      ))}
    </div>
  );
};

export default Faq;
