import React from "react";

const Calendar = (props: React.SVGAttributes<SVGElement>) => (
  <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
    <path d="M15 2h-2V0h-2v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 12H1.99V6.97H14V14z" />
  </svg>
);

export default Calendar;
