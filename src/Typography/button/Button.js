import React from "react";

const Button = ({ onClick, disabled, type, text,className, icon }) => {
  return (
    <button
      className={`${className} defult_button`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <p 
      className="BTNText"
      // className={`${className} BTNText`}
      >{text}</p>
      {icon && <span>{icon}</span>}
    </button>
    
  );
};

export default Button;
