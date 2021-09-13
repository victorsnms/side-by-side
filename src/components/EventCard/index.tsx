import { Text, Flex, Box, Heading } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCalendarAlt } from "react-icons/bi";
import { MdGroup } from "react-icons/md";
import Image from "../../assets/images/bluecuporigin.png";

export const EventCard = () => {
  return (
    <Box w="280px" h="150px" borderRadius="10px" bgImage={Image} bgSize="cover">
      <Flex
        w="280px"
        h="150px"
        direction="column"
        justify="space-between"
        borderRadius="10px"
        bgColor="gray.300"
        p="10px"
      >
        <Heading as="h4" fontSize="18px" color="white">
          Limpeza Praia Fubáz
        </Heading>

        <Flex color="white" justify="space-between" fontSize="14px">
          <Flex direction="column">
            <Flex align="center">
              <BiCalendarAlt /> 
              <Text pl="0.2em">18/09/2021</Text>
            </Flex>
            <Flex align="center">
              <AiOutlineClockCircle /> 
              <Text pl="0.2em">8h - 13h</Text>
            </Flex>
          </Flex>
          <Flex align="center" alignSelf="flex-end">
            <Text pr="0.2em">150</Text>
            <MdGroup />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
