import { StepperContent } from "./steppercontent";
import { Button, useMediaQuery } from "@chakra-ui/react";
import { StepperBody } from "./stepperbody";
import { useStepper } from "./usestepper";
import { Stepper } from "./stepper";
import React, { FC } from "react";
import { Steps } from "./steps";
import { Step } from "./step";

const StepperComponent: FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  const { isStepFinished, goToStep, data } = useStepper([
    "one",
    "two",
    "three",
  ]);

  return (
    <Stepper
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
          label={{ title: "One" }}
          clickable={() => goToStep("one", "log one")}
          isActive={!isStepFinished("one")}
          isFinished={isStepFinished("one")}
          icon={{ active: <>1</> }}
          withTrack
          animate
        />
        <Step
          label={{ title: "Two" }}
          clickable={() => goToStep("two", "log two")}
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
          label={{ title: "Three" }}
          clickable={() => goToStep("three", "log three")}
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
        <StepperBody show={!isStepFinished("one")}>
          <Test goToStep={goToStep} />
        </StepperBody>
        <StepperBody show={isStepFinished("one") && !isStepFinished("two")}>
          {data}
        </StepperBody>
        <StepperBody show={isStepFinished("two") && !isStepFinished("three")}>
          {data}
          <TestComponent data={data} />
        </StepperBody>
      </StepperContent>
    </Stepper>
  );
};

const Test: FC<{ goToStep: (step: any, data?: any) => void }> = ({
  goToStep,
}) => {
  return <Button onClick={() => goToStep("three", "test data")}>test</Button>;
};

const TestComponent: FC<{ data: any }> = ({ data }) => {
  return <>from component: {data}</>;
};

export default StepperComponent;
