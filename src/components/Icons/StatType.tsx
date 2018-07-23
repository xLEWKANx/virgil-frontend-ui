import React from "react";

const StatType = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={16} height={16} {...props}>
    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.11 8.761L5.1 6.841 2 8.384V2h12v1.482" />
  </svg>
);

export default StatType;
