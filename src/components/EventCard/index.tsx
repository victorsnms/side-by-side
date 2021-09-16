import { Text, Flex, Box, Heading } from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiCalendarAlt } from "react-icons/bi";
import { MdGroup } from "react-icons/md";
import { Marker } from "../../types/makerData";
import { useEventDetails } from "../../providers/EventDetailsContext";
import { NearEventDetails } from "../Modals/NearEventDetails";

interface EventCardProps {
  marker: Marker;
}

export const EventCard = ({ marker }: EventCardProps) => {
  const { selectedEvent, event } = useEventDetails();

  return (
    <Box
      w={{ base: "95vw", lg: "370px" }}
      maxW="370px"
      h={{ base: "30vh", lg: "190px" }}
      borderRadius="10px"
      bgImage={marker.picture_url}
      bgSize="cover"
      onClick={() => selectedEvent(marker)}
      _hover={{ border: "1px", borderColor: "brown.200", cursor: "pointer" }}
    >
      <NearEventDetails marker={event} />

      <Flex
        w={{ base: "95vw", lg: "370px" }}
        maxW="370px"
        h={{ base: "30vh", lg: "190px" }}
        direction="column"
        justify="space-between"
        borderRadius="10px"
        bgColor="gray.300"
        p="10px 15px"
        _hover={{ border: "1px", borderColor: "brown.200", cursor: "pointer" }}
      >
        <Heading as="h4" fontSize={{ base: "26px" }} color="white">
          {marker.title}
        </Heading>

        <Flex color="white" justify="space-between" fontSize={{ base: "18px" }}>
          <Flex direction="column">
            <Flex align="center">
              <BiCalendarAlt />
              <Text pl="0.2em">{marker.date}</Text>
            </Flex>
            <Flex align="center">
              <AiOutlineClockCircle />
              <Text pl="0.2em">
                {marker.start_time} - {marker.end_time}
              </Text>
            </Flex>
          </Flex>
          <Flex align="center" alignSelf="flex-end">
            <Text pr="0.2em">
              {marker.participants ? marker.participants.length : "0"}
            </Text>
            <MdGroup />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
