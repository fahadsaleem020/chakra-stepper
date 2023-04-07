import { Button, Center, useMediaQuery } from "@chakra-ui/react";
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
    "details",
    "cart",
    "checkout",
  ]);

  return (
    <Stepper
      trackGap={0}
      border="1px"
      rounded="3xl"
      borderColor={"gray.100"}
      vertical={isMobile}
      maxW="container.md"
      shadow="0px 223px 89px rgba(0, 0, 0, 0.01), 0px 126px 75px rgba(0, 0, 0, 0.03), 0px 56px 56px rgba(0, 0, 0, 0.04), 0px 14px 31px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05)"
      mx="auto"
      h="sm"
    >
      <Steps>
        <Step
          label={{ title: "Details", description: "Provide user details" }}
          isActive={!isStepFinished("details")}
          isFinished={isStepFinished("details")}
          icon={{ active: <>1</>, error: <MdWarning size={20} /> }}
          withTrack
        />
        <Step
          label={{ title: "Cart", description: "Cart details" }}
          icon={{ active: <>2</>, inactive: <>2</> }}
          isActive={isStepFinished("details")}
          isFinished={isStepFinished("cart")}
          withTrack
        />
        <Step
          label={{ title: "Checkout", description: "Payment details" }}
          icon={{ active: <>3</>, inactive: <>3</> }}
          isActive={isStepFinished("cart")}
          isFinished={isStepFinished("checkout")}
        />
      </Steps>
      <StepperContent
        bg="gray.50"
        rounded="lg"
        border="1px"
        borderColor="gray.200"
      >
        <StepperBody
          show={!isStepFinished("details")}
          hide={isStepFinished("cart")}
        >
          <Button onClick={() => goToStep("cart")}>to Cart</Button>
          <Button onClick={setAllFinished}>Set all done</Button>
        </StepperBody>

        <StepperBody
          show={isStepFinished("details")}
          hide={isStepFinished("cart")}
        >
          <Button onClick={() => reset()}>Go Back</Button>
          <Button onClick={() => goToStep("checkout")}>to Checkout</Button>
        </StepperBody>

        <StepperBody
          show={isStepFinished("cart")}
          hide={isStepFinished("checkout")}
        >
          <Button onClick={() => goToStep("cart")}>Go Back</Button>
          <Button onClick={() => setAllFinished()}>Complete</Button>
        </StepperBody>
        <Center h="full">
          <StepperBody
            show={isStepFinished("checkout")}
            hide={!isStepFinished("checkout")}
          >
            All good!
          </StepperBody>
        </Center>
      </StepperContent>
    </Stepper>
  );
};

export default StepperComponent;
