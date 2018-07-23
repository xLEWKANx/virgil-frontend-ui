import React from "react";

const OkStay = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={14} height={14} {...props}>
    <path
      stroke="#fff"
      strokeWidth={2}
      fill="none"
      strokeLinecap="square"
      d="M4 7l2 2 4-4"
    />
  </svg>
);

export default OkStay;
