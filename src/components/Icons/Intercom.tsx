import React from "react";

const Intercom = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={16} height={18} {...props}>
    <path
      fill="#ccc"
      d="M10.971 16H2.057A2.057 2.057 0 0 1 0 13.943V2.057A2.057 2.057 0 0 1 2.057 0h11.886A2.057 2.057 0 0 1 16 2.057V18zm2.684-4.967a.75.75 0 0 0-1.025-.273 9.418 9.418 0 0 1-9.254 0 .75.75 0 0 0-.752 1.3 10.763 10.763 0 0 0 10.758 0 .751.751 0 0 0 .273-1.027z"
    />
  </svg>
);

export default Intercom;
