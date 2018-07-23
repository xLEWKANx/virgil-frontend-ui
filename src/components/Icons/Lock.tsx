import React from "react";

const Lock = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="0 0 18 20" width="1em" height="1em" {...props}>
    <path d="M16.9 7H15V1.1A1.1 1.1 0 0 0 13.9 0H4.1A1.1 1.1 0 0 0 3 1.1V7H1.1A1.1 1.1 0 0 0 0 8.1v10.8A1.1 1.1 0 0 0 1.1 20h15.8a1.1 1.1 0 0 0 1.1-1.1V8.1A1.1 1.1 0 0 0 16.9 7zM5 2h8v5H5V2zm11 16H2V9h14v9zm-7-3a1 1 0 0 0 1-1v-1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1z" />
  </svg>
);

export default Lock;
