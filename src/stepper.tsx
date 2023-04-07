import { FlexProps } from "@chakra-ui/react";
import React, {
  createContext,
  useContext,
  FC,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";
import { StepperWrapper } from "./stepperwrapper";

export const StepperContext = createContext<{
  vertical: boolean;
  circlePlacement: "left" | "right";
  trackGap: FlexProps["gap"];
}>({ vertical: false, circlePlacement: "left", trackGap: "5" });

export const useStepperTheme = () => useContext(StepperContext);

export const Stepper: FC<
  PropsWithChildren & {
    vertical?: boolean;
    circlePlacement?: "left" | "right";
    trackGap?: FlexProps["gap"];
  } & FlexProps
> = ({
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
