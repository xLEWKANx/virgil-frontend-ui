import React from "react";

const Download = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={14} height={16} {...props}>
    <path
      d="M0 14h14v2H0v-2zm11.88-7L10.5 5.62 8 8.12V0H6v8.12l-2.5-2.5L2.13 7 7 11.87 11.88 7z"
      fill="#333"
      fillRule="evenodd"
    />
  </svg>
);

export default Download;
