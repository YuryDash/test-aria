import {IconProps, IconWrapper} from "./IconWrapper.tsx";

export function Bitcoin(fullProps: IconProps) {

  const {svgProps: props, ...restProps} = fullProps

  return (
    <IconWrapper icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="312"
        height="312"
        fill="none"
        viewBox="0 0 312 352"
        {...props}
      >
        <g
          fill="#3A3656"
          clipPath="url(#clip0_64_182)"
          filter="url(#filter0_f_64_182)"
        >
          <path
            fillRule="evenodd"
            d="M148.79 148.084l40.165 12.473c14.905 4.628 30.74-3.703 35.369-18.608 4.628-14.905-3.703-30.74-18.608-35.368l-40.165-12.473-16.761 53.976zm113.308 5.595c11.106-35.767-8.885-73.766-44.652-84.872l-77.939-24.203-40.22 129.524 77.938 24.203c35.767 11.106 73.766-8.885 84.873-44.652z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M117.505 248.824l37.767 11.727c16.229 5.04 33.472-4.031 38.511-20.261 5.04-16.23-4.031-33.472-20.261-38.512l-37.766-11.727-18.251 58.773zm114.052 3.196c11.518-37.092-9.213-76.498-46.305-88.016l-75.54-23.457-41.71 134.321 75.54 23.457c37.091 11.518 76.497-9.213 88.015-46.305z"
            clipRule="evenodd"
          ></path>
          <path
            d="M78.554 240.852l-10.427 33.58-38.054-11.817 10.428-33.58 38.053 11.817zM139.496 44.602l-10.428 33.58-38.053-11.816 10.428-33.58 38.053 11.816zM177.985 56.552l-33.297-10.34 8.938-28.783 33.297 10.34-8.938 28.783zM97.541 315.601l-33.297-10.34 8.938-28.783 33.297 10.339-8.938 28.784zM227.278 71.86l-33.297-10.34 8.938-28.783 33.297 10.34-8.938 28.782zM146.839 330.908l-33.297-10.339 8.938-28.783 33.297 10.339-8.938 28.783z"></path>
        </g>
        <defs>
          <filter
            id="filter0_f_64_182"
            width="271.093"
            height="349.479"
            x="12.073"
            y="-0.571"
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
              result="effect1_foregroundBlur_64_182"
              stdDeviation="9"
            ></feGaussianBlur>
          </filter>
          <clipPath id="clip0_64_182">
            <path fill="#fff" d="M0 0H312V352H0z"></path>
          </clipPath>
        </defs>
      </svg>
    }
                 {...restProps}
    />
  );
}