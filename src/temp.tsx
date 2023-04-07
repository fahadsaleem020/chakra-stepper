// import {
//   Flex,
//   Box,
//   Text,
//   BoxProps,
//   FlexProps,
//   IconButton,
//   HeadingProps,
//   IconButtonProps,
// } from "@chakra-ui/react";
// import React, {
//   FC,
//   useState,
//   useEffect,
//   useContext,
//   ReactElement,
//   createContext,
//   PropsWithChildren,
// } from "react";
// import { IconBaseProps } from "react-icons";
// import { MdCheck } from "react-icons/md";

// export const Steps: FC<FlexProps> = ({ children, ...props }) => {
//   const { vertical, circlePlacement, trackGap } = useStepperTheme();
//   const responsive: FlexProps | undefined = vertical
//     ? {
//         flexDir: "column",
//       }
//     : undefined;
//   return (
//     <Flex
//       gap={trackGap ?? "2"}
//       alignItems={
//         vertical && circlePlacement === "right"
//           ? "end"
//           : vertical && circlePlacement === "left"
//           ? "start"
//           : "center"
//       }
//       {...responsive}
//       {...props}
//     >
//       {children}
//     </Flex>
//   );
// };

// interface TrackProps {
//   isFinished?: boolean;
//   trackThickness?: "3pt" | "1pt" | "2pt";
//   animate?: boolean | BoxProps["transition"];
//   trackBackgroundColor?: BoxProps["bgColor"];
//   trackForeGroundColor?: BoxProps["bgColor"];
// }

// type TrackComponent = FC<TrackProps>;
// export const Track: TrackComponent = ({
//   isFinished,
//   trackThickness = "2pt",
//   animate,
//   trackBackgroundColor,
//   trackForeGroundColor,
// }) => {
//   const { vertical, circlePlacement } = useStepperTheme();
//   const parentVStyles: BoxProps | undefined = vertical
//     ? {
//         w: trackThickness,
//       }
//     : undefined;
//   const chidVStyles: BoxProps | undefined = vertical
//     ? { w: "full", h: isFinished ? "full" : "0%" }
//     : undefined;

//   return (
//     <Box
//       flex={1}
//       rounded="full"
//       overflow="hidden"
//       h={trackThickness}
//       position="relative"
//       bg={trackBackgroundColor}
//       ml={vertical ? "5" : undefined}
//       mr={vertical && circlePlacement === "right" ? "5" : undefined}
//       {...parentVStyles}
//     >
//       <Box
//         position="absolute"
//         left={0}
//         h="full"
//         w={isFinished ? "100%" : "0%"}
//         bg={trackForeGroundColor}
//         rounded="full"
//         transition={typeof animate === "boolean" ? "all 300ms" : animate}
//         {...chidVStyles}
//       />
//     </Box>
//   );
// };

// const StepperContext = createContext<{
//   vertical: boolean;
//   circlePlacement: "left" | "right";
//   trackGap: FlexProps["gap"];
// }>({ vertical: false, circlePlacement: "left", trackGap: "5" });
// const useStepperTheme = () => useContext(StepperContext);

// export const Stepper: FC<
//   PropsWithChildren & {
//     vertical?: boolean;
//     circlePlacement?: "left" | "right";
//     trackGap?: FlexProps["gap"];
//   } & FlexProps
// > = ({
//   children,
//   vertical = false,
//   circlePlacement = "left",
//   trackGap,
//   ...wrapperProps
// }) => {
//   const [v, setV] = useState(vertical);
//   const [g, setG] = useState(trackGap);
//   const [p, setP] = useState<"left" | "right">(circlePlacement);

//   useEffect(() => {
//     setV(vertical);
//   }, [vertical]);

//   useEffect(() => {
//     setG(trackGap);
//   }, [trackGap]);

//   useEffect(() => {
//     setP(circlePlacement);
//   }, [circlePlacement]);

//   return (
//     <StepperContext.Provider
//       value={{ vertical: v, circlePlacement: p, trackGap: g }}
//     >
//       <StepperWrapper {...wrapperProps}>{children}</StepperWrapper>
//     </StepperContext.Provider>
//   );
// };

// export const Step: FC<
//   {
//     isLoading?: boolean;
//     isError?: boolean;
//     isActive: boolean;
//     isFinished: boolean;
//     label?: Partial<{
//       title: string;
//       description: string;
//     }>;
//     labelColor?: Partial<{
//       title: HeadingProps["color"];
//       description: HeadingProps["color"];
//     }>;
//     labelFontSize?: Partial<{
//       title: HeadingProps["size"];
//       description: HeadingProps["size"];
//     }>;
//     icon?: Partial<{
//       active: ReactElement;
//       inactive: ReactElement;
//       finished: ReactElement;
//       error: ReactElement;
//     }>;
//     iconSize?: IconBaseProps["size"];
//     iconColor?: IconBaseProps["color"];
//     circleRadius?: IconButtonProps["rounded"];
//     circleSize?: IconButtonProps["size"];
//     circleColorScheme?: IconButtonProps["colorScheme"];
//     withTrack?: boolean;
//     clickable?: () => void;
//   } & Pick<
//     TrackProps,
//     | "trackThickness"
//     | "animate"
//     | "trackBackgroundColor"
//     | "trackForeGroundColor"
//   >
// > = ({
//   label,
//   labelColor,
//   labelFontSize,
//   icon,
//   iconColor,
//   iconSize,
//   withTrack,
//   trackThickness,
//   isActive,
//   isFinished,
//   animate,
//   circleSize,
//   circleRadius,
//   circleColorScheme,
//   trackBackgroundColor,
//   trackForeGroundColor,
//   clickable,
//   isLoading,
//   isError,
// }) => {
//   const { circlePlacement } = useStepperTheme();
//   let buttonStyles: IconButtonProps;

//   if (isFinished) {
//     buttonStyles = {
//       variant: "solid",
//       colorScheme: circleColorScheme ?? "blue",
//       rounded: circleRadius ?? "full",
//       "aria-label": "step",
//       icon: icon?.finished ?? (
//         <MdCheck size={iconSize ?? 20} color={iconColor} />
//       ),
//     };
//   } else if (isActive) {
//     buttonStyles = {
//       variant: "outline",
//       colorScheme: isError ? "red" : circleColorScheme ?? "blue",
//       rounded: circleRadius ?? "full",
//       "aria-label": "step",
//       icon: isError ? icon?.error : icon?.active,
//     };
//   } else {
//     buttonStyles = {
//       colorScheme: "gray",
//       rounded: circleRadius ?? "full",
//       "aria-label": "step",
//       icon: icon?.inactive,
//     };
//   }

//   return (
//     <>
//       <Flex
//         onClick={clickable}
//         gap={2}
//         alignItems="center"
//         justifyContent="space-between"
//         cursor={clickable ? "pointer" : "default"}
//       >
//         <IconButton
//           isLoading={isLoading}
//           order={circlePlacement === "right" ? 2 : 1}
//           as="div"
//           _hover={{}}
//           _active={{}}
//           size={circleSize}
//           cursor={clickable ? "pointer" : "default"}
//           {...buttonStyles}
//         />
//         {label?.title && label?.description ? (
//           <Flex
//             flexDir="column"
//             alignItems={circlePlacement === "right" ? "end" : undefined}
//             order={circlePlacement === "right" ? 1 : 2}
//           >
//             <Text
//               as={"h2"}
//               lineHeight={1}
//               fontSize={labelFontSize?.title}
//               fontWeight="semibold"
//               color={labelColor?.title}
//             >
//               {label.title}
//             </Text>

//             <Text
//               whiteSpace="nowrap"
//               as={"h3"}
//               fontSize={labelFontSize?.description ?? "sm"}
//               color={labelColor?.description}
//             >
//               {label?.description}
//             </Text>
//           </Flex>
//         ) : (
//           label?.title && (
//             <Text
//               order={circlePlacement === "right" ? 1 : 2}
//               as={"h2"}
//               lineHeight={1}
//               fontSize={labelFontSize?.title ?? "md"}
//               fontWeight="semibold"
//               color={labelColor?.title ?? isError ? "red.600" : undefined}
//             >
//               {label?.title}
//             </Text>
//           )
//         )}
//       </Flex>
//       {withTrack && (
//         <Track
//           isFinished={isFinished}
//           animate={animate}
//           trackThickness={trackThickness}
//           trackBackgroundColor={trackBackgroundColor ?? "gray.100"}
//           trackForeGroundColor={trackForeGroundColor ?? "blue.500"}
//         />
//       )}
//     </>
//   );
// };

// const StepperWrapper: FC<FlexProps> = ({ children, ...rest }) => {
//   const { vertical } = useStepperTheme();
//   return (
//     <Flex gap={5} p={5} flexDir={vertical ? "row" : "column"} {...rest}>
//       {children}
//     </Flex>
//   );
// };

// export const StepperContent: FC<BoxProps> = ({ children, ...rest }) => {
//   return (
//     <Box w="full" h="full" {...rest}>
//       {children}
//     </Box>
//   );
// };

// export const StepperBody: FC<
//   PropsWithChildren & { show: boolean; hide: boolean }
// > = ({ children, show, hide }) => {
//   if (hide) return null;
//   else if (show) return <>{children}</>;
//   else return null;
// };
