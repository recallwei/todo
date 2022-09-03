import { type SvgPropsType } from ".";
import clsx from "clsx";

export default function DeleteTime({
  width = "24",
  height = "24",
  className,
  onClick,
}: SvgPropsType): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={clsx("fill-black", className)}
      onClick={onClick}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <polygon points="15,2 11.5,2 10.5,1 5.5,1 4.5,2 1,2 1,4 15,4" />
          <path d="M16,9c-0.7,0-1.37,0.1-2,0.29V5H2v12c0,1.1,0.9,2,2,2h5.68c1.12,2.36,3.53,4,6.32,4c3.87,0,7-3.13,7-7 C23,12.13,19.87,9,16,9z M9,16c0,0.34,0.03,0.67,0.08,1H4V7h8v3.26C10.19,11.53,9,13.62,9,16z M16,21c-2.76,0-5-2.24-5-5 s2.24-5,5-5s5,2.24,5,5S18.76,21,16,21z" />
          <polygon points="16.5,12 15,12 15,17 18.6,19.1 19.4,17.9 16.5,16.2" />
        </g>
      </g>
    </svg>
  );
}

// Google Material Icons - Auto Delete
