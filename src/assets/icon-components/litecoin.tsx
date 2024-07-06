import * as React from "react";
import {IconProps, IconWrapper} from "./IconWrapper.tsx";

export function Litecoin(fullProps: IconProps) {
  const {svgProps: props, ...restProps} = fullProps

  return (
    <IconWrapper icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="312"
        height="324"
        fill="none"
        viewBox="0 0 312 324"
        {...props}
      >
        <g
          fill="#2D4952"
          clipPath="url(#clip0_64_208)"
          filter="url(#filter0_f_64_208)"
        >
          <path
            d="M132.907 24.265L80.987 42.02l31.912 256.858 176.156-60.236-9.053-44.646-124.237 42.482-22.858-212.212z"></path>
          <path d="M71.967 256.817l-9.447-35.86L187.677 56.06l7.306 36.721L71.967 256.817z"></path>
        </g>
        <defs>
          <filter
            id="filter0_f_64_208"
            width="262.535"
            height="310.611"
            x="44.52"
            y="6.266"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_64_208"
              stdDeviation="9"
            ></feGaussianBlur>
          </filter>
          <clipPath id="clip0_64_208">
            <path fill="#fff" d="M0 0H312V324H0z"></path>
          </clipPath>
        </defs>
      </svg>
    }
                 {...restProps}
    />
  );
}