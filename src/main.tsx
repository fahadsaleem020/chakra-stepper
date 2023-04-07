import React from "react";
import ReactDOM from "react-dom/client";
import StepperComponent from "./steppercomponent";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <StepperComponent />
    </ChakraProvider>
  </React.StrictMode>
);
