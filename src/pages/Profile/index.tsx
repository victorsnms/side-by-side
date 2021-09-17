import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { UserInfo } from "../../components/UserInfo";
import LogoImg from "../../assets/images/marcador-recycle2.png";
import { ButtonSignout } from "../../components/ButtonSignout";
import { MiniMap } from "../../components/MiniMap";
import { EventsCarousel } from "../../components/EventsCarousel";
import { FirstAccessForm } from "../../components/Modals/FirstAccessForm";
import { useUser } from "../../providers/UserContext";

export const Profile = () => {
  const { userData: user } = useUser();
  
  return (
    <Box mb="100px" overflow="hidden">
      <Flex w="100vw" align="center" justify="space-between">
        <Flex ml="12px">
          <Image src={LogoImg} w="12px" h="18px" mt="2px" opacity="40%" />
          <Text
            pl="0.2em"
            fontSize="16px"
            fontWeight="bold"
            color="green.400"
            opacity="30%"
          >
            Side by Side
          </Text>
        </Flex>
        <ButtonSignout />
      </Flex>
        
      <BottomMenu />
      <DashboardMenu />

      <Flex flexDirection="column" pt="7px">
        {!user.location && <FirstAccessForm />}
        <Box mt={{ base: "38px", lg: "10px" }} ml={["0", "2%", "20%", "10%"]}>
          <UserInfo />

          <Flex justify="center">
            <Box
              ml={{ base: "0", lg: "-60px" }}
              mt="60px"
              w={{ base: "90vw", lg: "62vw" }}
              h={"200px"}
              position={"relative"}
            >
              <MiniMap />
            </Box>
          </Flex>

          <Box
            w={{ base: "100vw", lg: "75%" }}
            ml={{ lg: "90px" }}
            mt="50px"
            mb={{ base: "0", lg: "50px" }}
          >
            <Heading
              as="h3"
              fontSize="26px"
              pl={{ lg: "60px" }}
              textAlign="center"
            >
              MY EVENTS
            </Heading>
            <EventsCarousel />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
