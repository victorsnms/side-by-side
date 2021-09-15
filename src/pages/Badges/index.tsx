import { Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import BadgesDisplay from "../../components/BadgesDisplay";
import { BottomMenu } from "../../components/BottomMenu";
import { DashboardMenu } from "../../components/DashboardMenu";
import { UserInfo } from "../../components/UserInfo";

const Badges = () => {

    const isMobile = window.innerWidth < 768;

    return(
        <Box>
            {isMobile ? <BottomMenu /> : <DashboardMenu />}
            <Flex flexDirection="column">
            {isMobile ? <Center h="50px" justifyContent="left" ml="5" fontSize="2xl" color="green.400">LOGO</Center> : <></>}        
                <Box mt="38px" ml={["2%", "2%", "20%", "10%"]}>
                    <UserInfo/>
                    <BadgesDisplay/>
                </Box>
                
            </Flex>

        </Box>

    )
};

export default Badges;