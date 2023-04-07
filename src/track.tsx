import { BoxProps, Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { useStepperTheme } from "./stepper";

export interface TrackProps {
  isFinished?: boolean;
  trackThickness?: "3pt" | "1pt" | "2pt";
  animate?: boolean | BoxProps["transition"];
  trackBackgroundColor?: BoxProps["bgColor"];
  trackForeGroundColor?: BoxProps["bgColor"];
}

type TrackComponent = FC<TrackProps>;
export const Track: TrackComponent = ({
  isFinished,
  trackThickness = "2pt",
  animate,
  trackBackgroundColor,
  trackForeGroundColor,
}) => {
  const { vertical, circlePlacement } = useStepperTheme();
  const parentVStyles: BoxProps | undefined = vertical
    ? {
        w: trackThickness,
      }
    : undefined;
  const chidVStyles: BoxProps | undefined = vertical
    ? { w: "full", h: isFinished ? "full" : "0%" }
    : undefined;

  return (
    <Box
      flex={1}
      rounded="full"
      overflow="hidden"
      h={trackThickness}
      position="relative"
      bg={trackBackgroundColor}
      ml={vertical ? "5" : undefined}
      mr={vertical && circlePlacement === "right" ? "5" : undefined}
      {...parentVStyles}
    >
      <Box
        position="absolute"
        left={0}
        h="full"
        w={isFinished ? "100%" : "0%"}
        bg={trackForeGroundColor}
        rounded="full"
        transition={typeof animate === "boolean" ? "all 300ms" : animate}
        {...chidVStyles}
      />
    </Box>
  );
};
