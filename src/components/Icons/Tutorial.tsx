import React from "react";

const Tutorial = (props: React.SVGAttributes<SVGElement>) => (
  <svg width="1em" height="1em" {...props}>
    <path
      d="M15 18H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 4H4v2h2V4zm0 4H4v2h2V8zm0 4H4v2h2v-2zm8-8H8v2h6V4zm0 4H8v2h6V8zm0 4H8v2h6v-2z"
      fill="#ccc"
      fillRule="evenodd"
    />
  </svg>
);

export default Tutorial;
