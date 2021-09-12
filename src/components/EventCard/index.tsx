import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import WaveImage from "../../assets/images/wave.svg";
import { BiCalendarAlt } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdGroup } from "react-icons/md";

export const EventCard = () => {
  return (
    <Box
      bgColor="white"
      boxShadow="md"
      borderRadius="5px"
      w="75%"
      maxW="300px"
      h="180px"
      pt="7px"
      pb="13px"
      //pl="8px"
      //pr="12px"
      bgImage={WaveImage}
      bgSize="100%"
      bgPosition="bottom"
      bgRepeat="no-repeat"
    >
      <Box>
        <Heading
          as="h4"
          fontSize="18px"
          borderBottom="1px"
          borderColor="blue.50"
          pb="0.1em"
          pl="8px"
        >
          Limpeza da praia Fubáz
        </Heading>
      </Box>
      <Flex color="gray.200" fontSize="14px" pl="8px" mt="7px">
        <Text display="flex" alignItems="center" pr="2em">
          <BiCalendarAlt /> 11/09/2021
        </Text>
        <Text display="flex" alignItems="center">
          <AiOutlineClockCircle /> 8h - 12h
        </Text>
      </Flex>
      <Box color="gray.200" fontSize="12px" px="8px" mt="5px">
        <Text>
          Lorem Ipsum is simply dummy text of the printing. Requisitos, Solução,
          Problema e Contato
        </Text>
      </Box>
      <Flex justify="space-between" px="8px" mt="10px">
        <Text
          fontSize="10px"
          alignSelf="flex-end"
          display="flex"
          alignItems="center"
        >
          150 <MdGroup />
        </Text>
        <Button
          w="50%"
          size="sm"
          bgColor="white"
          border="1px"
          borderColor="red.200"
          color="red.200"
        >
          Leave
        </Button>
      </Flex>
    </Box>
  );
};
