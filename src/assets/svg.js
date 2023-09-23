import React from "react";

export default function SvgComponent() {
  return (
    <svg
      style={{ transition: ".3s" }}
      viewBox="0 0 1440 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="a" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(19, 24, 52, 1)" />
          <stop offset="100%" stopColor="rgba(83, 99, 193, 1)" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="b" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(19, 24, 52, 1)" />
          <stop offset="100%" stopColor="rgba(83, 99, 193, 1)" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id="c" x1="0" x2="0" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(19, 24, 52, 1)" />
          <stop offset="100%" stopColor="rgba(83, 99, 193, 1)" />
        </linearGradient>
      </defs>
      <path
        d="M0 100l21.8 8.3C43.6 117 87 133 131 125c43.5-8 87-42 131-45.8 43.5-4.2 87 20.8 131 29.1 43.4 8.7 87-.3 131-4.1 43.3-4.2 87-4.2 131 8.3 43.2 12.5 87 37.5 130 25C829.1 125 873 75 916 79.2c44 3.8 88 62.8 131 75 43.9 12.8 88-21.2 131-37.5 43.8-16.7 87-16.7 131-20.9 43.7-3.8 87-12.8 131 8.4 43.6 20.8 87 70.8 131 95.8 43.5 25 87 25 131 16.7 43.5-8.7 87-24.7 131-33.4 43.4-8.3 87-8.3 131-12.5 43.3-3.8 87-12.8 131-33.3 43.2-20.5 87-54.5 130-62.5 44.1-8 88 8 131 16.7 44 8.3 88 8.3 131 16.6 43.9 8.7 88 24.7 131 37.5 43.8 12.2 87 21.2 131 29.2 43.7 8 87 17 131 12.5 43.6-4.5 87-20.5 131-50 43.5-29.5 87-70.5 109-91.7l21.8-20.8v225H0z"
        fill="url(#a)"
      />
      <path
        d="M0 100l21.8 8.3C43.6 117 87 133 131 141.7c43.5 8.3 87 8.3 131-12.5C305.5 108 349 67 393 50c43.4-17 87-8 131 16.7 43.3 25.3 87 66.3 131 66.6 43.2-.3 87-41.3 130-50 44.1-8.3 88 16.7 131 12.5 44-3.8 88-37.8 131-37.5 43.9-.3 88 33.7 131 62.5 43.8 29.2 87 54.2 131 33.4 43.7-21.2 87-87.2 131-116.7 43.6-29.5 87-20.5 131-4.2 43.5 16.7 87 41.7 131 54.2 43.5 12.5 87 12.5 131 29.2 43.4 16.3 87 50.3 131 62.5 43.3 12.8 87 3.8 131-25 43.2-29.2 87-79.2 130-91.7 44.1-12.5 88 12.5 131 16.7 44 3.8 88-12.2 131-20.9 43.9-8.3 88-8.3 131-4.1 43.8 3.8 87 12.8 131 37.5 43.7 25.3 87 66.3 131 66.6 43.6-.3 87-41.3 131-41.6 43.5.3 87 41.3 109 62.5l21.8 20.8v50H0z"
        fill="url(#b)"
        opacity=".9"
        transform="translate(0 50)"
      />
      <path
        d="M0 125h21.8c21.8 0 65.2 0 109.2 12.5 43.5 12.5 87 37.5 131 45.8 43.5 8.7 87-.3 131-25C436.4 133 480 92 524 79.2c43.3-12.2 87 3.8 131 33.3 43.2 29.5 87 70.5 130 79.2 44.1 8.3 88-16.7 131-54.2 44-37.5 88-87.5 131-91.7 43.9-3.8 88 37.2 131 50 43.8 12.2 87-3.8 131-12.5 43.7-8.3 87-8.3 131-12.5 43.6-3.8 87-12.8 131-4.1 43.5 8.3 87 33.3 131 41.6 43.5 8.7 87-.3 131 16.7 43.4 17 87 58 131 41.7 43.3-16.7 87-91.7 131-91.7 43.2 0 87 75 130 100 44.1 25 88 0 131-20.8 44-21.2 88-37.2 131-29.2 43.9 8 88 42 131 29.2 43.8-12.2 87-71.2 131-95.9 43.7-25.3 87-16.3 131 12.5 43.6 29.2 87 79.2 131 79.2 43.5 0 87-50 109-75l21.8-25v200H0z"
        fill="url(#c)"
        opacity=".8"
        transform="translate(0 100)"
      />
    </svg>
  );
}
