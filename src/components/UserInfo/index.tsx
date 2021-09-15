import { HStack, Box, Text, Flex, Avatar, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RiShieldFill, RiMapFill } from "react-icons/ri";
import { BoxBadges } from "./layouts/BoxBadges";
import { EditProfile } from "../Modals/EditProfile";

export const UserInfo = () => {
  return (
    <Flex w="100%" justifyContent="center">
      <Flex
        position="relative"
        bg="green.300"
        flexDirection={["column", "column", "row", "row"]}
        w="70%"
        h="136px"
        borderRadius="12px"
        justifyContent={["center", "center", "center", "flex-end"]}
        alignItems={["center", "center", "flex-start", "flex-start"]}
      >
        <Box
          position="absolute"
          right={["50%", "50%", "100%", "100%"]}
          top="50%"
          transform={[
            "translate(50%,-115%)",
            "translate(50%,-115%)",
            "translate(50%, -50%)",
            "translate(50%, -50%)",
          ]}
        >
          <Avatar
            w={["103px", "103px", "176px", "176px"]}
            h={["103px", "103px", "176px", "176px"]}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            borderRadius="50%"
            position="relative"
            _hover={{
              filter:"grayscale(70%)"
            }}
            overflow="hidden"
          >
            <EditProfile/>
          </Avatar>
        </Box>

        <Flex
          flexDirection="column"
          mt="1rem"
          w={["100%", "100%", "60%", "60%"]}
          pl={["0", "0", "0", "2rem", "0"]}
        >
          <Text
            as="h1"
            fontSize={["1rem", "1rem", "2rem", "2rem"]}
            textAlign={["center", "center", "left", "left"]}
          >
            <b>Kenzinho Ecológico</b>
          </Text>
          <Text
            as="h2"
            fontSize="12px"
            textAlign={["center", "center", "left", "left"]}
          >
            <Icon as={FaMapMarkerAlt} /> Brasil, América do Sul
          </Text>
        </Flex>
        <HStack
          position={["absolute", "absolute", "absolute", "relative"]}
          bottom="0"
          right={["none", "none", "5%", "none"]}
          transform="translateY(50%)"
        >
          <Box as={BoxBadges} name="Level" count="10" icon={AiFillStar}></Box>
          <Box as={BoxBadges} name="Badges" count="1" icon={RiShieldFill}></Box>
          <Box as={BoxBadges} name="Level" count="10" icon={RiMapFill}></Box>
        </HStack>
      </Flex>
    </Flex>
  );
};
