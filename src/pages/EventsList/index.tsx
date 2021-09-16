import { EventCard } from "../../components/EventCard";
import { DashboardMenu } from "../../components/DashboardMenu";
import { Flex, Box, Heading, Image } from "@chakra-ui/react";
import { BottomMenu } from "../../components/BottomMenu";
import { useMarkers } from "../../providers/MarkersContext";
import { useAuth } from "../../providers/AuthContext";
import { useEffect } from "react";
import { useLocation } from "../../providers/LocationContext";
import { haversine } from "../../utils/haversine";
import LogoImg from "../../assets/images/biglogog.png";

export const EventsList = () => {
  const isMobile = window.innerWidth < 768;
  const { allEvents, displayEvents } = useMarkers();
  const { accessToken } = useAuth();
  const { location, setLocation } = useLocation();

  const { lat: userLat, lng: userLng } = location;

  useEffect(() => {
    displayEvents(accessToken);
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <Box pl={{ base: "0", lg: "125px" }} w="90vw" h="100vh" m="0 auto">
      {isMobile ? <BottomMenu /> : <DashboardMenu />}
      <Image src={LogoImg} w="60px" mt="10vh" position="absolute" top="-38px" left="10px" display={{ lg: "none" }} />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading
          as="h2"
          m="5.5rem 0 4rem"
          textTransform="uppercase"
          fontSize="2xl"
        >
          Near Events
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
            allEvents
              .filter(
                (event) =>
                  haversine(userLat, userLng, event.lat, event.lng) < 100 //events under 100km
              )
              .map((event, index) => (
                <Box key={index} m={{ base: "0.2em 0", lg: "0.5em" }}>
                  <EventCard marker={event} />
                </Box>
              ))}
        </Flex>
      </Box>
    </Box>
  );
};
