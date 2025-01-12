import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const FAQ = ({ visaType }) => {
  // Sample FAQs, you can expand these based on each visa type
  const faqs = [
    {
      question: "How long does the visa application process take?",
      answer: "The processing time varies depending on the visa type and country, but typically it takes anywhere from a few days to a few weeks.",
    },
    {
      question: "What documents are required for a visa application?",
      answer: "The documents vary by visa type, but generally include a passport, photographs, application form, and additional documents such as financial proof or invitations, depending on the visa type.",
    },
    {
      question: "Can I extend my visa once issued?",
      answer: "Some visas are extendable. It is recommended to check the specific visa guidelines or contact us for more details.",
    },
    {
      question: "How do I know if my visa has been approved?",
      answer: "You will receive a notification from us once your visa is approved, often followed by the document been sent to you via a PDF file for you to print!",
    },
  ];

  // State to track the currently active question
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the answer visibility
  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if it is already open
    } else {
      setActiveIndex(index); // Open the clicked answer
    }
  };

  return (
    <div className="faq-container">
        <p className="abbout-title">// COUNTRY //</p>
        <h2 className="faq-h2">
          Frequently Asked Questions
        </h2>
       

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => handleToggle(index)}
            >
              <h3>{faq.question}</h3>
              <FaChevronDown
                className={`faq-arrow ${activeIndex === index ? "rotate" : ""}`}
              />
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
