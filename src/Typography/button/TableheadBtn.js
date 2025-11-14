import React from "react";
import style from "./button.module.css";

const TableheadBtn = ({ onClick, disabled, type, text, className, svg }) => {
  return (
    <button
      className={`${style.tableBtn} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {svg }
      {text}
    </button>
  );
};

export default TableheadBtn;
