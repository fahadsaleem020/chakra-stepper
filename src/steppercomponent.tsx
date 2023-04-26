import { StepperContent } from "./steppercontent";
import { useMediaQuery } from "@chakra-ui/react";
import { StepperBody } from "./stepperbody";
import { useStepper } from "./usestepper";
import { Stepper } from "./stepper";
import React, { FC } from "react";
import { Steps } from "./steps";
import { Step } from "./step";

const StepperComponent: FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const { isStepFinished, goToStep } = useStepper(["one", "two", "three"]);

  return (
    <Stepper
      trackGap={0}
      mt="5"
      border="1px"
      rounded="3xl"
      borderColor={"gray.100"}
      vertical={isMobile}
      maxW="container.md"
      shadow="0px 223px 89px rgba(0, 0, 0, 0.01), 0px 126px 75px rgba(0, 0, 0, 0.03), 0px 56px 56px rgba(0, 0, 0, 0.04), 0px 14px 31px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)"
      mx="auto"
      h="xs"
    >
      <Steps>
        <Step
          label={{ title: "Signup" }}
          clickable={() => goToStep("one")}
          isActive={!isStepFinished("one")}
          isFinished={isStepFinished("one")}
          icon={{ active: <>1</> }}
          withTrack
          animate
        />
        <Step
          label={{ title: "Verify" }}
          labelColor={{ title: "green" }}
          clickable={() => goToStep("two")}
          isActive={isStepFinished("one")}
          isFinished={isStepFinished("two")}
          withTrack
          animate
          icon={{
            active: <>2</>,
            inactive: <>2</>,
          }}
        />
        <Step
          label={{ title: "Signin" }}
          clickable={() => goToStep("three")}
          isActive={isStepFinished("two")}
          isFinished={isStepFinished("three")}
          icon={{
            active: <>3</>,
            inactive: <>3</>,
          }}
        />
      </Steps>
      <StepperContent
        bg="gray.50"
        rounded="lg"
        border="1px"
        borderColor="gray.200"
      >
        <StepperBody show={!isStepFinished("one")}>step one</StepperBody>
        <StepperBody show={isStepFinished("one") && !isStepFinished("two")}>
          step two
        </StepperBody>
        <StepperBody show={isStepFinished("two") && !isStepFinished("three")}>
          step three
        </StepperBody>
      </StepperContent>
    </Stepper>
  );
};

export default StepperComponent;
