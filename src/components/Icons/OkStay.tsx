import React from "react";

const OkStay = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="0 0 14 14" width="1em" height="1em" {...props}>
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
