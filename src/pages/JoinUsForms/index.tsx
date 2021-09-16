import { ToggleSwitch } from "../../components/ToggleSwitch";
import CoolImage from "../../assets/images/image-joinpage.png";
import {
  Flex,
  Center,
  Box,
  Image,
  Text,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SignupForm } from "./SignupForm";
import { LoginForm } from "./LoginForm";
import { useToggleSwitchContext } from "../../providers/ToggleSwitchContext";
import { useEffect } from "react";
import LogoImg from "../../assets/images/biglogog.png";

export const JoinUsForms = () => {
  const display = useBreakpointValue({ base: "none", lg: "block" });

  const { formOption, setOptions, setFormOption } = useToggleSwitchContext();

  useEffect(() => {
    setOptions(["Login", "Sign up"]);
    if (formOption === "") {
      setFormOption("Login");
    }
  }, [formOption]);

  return (
    <Flex
      direction={["column", "column", "column", "row"]}
      justify="center"
      align="center"
      h={{ lg: "100vh" }}
    >
      <Center>
        <Box pr={["0", "0", "0", "3em", "8em"]} display={display}>
          <Image src={LogoImg} w="160px" mb="30px" />

          <Image
            src={CoolImage}
            alt="Illustration form page"
            w={["200px", "240px", "240", "490px", "580px"]}
            opacity="85%"
          />
        </Box>
      </Center>

      <Center flexDirection="column">
        <Image src={LogoImg} w="100px" mt="10vh" display={{ lg: "none" }} />

        <Flex
          direction="column"
          justify="center"
          bg={{ lg: "white" }}
          h={{ base: "100vh", lg: "460px" }}
          w={{ lg: "400px" }}
          shadow={{ lg: "lg" }}
          pt={{ lg: "2.5em" }}
          textAlign="center"
          mt={{ base: "-30px" }}
        >
          <Flex justify="center" mb={{ base: "2em", lg: "0" }}>
            <ToggleSwitch />
          </Flex>

          {formOption === "Sign up" && (
            <>
              <SignupForm />
              <Text mt="12px" fontSize="16px" mb="2em">
                Already have an account?{" "}
                <Link
                  onClick={() => setFormOption("Login")}
                  color="red.500"
                  textDecoration="underline"
                >
                  Login
                </Link>
              </Text>
            </>
          )}

          {formOption === "Login" && (
            <>
              <LoginForm />
              <Text mt="12px" fontSize="16px" mb="2em">
                Don't have an account?{" "}
                <Link
                  onClick={() => setFormOption("Sign up")}
                  color="red.500"
                  textDecoration="underline"
                >
                  Sign Up
                </Link>
              </Text>
            </>
          )}
        </Flex>
      </Center>
    </Flex>
  );
};
