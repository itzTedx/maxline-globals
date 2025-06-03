import React from "react";

export const TransportTypes = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      {...props}
      width="395"
      height="334"
      viewBox="0 0 395 334"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image
        href="/images/transportation-types.jpg"
        x="83"
        y="21"
        width="300"
        height="300"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#circleClip)"
      />
      <circle cx="232" cy="171" r="162.5" stroke="url(#paint0_linear_3_6)" />
      <circle cx="162" cy="25" r="10" fill="white" fillOpacity="0.25" />
      <circle cx="162" cy="25" r="8" fill="white" />
      <circle cx="69" cy="171" r="10" fill="white" fillOpacity="0.25" />
      <circle cx="69" cy="171" r="8" fill="white" />
      <circle cx="142" cy="308" r="10" fill="white" fillOpacity="0.25" />
      <circle cx="142" cy="308" r="8" fill="white" />
      <rect x="102" width="61" height="26" rx="5" fill="white" />
      <text
        x="132.5"
        y="14"
        fontSize="12"
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        01 / Air
      </text>
      <rect y="145" width="69" height="26" rx="5" fill="white" />
      <text
        x="34.5"
        y="159"
        fontSize="12"
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        02 / Sea
      </text>
      <rect x="68" y="283" width="74" height="26" rx="5" fill="white" />
      <text
        x="105"
        y="296"
        fontSize="12"
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        03 / Road{" "}
      </text>
      <defs>
        <clipPath id="circleClip">
          <circle cx="233" cy="171" r="150" />
        </clipPath>
        <linearGradient
          id="paint0_linear_3_6"
          x1="68"
          y1="175"
          x2="395"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
