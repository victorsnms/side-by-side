import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useAuth } from "../../providers/AuthContext";
import { useUser } from "../../providers/UserContext";
import { EventCard } from "../EventCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ButtonCarousel } from "../ButtonCarousel";

export const EventsCarousel = () => {
  const { getUser, userData } = useUser();
  const { id, accessToken } = useAuth();
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getUser(id, accessToken);
  }, []);

  const handleBack = () => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft -= 325;
    }
  };

  const handleForward = () => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft += 325;
    }
  };

  return (
    <Box w={{ base: "95vw", lg: "70vw" }} mt="40px" mb="2rem">
      <Flex
        ref={carousel}
        wrap="nowrap"
        overflowX="scroll"
        overflowY="hidden"
        scrollBehavior="smooth"
        sx={{
          "::-webkit-scrollbar": {
            height: "16px",
            borderRadius: "8px",
            backgroundColor: "white",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "white",
            borderRadius: "8px",
          },
          scrollBehavior: "smooth",
        }}
      >
        {userData.my_events &&
          userData.my_events.map((event, index) => (
            <Box key={index} m="2px 1rem">
              <EventCard marker={event} />
            </Box>
          ))}

        <Flex
          w={{ base: "95vw", lg: "70vw" }}
          position="absolute"
          justify="space-between"
        >
          <ButtonCarousel onClick={handleBack}>
            <IoIosArrowBack />
          </ButtonCarousel>

          <ButtonCarousel onClick={handleForward}>
            <IoIosArrowForward />
          </ButtonCarousel>
        </Flex>
      </Flex>
    </Box>
  );
};
