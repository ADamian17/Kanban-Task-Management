import React, { SVGProps } from "react";

const ChevronUp: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
  >
    <path d="M9 6L5 2L1 6" stroke="#635FC7" strokeWidth="2" />
  </svg>
);

export default ChevronUp;
