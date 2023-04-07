import React, { FC, PropsWithChildren } from "react";

export const StepperBody: FC<
  PropsWithChildren & { show: boolean; hide: boolean }
> = ({ children, show, hide }) => {
  if (hide) return null;
  else if (show) return <>{children}</>;
  else return null;
};
