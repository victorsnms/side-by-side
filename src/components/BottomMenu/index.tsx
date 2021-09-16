import { ListItem, UnorderedList, Box, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiHome, BiBookOpen, BiMap, BiGroup, BiTrophy } from "react-icons/bi";

export const BottomMenu = () => {
  return (
    <Box
      display={["block", "block", "none"]}
      zIndex="100"
      as="nav"
      pos="fixed"
      left="0"
      bottom="0"
      w="100%"
      bg="white"
      color="blue.500"
      boxShadow="0 0 1rem rgba(0, 0, 0, 0.25)"
    >
      <UnorderedList
        display="flex"
        justifyContent="space-between"
        pos="relative"
        m="0"
        p="0.5rem 1rem"
      >
        <Box display="flex" gridGap="1rem">
          <ListItem textAlign="center" w="52px" as={Link} to="/dashboard">
            <Icon fontSize={{ base: "2xl", sm: "3xl" }} as={BiHome} />
            <Text fontSize="sm">Profile</Text>
          </ListItem>
          <ListItem textAlign="center" w="52px" as={Link} to="/info">
            <Icon fontSize={{ base: "2xl", sm: "3xl" }} as={BiBookOpen} />
            <Text fontSize="sm">Info</Text>
          </ListItem>
        </Box>
        <ListItem
          pos="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
          left="50%"
          bottom="50%"
          transform="translate(-50%, 32%)"
          w={{ base: "65px", sm: "100px" }}
          h={{ base: "65px", sm: "100px" }}
          borderRadius="50%"
          bg="white"
          flexDirection="column"
          as={Link}
          to="/map"
        >
          <Icon fontSize={{ base: "2xl", sm: "3xl" }} as={BiMap} />
          <Text fontSize="md">Map</Text>
        </ListItem>
        <Box display="flex" gridGap="1rem">
          <ListItem textAlign="center" w="52px" as={Link} to="/events">
            <Icon fontSize="3xl" as={BiGroup} />
            <Text fontSize="sm">Events</Text>
          </ListItem>
          <ListItem textAlign="center" w="52px" as={Link} to="/badges">
            <Icon fontSize={{ base: "2xl", sm: "3xl" }} as={BiTrophy} />
            <Text fontSize="sm">Badges</Text>
          </ListItem>
        </Box>
      </UnorderedList>
    </Box>
  );
};
