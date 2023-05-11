import { BoxProps, LayoutProps } from "@chakra-ui/react";
import { FC } from "react";
export interface TrackProps {
    animate?: boolean | BoxProps["transition"];
    trackBackgroundColor?: BoxProps["bgColor"];
    trackForeGroundColor?: BoxProps["bgColor"];
    trackThickness?: LayoutProps["w"];
    isFinished?: boolean;
}
type TrackComponent = FC<TrackProps>;
export declare const Track: TrackComponent;
export {};
