import { Button } from "@chakra-ui/button";
import { Box, Flex, Spacer, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { useAuth } from "../../providers/AuthContext";
import { BiLogOut } from "react-icons/bi";
import Icon from "@chakra-ui/icon";
import { UserInfo } from "../../components/UserInfo";
import { useLocation } from "../../providers/LocationContext";
import { useEffect } from "react";
import LogoImg from "../../assets/images/marcador-recycle2.png";

const Profile = () => {
  const { signOut } = useAuth();
  const { location, setLocation } = useLocation();
  const isMobile = window.innerWidth < 768;
  const display = useBreakpointValue({ base: "flex", lg: "none"})

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
      <Flex position="absolute" top="14px" left="12px" display={display}>
        <Image src={LogoImg} w="12px" h="18px" mt="2px" opacity="40%"/>
        <Text pl="0.2em" fontSize="16px" fontWeight="bold" color="green.400" opacity="30%">Side by Side</Text>
      </Flex>

      {isMobile ? <BottomMenu /> : <DashboardMenu />}
      <Flex flexDirection="column">
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
            <Icon fontSize={["3xl", "4xl", "5xl", "5xl"]} as={BiLogOut} />
          </Button>
        </Flex>
        <Box mt="38px" ml={["2%", "2%", "20%", "10%"]}>
          <UserInfo />
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
