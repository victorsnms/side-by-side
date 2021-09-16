import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Spacer, Image } from "@chakra-ui/react";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { useAuth } from "../../providers/AuthContext";
import { BiLogOut } from "react-icons/bi";
import Icon from "@chakra-ui/icon";
import { UserInfo } from "../../components/UserInfo";
import { useLocation } from "../../providers/LocationContext";
import { useEffect } from "react";
import LogoImg from "../../assets/images/biglogog.png";

const Profile = () => {
  const { signOut } = useAuth();
  const { location, setLocation } = useLocation();
  const isMobile = window.innerWidth < 768;

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
      <Image src={LogoImg} w="60px" mt="10vh" position="absolute" top="-38px" left="10px" display={{ lg: "none" }} />

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
