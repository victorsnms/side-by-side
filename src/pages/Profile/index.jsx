import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { useAuth } from "../../providers/AuthContext";
import { BiLogOut } from "react-icons/bi";
import Icon from "@chakra-ui/icon";
import { UserInfo } from "../../components/UserInfo";
import { useLocation } from "../../providers/LocationContext";
import { useEffect } from "react";

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
      {isMobile ? <BottomMenu /> : <DashboardMenu />}
      <Flex flexDirection="column">
        <Flex>
          {isMobile ? (
            <Center ml="5" fontSize="2xl" color="green.400">
              LOGO
            </Center>
          ) : (
            <></>
          )}
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
        <Box mt="38px" ml={["2%", "2%", "20%", "10%"]}>
          <UserInfo />
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
