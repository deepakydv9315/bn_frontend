import React, { useState } from "react";
import "./Faqi.scss";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faqi = ({ question, answer, onToggle }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`faq-item ${isActive ? "active" : ""}`}
    >
      <div className="faq-question" onClick={onToggle}>
        <span className="faq-icon">{isActive ? <FaMinus /> : <FaPlus />}</span>
        <span className="faq-text">{question}</span>
      </div>
      {isActive && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default Faqi;
