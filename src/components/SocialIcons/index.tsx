import { Box, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const SocialIcons = () => {
  return (
    <Box w="140px">
      <UnorderedList
        display="flex"
        justifyContent="space-evenly"
        marginLeft="0px"
      >
        <ListItem
          cursor="pointer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          listStyleType="none"
          w="40px"
          h="40px"
          bg="white"
          boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
        >
          <Icon h="30px" w="30px" color="blue.500" as={FaFacebook}></Icon>
        </ListItem>
        <ListItem
          cursor="pointer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          listStyleType="none"
          w="40px"
          h="40px"
          bg="white"
          boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
        >
          <Icon h="30px" w="30px" color="blue.500" as={FaInstagram}></Icon>
        </ListItem>
        <ListItem
          cursor="pointer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          listStyleType="none"
          w="40px"
          h="40px"
          bg="white"
          boxShadow="0 4px 4px rgba(0, 0, 0, 0.25)"
        >
          <Icon h="30px" w="30px" color="blue.500" as={FaTwitter}></Icon>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
