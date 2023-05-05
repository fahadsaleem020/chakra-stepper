import React, { FC, PropsWithChildren } from "react";

type StepperBodyComponent = FC<PropsWithChildren & { show: boolean }>;
export const StepperBody: StepperBodyComponent = ({ children, show }) => {
  return show ? <>{children}</> : null;
};
