import { type SvgPropsType } from ".";
import clsx from "clsx";

export default function ExpandCircle({
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
      <rect fill="none" height="24" width="24" />
      <path d="M15.08,9.59L12,12.67L8.92,9.59L7.5,11l4.5,4.5l4.5-4.5L15.08,9.59z M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8S16.42,20,12,20z" />
    </svg>
  );
}

// Google Material Icons - Expand Circle
