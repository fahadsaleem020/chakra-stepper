import { FlexProps, Flex } from "@chakra-ui/react";
import { useStepperTheme } from "./stepper";
import React, { FC } from "react";

export const Steps: FC<FlexProps> = ({ children, ...props }) => {
  const { vertical, circlePlacement, trackGap } = useStepperTheme();
  const responsive: FlexProps | undefined = vertical
    ? {
        flexDir: "column",
      }
    : undefined;
  return (
    <Flex
      gap={trackGap ?? "2"}
      alignItems={
        vertical && circlePlacement === "right"
          ? "end"
          : vertical && circlePlacement === "left"
          ? "start"
          : "center"
      }
      {...responsive}
      {...props}
    >
      {children}
    </Flex>
  );
};
