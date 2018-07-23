import React from "react";

const PlusSmall = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={12} height={12} {...props}>
    <path d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2z" />
  </svg>
);

export default PlusSmall;
