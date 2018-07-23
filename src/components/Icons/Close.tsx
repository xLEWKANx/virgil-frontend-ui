import React from "react";

const Close = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={22} height={22} {...props}>
    <path data-name="Close Icon" d="M1 1l20 20m0-20L1 21" />
  </svg>
);

export default Close;
