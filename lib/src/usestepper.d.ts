/// <reference types="react" />
interface Step {
    isActive: boolean;
    isFinished: boolean;
}
export interface State {
    [property: string]: Step;
}
export type UseStepper = ReturnType<typeof useStepper>;
export declare const useStepper: <T extends string>(steps: T[], initialStep?: T) => {
    step: T;
    data: any;
    state: {
        [x: string]: Step;
    };
    reset: () => void;
    setData: import("react").Dispatch<any>;
    goToStep: (step: T, data?: any, force?: boolean) => void;
    isStepActive: (Step: T) => boolean;
    setAllFinished: () => void;
};
export {};
