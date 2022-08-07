import { type SvgProps } from ".";
import { useTranslation } from "react-i18next";

export default function Moon({
  width = "24",
  height = "24",
  className = "fill-black",
  onClick,
}: SvgProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <div title={t("SWITCH.TO.LIGHT.MODE")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={className}
        onClick={onClick}
      >
        <path d="M13 24C6.37965 24 1 18.6154 1 12C1 5.38455 6.38455 0 13 0C13.4021 0 13.8042 0.0196158 14.2064 0.0588476C14.5595 0.0931753 14.8684 0.313854 15.0155 0.632611C15.1626 0.951369 15.1332 1.32897 14.9371 1.62321C13.8092 3.28075 13.2109 5.21782 13.2109 7.22354C13.2109 12.3727 17.0703 16.649 22.1949 17.159C22.548 17.1933 22.857 17.414 23.0041 17.7327C23.1561 18.0515 23.1218 18.4291 22.9256 18.7233C20.6796 22.0286 16.9722 24 13 24V24ZM12.387 2.03024C7.16428 2.349 3.01062 6.69881 3.01062 12C3.01062 17.5072 7.49285 21.9894 13 21.9894C15.7658 21.9894 18.3747 20.8418 20.2481 18.8655C17.9824 18.2918 15.9277 17.0609 14.3241 15.3053C12.3085 13.0887 11.1953 10.2248 11.1953 7.23335C11.2002 5.41398 11.6073 3.64365 12.387 2.03024Z" />
      </svg>
    </div>
  );
}
