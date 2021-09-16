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
import { MiniMap } from "../../components/MiniMap";
import { FirstAccessForm } from "../../components/Modals/FirstAccessForm";

const Profile = () => {
  const { signOut } = useAuth();
  const { location, setLocation } = useLocation();
  

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
      <Flex flexDirection="column">
      <FirstAccessForm/>
        <Flex>
            <Center display={["block", "block", "none"]} ml="5" fontSize="2xl" color="green.400">
              LOGO
            </Center>
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
