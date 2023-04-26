import { FlexProps } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";
export declare const StepperContext: React.Context<{
    vertical: boolean;
    circlePlacement: "left" | "right";
    trackGap: FlexProps["gap"];
}>;
export declare const useStepperTheme: () => {
    vertical: boolean;
    circlePlacement: "left" | "right";
    trackGap: FlexProps["gap"];
};
export declare const Stepper: FC<PropsWithChildren & {
    vertical?: boolean;
    circlePlacement?: "left" | "right";
    trackGap?: FlexProps["gap"];
} & FlexProps>;
