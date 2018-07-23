import React from "react";

const PasswordField = (props: React.SVGAttributes<SVGElement>) => (
  <svg width={32} height={14} {...props}>
    <path d="M1.1 0A1.1 1.1 0 0 0 0 1.1v11.8A1.1 1.1 0 0 0 1.1 14h29.8a1.1 1.1 0 0 0 1.1-1.1V1.1A1.1 1.1 0 0 0 30.9 0M30 12H2V2h28v10zM7 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm6 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm6 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm6 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
  </svg>
);

export default PasswordField;
