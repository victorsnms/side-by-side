import { ToggleSwitch } from "../../components/ToggleSwitch";
import ImageLogin from "../../assets/images/image-login-signup.svg";
import { Flex, Center, Box, Image, Text } from "@chakra-ui/react";
import { SignupForm } from "./SignupForm";

export const Signup = () => {
  return (
    <Flex
      direction={["column", "column", "column", "row"]}
      justify="center"
      align="center"
      h={{ lg: "100vh" }}
    >
      <Center alignSelf={{ lg: "flex-end" }}>
        <Box pr={["0", "0", "0", "10em"]}>
          {window.innerWidth > 991 && <Text>LOGO</Text>}
          <Image
            src={ImageLogin}
            alt="Illustration signup"
            boxSize={[170, 200, 200, 450, 500]}
          />
        </Box>
      </Center>

      <Center>
        <Box
          bg={{ lg: "white" }}
          h={{ lg: "460px" }}
          w={{ lg: "400px" }}
          shadow={{ lg: "lg" }}
          pt={{ lg: "2.5em" }}
          textAlign="center"
        >
          <Box pl={{ lg: "2em" }}>
            <ToggleSwitch children={["Login", "Signup"]} />
          </Box>
          
          <SignupForm />
        </Box>
      </Center>
    </Flex>
  );
};
