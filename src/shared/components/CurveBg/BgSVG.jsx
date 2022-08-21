import React from "react";

const BgSVG = () => {
  return (
    <>
      <svg
        id="visual"
        viewBox="0 0 1280 600"
        width="1280"
        height="600"
        version="1.1"
        className="w-full h-full"
      >
        <defs>
          <linearGradient gradientTransform="rotate(60)" id="gradient">
            <stop offset="45%" stopColor="#00CC99"></stop>
            <stop offset="99%" stopColor="#5352ed"></stop>
          </linearGradient>
        </defs>

        <g transform="translate(0 650)">
          <path
            d="M285.6 -414.6C427 -290.4 637.7 -283 694.8 -203.1C752 -123.2 655.6 29.3 582.7 169.4C509.8 309.6 460.3 437.6 367.1 582.3C273.9 727 137 888.5 25.1 854C-86.8 819.5 -173.6 588.9 -283.6 449.7C-393.6 310.4 -526.8 262.4 -622.3 157.6C-717.7 52.7 -775.4 -109 -691.1 -180.1C-606.9 -251.3 -380.6 -231.8 -241.7 -356.9C-102.9 -481.9 -51.4 -751.5 10.3 -765.7C72.1 -779.9 144.2 -538.8 285.6 -414.6"
            fill="url(#gradient)"
          ></path>
        </g>
      </svg>
    </>
  );
};

export default BgSVG;
