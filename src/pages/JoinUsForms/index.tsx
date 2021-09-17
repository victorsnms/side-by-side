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
import LogoImgMobile from "../../assets/images/logo-joinus.png";
import { Link as LinkRouter } from "react-router-dom";

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
      <Center mt="5vh">
        <Box pr={["0", "0", "0", "3em", "8em"]} display={display}>
          <LinkRouter to="/">
            <Text color="green.400" fontWeight="medium" fontSize="45px">SIDE BY SIDE</Text>
          </LinkRouter>
          <Box w="400px">
            <Text fontWeight="bold" fontSize="20px">
              Search! Create! Recycle! Make the world a cleaner place!
            </Text>
          </Box>

          <Image
            src={CoolImage}
            alt="Illustration form page"
            w={["200px", "240px", "240", "490px", "580px"]}
            opacity="85%"
            mt="5vh"
          />
        </Box>
      </Center>

      <Center flexDirection="column">
        <LinkRouter to="/">
          <Image
            src={LogoImgMobile}
            w="110px"
            mt="2vh"
            display={{ lg: "none" }}
          />
        </LinkRouter>

        <Flex
          direction="column"
          justify="center"
          bg={{ lg: "white" }}
          h={{ base: "100vh", lg: "460px" }}
          w={{ lg: "400px" }}
          shadow={{ lg: "lg" }}
          pt={{ lg: "2.5em" }}
          textAlign="center"
          mt={{ base: "-30px", lg: "5vh" }}
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
