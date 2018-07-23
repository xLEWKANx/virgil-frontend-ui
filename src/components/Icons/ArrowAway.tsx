import React from "react";

const ArrowAway = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="1em" height="1em" {...props}>
    <path
      d="M8.274 8.01V3.532l-6.716 6.715L.003 8.691l6.715-6.715H2.262V0h7.988v8.01H8.274z"
      fillRule="evenodd"
    />
  </svg>
);

export default ArrowAway;
