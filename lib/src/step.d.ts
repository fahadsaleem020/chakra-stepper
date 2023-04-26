import { HeadingProps, IconButtonProps } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { IconBaseProps } from "react-icons";
import { TrackProps } from "./track";
export declare const Step: FC<{
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
} & Pick<TrackProps, "trackThickness" | "animate" | "trackBackgroundColor" | "trackForeGroundColor">>;
