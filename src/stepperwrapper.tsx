import { FlexProps, Flex } from "@chakra-ui/react";
import { useStepperTheme } from "./stepper";
import React, { FC } from "react";

export const StepperWrapper: FC<FlexProps> = ({ children, ...rest }) => {
  const { vertical } = useStepperTheme();
  return (
    <Flex gap={5} p={5} flexDir={vertical ? "row" : "column"} {...rest}>
      {children}
    </Flex>
  );
};
