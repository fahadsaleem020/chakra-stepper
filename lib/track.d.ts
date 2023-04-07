import { BoxProps } from "@chakra-ui/react";
import { FC } from "react";
export interface TrackProps {
    isFinished?: boolean;
    trackThickness?: "3pt" | "1pt" | "2pt";
    animate?: boolean | BoxProps["transition"];
    trackBackgroundColor?: BoxProps["bgColor"];
    trackForeGroundColor?: BoxProps["bgColor"];
}
type TrackComponent = FC<TrackProps>;
export declare const Track: TrackComponent;
export {};
