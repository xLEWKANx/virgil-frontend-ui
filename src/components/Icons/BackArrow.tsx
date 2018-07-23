import React from "react";

const BackArrow = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    fill="none"
    fillRule="evenodd"
    strokeWidth={1.5}
    viewBox="0 0 20.031 10"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M5.522 9.477L1.061 5.02 5.514.52M2.031 5h18" />
  </svg>
);

export default BackArrow;
