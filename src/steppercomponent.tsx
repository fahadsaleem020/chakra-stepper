import { StepperContent } from "./steppercontent";
import { useMediaQuery } from "@chakra-ui/react";
import { StepperBody } from "./stepperbody";
import { useStepper } from "./usestepper";
import { Stepper } from "./stepper";
import { Steps } from "./steps";
import { Step } from "./step";
import React from "react";

const StepperComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");

  const { isStepActive, goToStep, state, data, next, previous } = useStepper([
    "one",
    "two",
    "three",
  ]);

  return (
    <Stepper
      h="xs"
      mt="5"
      mx="auto"
      border="1px"
      rounded="3xl"
      vertical={isMobile}
      maxW="container.md"
      borderColor={"gray.100"}
      shadow="0px 223px 89px rgba(0, 0, 0, 0.01), 0px 126px 75px rgba(0, 0, 0, 0.03), 0px 56px 56px rgba(0, 0, 0, 0.04), 0px 14px 31px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)"
    >
      <Steps>
        <Step
          clickable={() => goToStep("one")}
          label={{ title: "One" }}
          state={state}
          stepKey="one"
          withTrack
        />
        <Step
          animate
          clickable={() => goToStep("two")}
          label={{ title: "Two" }}
          state={state}
          stepKey="two"
          withTrack
        />
        <Step
          clickable={() => goToStep("three")}
          label={{ title: "Three" }}
          state={state}
          stepKey="three"
        />
      </Steps>
      <StepperContent
        bg="gray.50"
        rounded="lg"
        border="1px"
        borderColor="gray.200"
      >
        <StepperBody show={isStepActive("one")}>
          one {data}
          <br />
          <br />
          <button onClick={() => next()}>next</button>
          <button onClick={() => previous()}>previous</button>
        </StepperBody>
        <StepperBody show={isStepActive("two")}>
          two {data}
          <br />
          <br />
          <button onClick={() => next()}>next</button>
          <button onClick={() => previous()}>previous</button>
        </StepperBody>
        <StepperBody show={isStepActive("three")}>
          three {data}
          <br />
          <br />
          <button onClick={() => next()}>next</button>
          <button onClick={() => previous()}>previous</button>
        </StepperBody>
      </StepperContent>
    </Stepper>
  );
};
