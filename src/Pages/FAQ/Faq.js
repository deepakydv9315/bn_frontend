import React, { useState } from 'react';
import './Faq.scss';
import FAQ from '../../Components/Faq/Faqi';

const Faq = () => {
  const faqData = [
    {
      question: 'What is gym protein, and why is it important for fitness enthusiasts?',
      answer:
        'Gym protein, also known as protein supplements, is a convenient way to increase your protein intake, which is crucial for muscle growth, repair, and overall health. It helps athletes and fitness enthusiasts meet their protein needs, especially when dietary sources fall short.',
    },
    {
      question: 'What types of gym protein products do you offer?',
      answer: 'We offer a variety of gym protein products, including protein powders (whey protein, plant-based protein, casein protein), protein bars, and ready-to-drink protein shakes. Our products cater to different dietary preferences and goals.',
    },
    {
      question: 'How do I choose the right protein product for my fitness goals?',
      answer: 'Selecting the right protein product depends on your specific fitness goals, dietary restrictions, and personal preferences. We recommend consulting with a fitness professional or nutritionist to determine the most suitable protein source and intake for your needs.',
    },
    {
      question: "Are your protein products suitable for vegans and vegetarians?",
      answer:
        "Yes, we offer a range of vegan and vegetarian-friendly protein products, including plant-based protein powders and bars. Check product descriptions or labels for specific dietary information.",
    },
    {
      question: "Do your gym protein products contain artificial additives or sweeteners?",
      answer:
        'We prioritize product quality and transparency. Most of our protein products are made without artificial additives and are minimally processed to provide a pure protein source. Check the product labels for details.',
    },
    {
      question: "What is the best time to consume gym protein for optimal results?",
      answer: " The ideal timing for protein consumption depends on your goals. Generally, it's beneficial to have a protein source within an hour of your workout to aid in muscle recovery. You can also use protein as a snack or meal replacement depending on your dietary plan.",
    },
    {
      question: "Maximum time to deliver an order?",
      answer: "It depends upon the location and your order.",
    },
    {
      question: "Is cash on delivery available?",
      answer: "Yes,It is availbale.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-page contain-bg">
      <h2 className="title1">Frequently Asked<span> Questions</span></h2>
      <p className="faq-description">Find answers to common questions about our products and services.</p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQ
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
