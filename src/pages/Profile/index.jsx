import { Button } from "@chakra-ui/button";
import { Box, Flex, Spacer, Image, Text, useBreakpointValue, Heading } from "@chakra-ui/react";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { useAuth } from "../../providers/AuthContext";
import { BiLogOut } from "react-icons/bi";
import Icon from "@chakra-ui/icon";
import { UserInfo } from "../../components/UserInfo";
import { useLocation } from "../../providers/LocationContext";
import { useEffect } from "react";
import { EventsCarousel } from "../../components/EventsCarousel";
import LogoImg from "../../assets/images/marcador-recycle2.png";
import { MiniMap } from "../../components/MiniMap";
import { FirstAccessForm } from "../../components/Modals/FirstAccessForm";
import { useUser } from "../../providers/UserContext";

const Profile = () => {
  const { signOut } = useAuth();
  const { location, setLocation } = useLocation();
  const display = useBreakpointValue({ base: "flex", lg: "none" })
  const { userData: user } = useUser()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <Box>
      <BottomMenu />
      <DashboardMenu />
      <Flex position="absolute" top="14px" left="12px" display={display}>
        <Image src={LogoImg} w="12px" h="18px" mt="2px" opacity="40%" />
        <Text pl="0.2em" fontSize="16px" fontWeight="bold" color="green.400" opacity="30%">Side by Side</Text>
      </Flex>

      <Flex flexDirection="column">
        {!user.location && <FirstAccessForm />}
        <Flex>
          <Spacer />
          <Button
            fontSize={["lg", "xl", "2xl"]}
            fontWeight="300"
            bg="grey.50"
            color="green.400"
            h="38px"
            borderRadius="5px"
            _hover={{ color: "green.300" }}
            _focus={{}}
            margin={["2", "3", "4", "5"]}
            onClick={signOut}
            p="0"
            justifyContent="right"
          >
            <Icon fontSize="2xl" as={BiLogOut} />
          </Button>
        </Flex>
        <Box>
          <UserInfo />
        </Box>
      </Flex>

      <Box w="75vw" m="0 auto" mt="45px">
        <Heading as="h3" fontSize="20px" pl="20px">My Events</Heading>
        <EventsCarousel/>
      </Box>
      <Flex justifyContent="center">
        <Box
          mt="38px"
          ml={["2%", "2%", "10%", "10%"]}
          border={"1px solid black"}
          w={"65%"}
          h={"200px"}
          position={"relative"}
        >
          <MiniMap />
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
