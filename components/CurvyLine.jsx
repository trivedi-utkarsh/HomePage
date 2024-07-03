// components/CurvyLine.js
import React from 'react';

const CurvyLine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="510"
      viewBox="0 0 600 410"
      fill="none"
      className="mx-auto my-8 absolute"
      style={{ left: '67px', top: '-80px' }}
    >
      <path
        d="M415.964 2V39.6741C415.964 143.187 332.05 227.1 228.537 227.1H129.892C59.067 227.1 1.65234 284.515 1.65234 355.34V408.125"
        stroke="url(#paint0_linear_1_5683)"
        strokeWidth="2.95937"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_5683"
          x1="-127.573"
          y1="526.301"
          x2="384.384"
          y2="-45.5097"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A371F7" />
          <stop offset="0.00733964" stopColor="#9E72D3" />
          <stop offset="0.251918" stopColor="#6639BA" stopOpacity="0" />
          <stop offset="0.325848" stopColor="#6639BA" />
          <stop offset="0.945217" stopColor="#6639BA" />
          <stop offset="1" stopColor="#6639BA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CurvyLine;
