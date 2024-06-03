import React from "react";
import { useFormStatus } from "react-dom";

type ButtonProps = {

} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  const { pending } = useFormStatus();

  return <button disabled={pending} {...props}>{children}</button>
};
