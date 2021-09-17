import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { UserInfo } from "../../components/UserInfo";
import LogoImg from "../../assets/images/marcador-recycle2.png";
import { ButtonSignout } from "../../components/ButtonSignout";
import { MiniMap } from "../../components/MiniMap";
import { EventsCarousel } from "../../components/EventsCarousel";

export const Profile = () => {
  const display = useBreakpointValue({ base: "flex", lg: "none" });

  return (
    <Box mb="100px" overflow="hidden">
      <Flex w="100vw" align="center" justify="space-between">
        <Flex display={display} ml="12px">
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

      <Flex flexDirection="column" pt="12px">
        <Box mt={{ base: "38px", lg: "20px" }} ml={["2%", "2%", "20%", "10%"]}>
          <UserInfo />

          <Flex justify="center">
            <Box
              ml={{ lg: "-60px" }}
              mt="60px"
              border={"1px solid black"}
              w={{ base: "100vw", lg: "62vw" }}
              h={"200px"}
              position={"relative"}
            >
              <MiniMap />
            </Box>
          </Flex>

          <Box
            w={{ base: "100vw", lg: "75%" }}
            ml={{ lg: "110px" }}
            mt="40px"
            mb={{ base: "100px", lg: "50px" }}
          >
            <Heading
              as="h3"
              fontSize="26px"
              pl={{ lg: "20px" }}
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
