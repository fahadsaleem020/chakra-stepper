/**
 * A custom hook that helps manage progress through a series of steps by returning an object containing methods to manage the stepper.
@param {T[]} steps - An array of strings representing the steps to be completed.
@param {T} initialStep - An optional parameter representing the initial step to start with.
@returns {Object} An object containing methods to manage the stepper, including resetting, jumping to a specific step, checking if a step is finished, and marking all steps as finished.
 */
export declare const useStepper: <T extends string>(steps: T[], initialStep?: T | undefined) => {
    reset: () => void;
    goToStep: <D>(step: T, data?: D | undefined) => void;
    isStepFinished: (step: T) => boolean;
    setAllFinished: () => void;
    data: any;
};
