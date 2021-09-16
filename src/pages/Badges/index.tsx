import { Box, Flex, Image } from "@chakra-ui/react";
import BadgesDisplay from "../../components/BadgesDisplay";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { UserInfo } from "../../components/UserInfo";
import LogoImg from "../../assets/images/biglogog.png";

const Badges = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <Box>
      {isMobile ? <BottomMenu /> : <DashboardMenu />}
      <Image
        src={LogoImg}
        w="60px"
        mt="10vh"
        position="absolute"
        top="-38px"
        left="10px"
        display={{ lg: "none" }}
      />
      <Flex flexDirection="column">
        <Box mt="92px" ml={["2%", "2%", "20%", "10%"]}>
          <UserInfo />
          <BadgesDisplay />
        </Box>
      </Flex>
    </Box>
  );
};

export default Badges;
