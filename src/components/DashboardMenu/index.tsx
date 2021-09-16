import { Box, VStack, Icon, Text, Image } from "@chakra-ui/react";
import { BiHome, BiBookOpen, BiMap, BiGroup, BiTrophy } from "react-icons/bi";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/biglogow.png";

export const DashboardMenu = () => {
  return (
    <Box
      p="4"
      w="125px"
      position="fixed"
      left="0"
      bottom="0"
      bg="green.400"
      color="white"
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      z-index="10"
    >
      <Box
        position="absolute"
        top="2rem"
        left="50%"
        transform="translateX(-50%)"
      >
        <Image src={LogoImg} />
      </Box>
      <VStack spacing="5">
        <Box textAlign="center" as={Link} to="/dashboard">
          <Icon fontSize="3xl" as={BiHome} />
          <Text>Profile</Text>
        </Box>
        <Box textAlign="center" as={Link} to="/info">
          <Icon fontSize="3xl" as={BiBookOpen} />
          <Text>Info</Text>
        </Box>
        <Box textAlign="center" as={Link} to="/map">
          <Icon fontSize="3xl" as={BiMap} />
          <Text>Map</Text>
        </Box>
        <Box textAlign="center" as={Link} to="/events">
          <Icon fontSize="3xl" as={BiGroup} />
          <Text>Events</Text>
        </Box>
        <Box textAlign="center" as={Link} to="/badges">
          <Icon fontSize="3xl" as={BiTrophy} />
          <Text>Badges</Text>
        </Box>
      </VStack>
    </Box>
  );
};
