import type {
  CSSProperties,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import type { FieldError } from "react-hook-form";

interface ComponentCommonProps {
  className: string;
  style: CSSProperties;
}

type CustomComponentProps = Partial<ComponentCommonProps>;

interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
  inputWrapperClassName: string;
  inputClassName: string;
  inputTitle: string;
  required: boolean;
  register: object;
  rightIcon: ReactNode;
  error: FieldError;
  errorMessage: string;
}

type InputProps = Partial<InputProperties> & CustomComponentProps;

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
  block: boolean;
  size: "sm" | "md" | "lg";
}

type ButtonProps = Partial<ButtonProperties> & CustomComponentProps;

type GitHubButtonProperties = {
  title: string;
};

type GitHubButtonProps = Partial<GitHubButtonProperties> & CustomComponentProps;

export type {
  CustomComponentProps,
  InputProps,
  ButtonProps,
  GitHubButtonProps,
};
