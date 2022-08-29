import { type SvgPropsType } from ".";

export default function Cancel({
  width = "24",
  height = "24",
  className = "fill-black",
  onClick,
}: SvgPropsType): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    >
      <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
    </svg>
  );
}

// Google Material Icons - Cancel