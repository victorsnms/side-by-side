import { Box, VStack, Text, Icon } from "@chakra-ui/react";

import { IconType } from "react-icons";
interface BoxBadgesProps {
  name: string;
  count: string;
  icon: IconType;
}
export const BoxBadges = ({ name, count, icon }: BoxBadgesProps) => {
  return (
    <Box
      w={["58px","58px","58px","66px"]}
      h={["58px","58px","58px","66px"]}
      bg="white"
      borderRadius=" 8px 8px 50px 50px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      position="relative"
    >
      <VStack>
        <Text fontSize={["14px", "14px", "14px", "18px"]}>{name}</Text>
        <Text
          as="span"
          zIndex="7"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%,-50%)"
          fontSize={["14px", "14px", "14px", "18px"]}
        >
          <b>{count}</b>
        </Text>
        <Icon
          fontSize={["36px","36","36px","44px"]}
          as={icon}
          color="green.300"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%,-50%)"
        />
      </VStack>
    </Box>
  );
};
