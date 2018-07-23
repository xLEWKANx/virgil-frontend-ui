import React from "react";

const Cards = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={19} height={14} {...props}>
    <path
      d="M18 4H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-6 8H6v-2h6v2zm3-4H6V6h9v2zM2 12H0V1.1A1.1 1.1 0 0 1 1.1 0H17v2H2v10z"
      fillRule="evenodd"
    />
  </svg>
);

export default Cards;
