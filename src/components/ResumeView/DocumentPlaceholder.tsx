import { FunctionComponent } from 'react';

const DocumentPlaceholder: FunctionComponent = () => (
  <div style={{ width: '8.5in', height: '11in' }}>
    <div className="relative h-full overflow-hidden rounded border border-dashed border-gray-400 opacity-75">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-900/10"
        fill="none"
      >
        <defs>
          <pattern
            id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect
          stroke="none"
          fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
          width="100%"
          height="100%"
        ></rect>
      </svg>
    </div>
  </div>
);

export default DocumentPlaceholder;
