import React from "react";

const Paragraph = ({ level, text, className }) => {
  return <p className={`Paragraph_${level} ${className}`}>{text}</p>;
};

export default Paragraph;
