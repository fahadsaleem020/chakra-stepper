import { FlexProps } from "@chakra-ui/react";
import React, { PropsWithChildren, FC } from "react";
export declare const StepperContext: React.Context<{
    vertical: boolean;
    trackGap: FlexProps["gap"];
    circlePlacement: "left" | "right";
}>;
export declare const useStepperTheme: () => {
    vertical: boolean;
    trackGap: FlexProps["gap"];
    circlePlacement: "left" | "right";
};
type StepperComponent = FC<PropsWithChildren & {
    vertical?: boolean;
    trackGap?: FlexProps["gap"];
    circlePlacement?: "left" | "right";
} & FlexProps>;
export declare const Stepper: StepperComponent;
export {};
