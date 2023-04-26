import { useCallback, useEffect, useReducer, useState } from "react";

type Actions = {
  type: "setallfinished" | "reset" | "jump";
  step: string | string[];
};

const stepperReducer = (
  state: Record<string, boolean>,
  { step, type }: Actions
) => {
  switch (type) {
    case "jump": {
      const keys = Object.keys(state);
      if ((step as string) in state) {
        const filtered = keys.slice(0, keys.indexOf(step as string));
        keys.forEach((val) => (state[val] = false));
        filtered.forEach((val) => {
          state[val] = true;
        });
      }
      return { ...state };
    }

    case "setallfinished": {
      const newState: Record<string, boolean> = {};
      Object.keys(state).forEach((key) => (newState[key] = true));
      return newState;
    }
    case "reset": {
      const newState: Record<string, boolean> = {};
      Object.keys(state).forEach((key) => (newState[key] = false));
      return newState;
    }
  }
};

/**
 * A custom hook that helps manage progress through a series of steps by returning an object containing methods to manage the stepper.
@param {T[]} steps - An array of strings representing the steps to be completed.
@param {T} initialStep - An optional parameter representing the initial step to start with.
@returns {Object} An object containing methods to manage the stepper, including resetting, jumping to a specific step, checking if a step is finished, and marking all steps as finished.
 */
export const useStepper = <T extends string>(steps: T[], initialStep?: T) => {
  const initialData = Object.fromEntries(steps.map((key) => [key, false]));
  const [state, dispatch] = useReducer(stepperReducer, initialData);
  const [data, setData] = useState<any>();

  useEffect(() => {
    initialStep && dispatch({ type: "jump", step: initialStep });
  }, [initialStep]);

  const isStepFinished = useCallback((step: T) => state[step], [state]);

  const goToStep = useCallback(
    <D>(step: T, data?: D) => {
      if (data) setData(data);
      dispatch({ step, type: "jump" });
    },
    [data]
  );

  const setAllFinished = useCallback(
    () => dispatch({ type: "setallfinished", step: Object.keys(state) }),
    []
  );

  const reset = useCallback(
    () => dispatch({ type: "reset", step: Object.keys(state) }),
    []
  );
  return {
    reset,
    goToStep,
    isStepFinished,
    setAllFinished,
    data,
  };
};
