import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import BadgesDisplay from "../../components/BadgesDisplay";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { UserInfo } from "../../components/UserInfo";
import LogoImg from "../../assets/images/marcador-recycle2.png";

const Badges = () => {
  const display = useBreakpointValue({ base: "flex", lg: "none" });

  return (
    <Box>
      <Flex position="absolute" top="7px" left="12px" display={display}>
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
      <BottomMenu />
      <DashboardMenu />
      <Flex flexDirection="column" pt="50px">
        <Box mt="38px" ml={["2%", "2%", "20%", "10%"]}>
          <UserInfo />
          <BadgesDisplay />
        </Box>
      </Flex>
    </Box>
  );
};

export default Badges;
