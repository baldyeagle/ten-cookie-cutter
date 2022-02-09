import React from "react";
import { Box, IBoxProps } from "native-base";
import { ColorModeSwitch } from "./ColorModeSwitch";

export type BoxProps = IBoxProps & {};
export const Container = ({ children, ...props }: BoxProps) => {
  return (
    <Box
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      {...props}
    >
      <ColorModeSwitch />
      {children}
    </Box>
  );
};
