import clsx from "clsx";

import { ButtonProps } from "@interfaces";

export default function Button({
  icon,
  title,
  onClick,
  className,
  style,
  block = false,
  disabled = false,
  type,
  size = "md",
  color = "default",
}: ButtonProps): JSX.Element {
  return (
    <button
      style={style}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "cursor-pointer rounded-md text-center font-medium text-white shadow-sm transition-colors hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300",
        block ? "w-full" : "w-fit",
        size === "sm" && "py-1 px-1.5 text-xs",
        size === "md" && "py-1.5 px-2.5 text-sm",
        size === "lg" && "text-md py-2 px-3.5",
        color === "default" &&
          "bg-gradient-to-br from-emerald-300 to-emerald-600 shadow-emerald-800",
        color === "danger" &&
          "bg-gradient-to-br from-red-300 to-red-400 shadow-red-600",
        className
      )}
      type={type}
    >
      <span
        className={clsx(
          "flex items-center justify-center gap-1 whitespace-nowrap",
          size === "sm" && "gap-0.5",
          size === "md" && "gap-0.5",
          size === "lg" && "gap-1"
        )}
      >
        {icon}
        {title}
      </span>
    </button>
  );
}
