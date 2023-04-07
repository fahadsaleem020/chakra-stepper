/**
Creates a stepper hook that helps manage progress through a series of steps.
@param {string[]} steps - An array of strings representing the steps to be completed.
@param {string} initialStep - An optional parameter representing the initial step to start with.
@returns An object containing methods to manage the stepper, including resetting, jumping to a specific step, checking if a step is finished, and marking all steps as finished.
*/
export declare const useStepper: (steps: string[], initialStep?: string) => {
    reset: () => void;
    goToStep: (step: string) => void;
    isStepFinished: (id: string) => boolean;
    setAllFinished: () => void;
};
