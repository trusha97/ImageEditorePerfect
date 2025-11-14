import React from "react";

const Header = ({ level, text, className }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={className}>{text}</HeadingTag>;
};

export default Header;
