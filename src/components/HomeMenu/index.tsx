import { Button } from "@chakra-ui/button";
import { Center, Flex, HStack, Spacer, Image } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useToggleSwitchContext } from "../../providers/ToggleSwitchContext";
import LogoImg from "../../assets/images/biglogow.png";

const HomeMenu = () => {
  const { setFormOption } = useToggleSwitchContext();
  const history = useHistory();

  const sendTo = (path: string) => {
    setFormOption(path);
    history.push("/joinUs");
  };

  return (
    <Flex
      position="absolute"
      w="100%"
      zIndex="1"
      bg="green.300"
      h={["15vh", "14vh", "13vh", "12vh"]}
      pl={["10px", "20px", "30px"]}
    >
      <Center color="white">
        <Image src={LogoImg} w="120px"/>
      </Center>
      <Spacer />
      <HStack pr={["10px", "20px", "30px"]}>
        <Button
          fontSize={["lg", "xl", "2xl"]}
          fontWeight="300"
          bg="green.300"
          color="white"
          h="38px"
          borderRadius="5px"
          _hover={{ bg: "gray.50", color: "green.300" }}
          _focus={{}}
          onClick={() => sendTo("Sign up")}
        >
          Sign up
        </Button>
        <Button
          fontSize={["lg", "xl", "2xl"]}
          fontWeight="300"
          bg="green.300"
          color="white"
          h="38px"
          borderRadius="5px"
          border="1px solid white"
          _hover={{ bg: "green.400" }}
          _focus={{}}
          onClick={() => sendTo("Login")}
        >
          Login
        </Button>
      </HStack>
    </Flex>
  );
};

export default HomeMenu;
