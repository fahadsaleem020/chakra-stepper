import { BoxProps, Box, LayoutProps } from "@chakra-ui/react";
import { useStepperTheme } from "./stepper";
import React, { FC } from "react";

export interface TrackProps {
  animate?: boolean | BoxProps["transition"];
  trackBackgroundColor?: BoxProps["bgColor"];
  trackForeGroundColor?: BoxProps["bgColor"];
  trackThickness?: LayoutProps["w"];
  isFinished?: boolean;
}

type TrackComponent = FC<TrackProps>;
export const Track: TrackComponent = ({
  isFinished,
  trackThickness = ".1em",
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
