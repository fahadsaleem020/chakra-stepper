import {
  IconButtonProps,
  HeadingProps,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";
import { IconBaseProps } from "react-icons";
import { useStepperTheme } from "./stepper";
import { TrackProps, Track } from "./track";
import { MdCheck } from "react-icons/md";
import { State } from "./usestepper";

type StepState =
  | {
      state: State;
      stepKey: keyof State;
      isActive?: never;
      isFinished?: never;
    }
  | {
      state?: never;
      stepKey?: never;
      isActive: boolean;
      isFinished: boolean;
    };

type StepComponent = FC<
  StepState & {
    isLoading?: boolean;
    isInvalid?: boolean;
    label?: Partial<{
      title: string;
      description: string;
    }>;
    labelColor?: Partial<{
      title: HeadingProps["color"];
      description: HeadingProps["color"];
    }>;
    labelFontSize?: Partial<{
      title: HeadingProps["size"];
      description: HeadingProps["size"];
    }>;
    icon?: Partial<{
      error: ReactElement;
      active: ReactElement;
      inactive: ReactElement;
      finished: ReactElement;
    }>;
    iconSize?: IconBaseProps["size"];
    iconColor?: IconBaseProps["color"];
    circleSize?: IconButtonProps["size"];
    circleRadius?: IconButtonProps["rounded"];
    circleColorScheme?: IconButtonProps["colorScheme"];
    withTrack?: boolean;
    clickable?: () => void;
  } & Pick<
      TrackProps,
      | "trackBackgroundColor"
      | "trackForeGroundColor"
      | "trackThickness"
      | "animate"
    >
>;

export const Step: StepComponent = ({
  icon,
  label,
  state,
  stepKey,
  animate,
  iconSize,
  isActive,
  iconColor,
  clickable,
  isLoading,
  isInvalid,
  withTrack,
  labelColor,
  isFinished,
  circleSize,
  circleRadius,
  labelFontSize,
  trackThickness,
  circleColorScheme,
  trackBackgroundColor,
  trackForeGroundColor,
}) => {
  const { circlePlacement } = useStepperTheme();
  let buttonStyles: IconButtonProps;

  if (state?.[stepKey].isFinished ?? isFinished) {
    buttonStyles = {
      variant: "solid",
      "aria-label": "step",
      rounded: circleRadius ?? "full",
      colorScheme: circleColorScheme ?? "blue",
      icon: icon?.finished ?? (
        <MdCheck size={iconSize ?? 20} color={iconColor} />
      ),
    };
  } else if (state?.[stepKey].isActive ?? isActive) {
    buttonStyles = {
      variant: "outline",
      "aria-label": "step",
      rounded: circleRadius ?? "full",
      icon: isInvalid ? icon?.error : icon?.active,
      colorScheme: isInvalid ? "red" : circleColorScheme ?? "blue",
    };
  } else {
    buttonStyles = {
      colorScheme: "gray",
      "aria-label": "step",
      icon: icon?.inactive,
      rounded: circleRadius ?? "full",
    };
  }

  return (
    <>
      <Flex
        gap={2}
        onClick={clickable}
        alignItems="center"
        justifyContent="space-between"
        cursor={clickable ? "pointer" : "default"}
      >
        <IconButton
          as="div"
          _hover={{}}
          _active={{}}
          size={circleSize}
          isLoading={isLoading}
          cursor={clickable ? "pointer" : "default"}
          order={circlePlacement === "right" ? 2 : 1}
          {...buttonStyles}
        />
        {label?.title && label?.description ? (
          <Flex
            flexDir="column"
            order={circlePlacement === "right" ? 1 : 2}
            alignItems={circlePlacement === "right" ? "end" : undefined}
          >
            <Text
              as={"h2"}
              lineHeight={1}
              fontWeight="semibold"
              fontSize={labelFontSize?.title}
              color={
                labelColor?.title
                  ? labelColor?.title
                  : isInvalid
                  ? "red.600"
                  : undefined
              }
            >
              {label.title}
            </Text>

            <Text
              as={"h3"}
              whiteSpace="nowrap"
              fontSize={labelFontSize?.description ?? "sm"}
              color={
                labelColor?.description
                  ? labelColor?.description
                  : isInvalid
                  ? "red.600"
                  : undefined
              }
            >
              {label?.description}
            </Text>
          </Flex>
        ) : (
          label?.title && (
            <Text
              as={"h2"}
              lineHeight={1}
              fontWeight="semibold"
              fontSize={labelFontSize?.title ?? "md"}
              order={circlePlacement === "right" ? 1 : 2}
              color={
                labelColor?.title
                  ? labelColor?.title
                  : isInvalid
                  ? "red.600"
                  : undefined
              }
            >
              {label?.title}
            </Text>
          )
        )}
      </Flex>
      {withTrack && (
        <Track
          animate={animate}
          isFinished={state?.[stepKey].isFinished ?? isFinished}
          trackThickness={trackThickness}
          trackBackgroundColor={trackBackgroundColor ?? "gray.100"}
          trackForeGroundColor={trackForeGroundColor ?? "blue.500"}
        />
      )}
    </>
  );
};
