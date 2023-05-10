import { ChakraProvider } from "@chakra-ui/react";
import StepperComponent from "./steppercomponent";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <StepperComponent />
    </ChakraProvider>
  </React.StrictMode>
);
