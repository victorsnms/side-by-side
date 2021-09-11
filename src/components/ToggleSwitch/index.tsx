import { Box, HStack, Text, Flex } from "@chakra-ui/react";
import { useState, Dispatch } from "react";

interface ToggleSwitchProps {
  options: string[];
  setSwitchOption?: Dispatch<React.SetStateAction<boolean>>;
  switchOption?: boolean;
}

export const ToggleSwitch = ({ options, setSwitchOption,switchOption}: ToggleSwitchProps) => {
  const [isLeft, setIsLeft] = useState(false);
  const [position, setPosition] = useState("");
  const [option, setOption] = useState(options[0]);
  const handleMovement = () => {
    setIsLeft(!isLeft);
    setPosition(isLeft ? "0%" : "43%");
    setOption(isLeft ? options[0] : options[1]);
    setSwitchOption(!switchOption)
  };


  return (
    <>
      <Box
        width="264px"
        borderRadius="50px"
        h="40px"
        boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25);"
        position="relative"
        onClick={handleMovement}

      >
        <HStack w="100%" h="100%">
          <Flex fontSize="sm"w="50%" h="100%" justifyContent="center" alignItems="center">
            <Text as="label">{options[0]}</Text>
          </Flex>
          <Flex fontSize="sm"w="50%" h="100%" justifyContent="center" alignItems="center">
            <Text as="label">{options[1]}</Text>
          </Flex>
          <Flex
            as="span"
            position="absolute"
            left={position}
            w="50%"
            h="90%"
            bg="green.300"
            borderRadius="50px"
            justifyContent="center"
            alignItems="center"
            transition="ease .5s"
            fontSize="md"
          >
            <Text color="white" fontWeight="bold">
              {option}
            </Text>
          </Flex>
        </HStack>
      </Box>
    </>
  );
};
