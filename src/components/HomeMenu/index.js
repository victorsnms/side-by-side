import { Button } from "@chakra-ui/button";
import { Box, Center, Container, Flex, HStack, Spacer, Square } from "@chakra-ui/layout"

const HomeMenu = () => {


    return(
        <Flex bg="green.300" h="80px" pl="30px">
            <Center fontSize="4xl" color="white">LOGO</Center>
            <Spacer/>
            <HStack spacing="10px" pr="30px">
                <Button
                    fontSize={["xl", "xl", "2xl"]}
                    fontWeight="300"
                    bg="green.300"
                    color="white"
                    h="38px"
                    borderRadius="5px"
                    _hover={{ bg: "white", color: "green.300" }}
                >
                    Sign up
                </Button>
                <Button
                    fontSize={["xl", "xl", "2xl"]}
                    fontWeight="300"
                    bg="green.300"
                    color="white"
                    h="38px"
                    borderRadius="5px"
                    border="1px solid white"
                    _hover={{ bg: "green.400" }}
                >
                    Login
                </Button>

            </HStack>
        </Flex>
    )
};

export default HomeMenu;