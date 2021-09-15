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

export const JoinUsForms = () => {
  const display = useBreakpointValue({ base: "none", lg: "block" });

  const { formOption, setOptions, setFormOption } = useToggleSwitchContext();

  useEffect(() => {
    setOptions(["Login", "Sign up"]);
    if (formOption === undefined) {
      setFormOption("Login");
    }
  }, []);

  return (
    <Flex
      direction={["column", "column", "column", "row"]}
      justify="center"
      align="center"
      h={{ lg: "100vh" }}
    >
      <Center>
        <Box pr={["0", "0", "0", "3em", "8em"]} display={display}>
          <Box mb="50px">
            <Text bgColor="green.300" display="inline">
              LOGO
            </Text>
            <Box w="280px">
              <Text fontWeight="bold" fontSize="20px">
                Search! Create! Recycle! Make the world a cleaner place!
              </Text>
            </Box>
          </Box>

          <Image
            src={CoolImage}
            alt="Illustration form page"
            w={["200px", "240px", "240", "490px", "580px"]}
            opacity="85%"
          />
        </Box>
      </Center>

      <Center>
        <Flex
          direction="column"
          justify="center"
          bg={{ lg: "white" }}
          h={{ base: "100vh", lg: "460px" }}
          w={{ lg: "400px" }}
          shadow={{ lg: "lg" }}
          pt={{ lg: "2.5em" }}
          textAlign="center"
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