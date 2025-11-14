import React from "react";

const Subtitle = ({ text, className }) => {
  return (
    // <div className={"subTitle"}>{text}</div>
    <div className={`${className} subTitle`}>{text}</div>
  );
};

export default Subtitle;
