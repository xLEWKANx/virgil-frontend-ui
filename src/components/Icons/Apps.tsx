import React from "react";

const Apps = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={16} height={16} {...props}>
    <path
      className="cls-1"
      d="M7 0H0v7h7V0m9 9H9v7h7V9M7 9H0v7h7V9M2 5V2h3v3H2m14-5H9v7h7V0"
      fillRule="evenodd"
    />
  </svg>
);

export default Apps;
