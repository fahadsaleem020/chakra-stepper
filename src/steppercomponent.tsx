import { useMediaQuery } from "@chakra-ui/react";
import { useStepper } from "./usestepper";
import React, { FC } from "react";
import { MdWarning } from "react-icons/md";
import { Step } from "./step";
import { Stepper } from "./stepper";
import { StepperBody } from "./stepperbody";
import { StepperContent } from "./steppercontent";
import { Steps } from "./steps";

const StepperComponent: FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const { isStepFinished, reset, setAllFinished, goToStep } = useStepper([
    "one",
    "two",
    "three",
  ]);

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
          label={{ title: "step one", description: "optional" }}
          isActive={!isStepFinished("one")}
          isFinished={isStepFinished("one")}
          icon={{ active: <>1</>, error: <MdWarning size={20} /> }}
          withTrack
          clickable={() => goToStep("one")}
        />
        <Step
          clickable={() => goToStep("two")}
          label={{ title: "step two", description: "optional" }}
          icon={{ active: <>2</>, inactive: <>2</> }}
          isActive={isStepFinished("one")}
          isFinished={isStepFinished("two")}
          withTrack
        />
        <Step
          clickable={() => goToStep("three")}
          label={{ title: "step three", description: "optional" }}
          icon={{ active: <>3</>, inactive: <>3</> }}
          isActive={isStepFinished("two")}
          isFinished={isStepFinished("three")}
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
