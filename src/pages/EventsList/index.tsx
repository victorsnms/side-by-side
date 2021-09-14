import { EventCard } from "../../components/EventCard";
import { DashboardMenu } from "../../components/DashboardMenu";
import { Flex, Box, Heading } from "@chakra-ui/layout";

export const EventsList = () => {
  return (
    <Box pl="125px" w="100vw" h="100vh" overflowX="hidden">
      <DashboardMenu />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading
          as="h2"
          textAlign="center"
          fontSize="24px"
          color="black"
          mb="1em"
          mt="1em"
        >
          Events List
        </Heading>

        <Flex w="85vw" wrap="wrap" justify="center">
          <Box m="0.5em">
            <EventCard />
          </Box>
          <Box m="0.5em">
            <EventCard />
          </Box>
          <Box m="0.5em">
            <EventCard />
          </Box>
          <Box m="0.5em">
            <EventCard />
          </Box>
          <Box m="0.5em">
            <EventCard />
          </Box>
          <Box m="0.5em">
            <EventCard />
          </Box>
          <Box m="0.5em">
            <EventCard />
          </Box>
          <Box m="0.5em">
            <EventCard />
          </Box>
          <Box m="0.5em">
            <EventCard />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};