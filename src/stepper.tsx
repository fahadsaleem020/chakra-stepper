import { StepperWrapper } from "./stepperwrapper";
import { FlexProps } from "@chakra-ui/react";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
} from "react";

export const StepperContext = createContext<{
  vertical: boolean;
  trackGap: FlexProps["gap"];
  circlePlacement: "left" | "right";
}>({ vertical: false, circlePlacement: "left", trackGap: "5" });

export const useStepperTheme = () => useContext(StepperContext);

type StepperComponent = FC<
  PropsWithChildren & {
    vertical?: boolean;
    trackGap?: FlexProps["gap"];
    circlePlacement?: "left" | "right";
  } & FlexProps
>;
export const Stepper: StepperComponent = ({
  children,
  vertical = false,
  circlePlacement = "left",
  trackGap,
  ...wrapperProps
}) => {
  const [v, setV] = useState(vertical);
  const [g, setG] = useState(trackGap);
  const [p, setP] = useState<"left" | "right">(circlePlacement);

  useEffect(() => {
    setV(vertical);
  }, [vertical]);

  useEffect(() => {
    setG(trackGap);
  }, [trackGap]);

  useEffect(() => {
    setP(circlePlacement);
  }, [circlePlacement]);

  return (
    <StepperContext.Provider
      value={{ vertical: v, circlePlacement: p, trackGap: g }}
    >
      <StepperWrapper {...wrapperProps}>{children}</StepperWrapper>
    </StepperContext.Provider>
  );
};
