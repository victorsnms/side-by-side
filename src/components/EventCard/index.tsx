import { Text, Flex, Box, Heading } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCalendarAlt } from "react-icons/bi";
import { MdGroup } from "react-icons/md";
import { Participants } from "../../types/makerData";

interface EventCardProps {
  picture_url?: string;
  title: string;
  date?: string;
  start_time: string;
  end_time: string;
  participants?: Participants[];
}

export const EventCard = ({
  picture_url,
  title,
  date,
  start_time,
  end_time,
  participants,
}: EventCardProps) => {
  return (
    <Box
      w={{ base: "95vw", lg: "370px" }}
      maxW="370px"
      h={{ base: "30vh", lg: "190px" }}
      borderRadius="10px"
      bgImage={picture_url}
      bgSize="cover"
    >
      <Flex
        w={{ base: "95vw", lg: "370px" }}
        maxW="370px"
        h={{ base: "30vh", lg: "190px" }}
        direction="column"
        justify="space-between"
        borderRadius="10px"
        bgColor="gray.300"
        p="10px 15px"
      >
        <Heading as="h4" fontSize={{ base: "26px" }} color="white">
          {title}
        </Heading>

        <Flex color="white" justify="space-between" fontSize={{ base: "18px" }}>
          <Flex direction="column">
            <Flex align="center">
              <BiCalendarAlt />
              <Text pl="0.2em">{date}</Text>
            </Flex>
            <Flex align="center">
              <AiOutlineClockCircle />
              <Text pl="0.2em">
                {start_time} - {end_time}
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" alignSelf="flex-end">
            <Text pr="0.2em">{participants ? participants.length : "0"}</Text>
            <MdGroup />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
