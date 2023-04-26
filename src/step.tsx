import {
  HeadingProps,
  IconButtonProps,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";
import { IconBaseProps } from "react-icons";
import { MdCheck } from "react-icons/md";
import { useStepperTheme } from "./stepper";
import { TrackProps, Track } from "./track";

export const Step: FC<
  {
    isLoading?: boolean;
    isInvalid?: boolean;
    isActive: boolean;
    isFinished: boolean;
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
      active: ReactElement;
      inactive: ReactElement;
      finished: ReactElement;
      error: ReactElement;
    }>;
    iconSize?: IconBaseProps["size"];
    iconColor?: IconBaseProps["color"];
    circleRadius?: IconButtonProps["rounded"];
    circleSize?: IconButtonProps["size"];
    circleColorScheme?: IconButtonProps["colorScheme"];
    withTrack?: boolean;
    clickable?: () => void;
  } & Pick<
    TrackProps,
    | "trackThickness"
    | "animate"
    | "trackBackgroundColor"
    | "trackForeGroundColor"
  >
> = ({
  label,
  labelColor,
  labelFontSize,
  icon,
  iconColor,
  iconSize,
  withTrack,
  trackThickness,
  isActive,
  isFinished,
  animate,
  circleSize,
  circleRadius,
  circleColorScheme,
  trackBackgroundColor,
  trackForeGroundColor,
  clickable,
  isLoading,
  isInvalid,
}) => {
  const { circlePlacement } = useStepperTheme();
  let buttonStyles: IconButtonProps;

  if (isFinished) {
    buttonStyles = {
      variant: "solid",
      colorScheme: circleColorScheme ?? "blue",
      rounded: circleRadius ?? "full",
      "aria-label": "step",
      icon: icon?.finished ?? (
        <MdCheck size={iconSize ?? 20} color={iconColor} />
      ),
    };
  } else if (isActive) {
    buttonStyles = {
      variant: "outline",
      colorScheme: isInvalid ? "red" : circleColorScheme ?? "blue",
      rounded: circleRadius ?? "full",
      "aria-label": "step",
      icon: isInvalid ? icon?.error : icon?.active,
    };
  } else {
    buttonStyles = {
      colorScheme: "gray",
      rounded: circleRadius ?? "full",
      "aria-label": "step",
      icon: icon?.inactive,
    };
  }

  return (
    <>
      <Flex
        onClick={clickable}
        gap={2}
        alignItems="center"
        justifyContent="space-between"
        cursor={clickable ? "pointer" : "default"}
      >
        <IconButton
          isLoading={isLoading}
          order={circlePlacement === "right" ? 2 : 1}
          as="div"
          _hover={{}}
          _active={{}}
          size={circleSize}
          cursor={clickable ? "pointer" : "default"}
          {...buttonStyles}
        />
        {label?.title && label?.description ? (
          <Flex
            flexDir="column"
            alignItems={circlePlacement === "right" ? "end" : undefined}
            order={circlePlacement === "right" ? 1 : 2}
          >
            <Text
              as={"h2"}
              lineHeight={1}
              fontSize={labelFontSize?.title}
              fontWeight="semibold"
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
              whiteSpace="nowrap"
              as={"h3"}
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
              order={circlePlacement === "right" ? 1 : 2}
              as={"h2"}
              lineHeight={1}
              fontSize={labelFontSize?.title ?? "md"}
              fontWeight="semibold"
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
          isFinished={isFinished}
          animate={animate}
          trackThickness={trackThickness}
          trackBackgroundColor={trackBackgroundColor ?? "gray.100"}
          trackForeGroundColor={trackForeGroundColor ?? "blue.500"}
        />
      )}
    </>
  );
};
