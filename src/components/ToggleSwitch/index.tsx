import { Box, HStack, Text, Flex } from "@chakra-ui/react";
import { useState, Dispatch} from "react";
import { useFormContext } from "../../providers/FormContext";

interface ToggleSwitchProps {
  options: string[];
  setSwitchOption: Dispatch<React.SetStateAction<boolean>>;
  switchOption: boolean;
}

export const ToggleSwitch = ({
  options,
  setSwitchOption,
  switchOption,
}: ToggleSwitchProps) => {
  const { formOption, setFormOption } = useFormContext();
  const [isLeft, setIsLeft] = useState(
    formOption === options[0] ? true : false
  );
  const [position, setPosition] = useState(isLeft ? "-2%" : "46%");
  const [option, setOption] = useState(
    formOption === options[0] ? options[0] : options[1]
  );

  const handleMovement = () => {
    if (formOption === options[0]) {
      setFormOption(options[1]);
      setIsLeft(false);
      setPosition("46%");
      setOption(options[1]);
    } else {
      setFormOption(options[0]);
      setIsLeft(true);
      setPosition("-2%");
      setOption(options[0]);
    }
    setSwitchOption(!switchOption);
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
          <Flex
            fontSize="sm"
            w="50%"
            h="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="label">{options[0]}</Text>
          </Flex>
          <Flex
            fontSize="sm"
            w="50%"
            h="100%"
            justifyContent="center"
            alignItems="center"
          >
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
