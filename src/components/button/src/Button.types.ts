import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  variant?: 'solid' | 'outline' | 'link';
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}