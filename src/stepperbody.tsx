import React, { FC, PropsWithChildren } from "react";

export const StepperBody: FC<PropsWithChildren & { show: boolean }> = ({
  children,
  show,
}) => {
  return show ? <>{children}</> : null;
};
