import { BoxProps, Box } from "@chakra-ui/react";
import React, { FC } from "react";

export const StepperContent: FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box w="full" h="full" {...rest}>
      {children}
    </Box>
  );
};
