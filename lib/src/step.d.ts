import { IconButtonProps, HeadingProps } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { IconBaseProps } from "react-icons";
import { TrackProps } from "./track";
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
export declare const Step: StepComponent;
export {};
