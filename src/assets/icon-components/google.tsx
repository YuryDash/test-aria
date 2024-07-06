import {IconProps, IconWrapper} from "./IconWrapper.tsx";

export function Google(fullProps: IconProps) {
  const {svgProps: props, ...restProps} = fullProps

  return (

    <IconWrapper icon={
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
      >
        <path
          fill="#F2F2F2"
          fillOpacity="0.4"
          d="M5.931 21.66l9.2-5.193-1.976-2.187-7.223 7.38zM2.571 2.547c-.106.19-.171.408-.171.65v18.15c0 .337.126.625.316.853l9.152-9.348L2.572 2.547zm18.405 8.831l-3.208-1.81-3.266 3.337 2.341 2.595 4.133-2.332a1.135 1.135 0 00.624-.895 1.135 1.135 0 00-.624-.895zm-4.938-2.787L4.974 2.346l8.24 9.132 2.824-2.887z"
        ></path>
      </svg>
    }
                 {...restProps}
    />

  );
}

