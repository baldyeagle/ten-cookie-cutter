import React from "react";
import { Button as NBButton, IButtonProps } from "native-base";

type ButtonProps = IButtonProps & {};
export const Button = (props: ButtonProps) => {
  return <NBButton {...props} />;
};
