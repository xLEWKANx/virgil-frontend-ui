import React from "react";

const Stats = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 2v1.49L8.116 8.76 5.104 6.84l-3.1 1.55V2H14zM2 14v-3.36l3.068-1.48 2.991 2.11 5.935-5.13V14H2z" />
  </svg>
);

export default Stats;
