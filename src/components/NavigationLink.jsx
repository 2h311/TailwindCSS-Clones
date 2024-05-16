import React from "react";

const NavigationLink = ({ name, href, className }) => {
  return (
    <a key={name} href={href} className={className}>
      {name}
    </a>
  );
};

export default NavigationLink;
