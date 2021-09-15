import { EventCard } from "../../components/EventCard";
import { DashboardMenu } from "../../components/DashboardMenu";
import { Flex, Box, Heading } from "@chakra-ui/layout";
import { BottomMenu } from "../../components/BottomMenu";
import { useMarkers } from "../../providers/MarkersContext";
import { useAuth } from "../../providers/AuthContext";
import { useEffect } from "react";

export const EventsList = () => {
  const isMobile = window.innerWidth < 768;
  const { allEvents, displayEvents } = useMarkers();
  const { accessToken } = useAuth();

  useEffect(() => {
    displayEvents(accessToken);
  }, [])

  return (
    <Box pl={{ base: "0", lg: "125px" }} w="90vw" h="100vh" m="0 auto">
      {isMobile ? <BottomMenu /> : <DashboardMenu />}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading
          as="h2"
          m="5.5rem 0 4rem"
          textTransform="uppercase"
          fontSize="2xl"
        >
          Events List
        </Heading>

        <Flex
          w={{ base: "100vw", lg: "85vw" }}
          direction={{ base: "column", lg: "row" }}
          wrap="wrap"
          justify="center"
          align="center"
          mb={{ base: "110px", lg: "0" }}
        >
          {allEvents &&
            allEvents.map((event, index) => (
              <Box key={index} m={{ base: "0.2em 0", lg: "0.5em" }}>
                <EventCard
                  picture_url={event.picture_url}
                  title={event.title}
                  date={event.date}
                  start_time={event.start_time}
                  end_time={event.end_time}
                  participants={event.participants}
                />
              </Box>
            ))}
        </Flex>
      </Box>
    </Box>
  );
};
