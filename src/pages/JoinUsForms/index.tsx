import { ToggleSwitch } from "../../components/ToggleSwitch";
import ImageDesktop from "../../assets/images/image-joinpage.svg";
import { Flex, Center, Box, Image, Text } from "@chakra-ui/react";
import { SignupForm } from "./SignupForm";
import { Link } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { useFormContext } from "../../providers/FormContext";
import { useState } from "react";

export const JoinUsForms = () => {
  const { formOption, setFormOption } = useFormContext();
  const [switchOption, setSwitchOption] = useState(false);

  return (
    <Flex
      direction={["column", "column", "column", "row"]}
      justify="center"
      align="center"
      h={{ lg: "100vh" }}
    >
      <Center>
        <Box pr={["0", "0", "0", "3em", "8em"]}>
          {window.innerWidth > 991 ? (
            <>
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
                src={ImageDesktop}
                alt="Illustration form page"
                w={["200px", "240px", "240", "490px", "580px"]}
                opacity="85%"
              />
            </>
          ) : (
            <Image
              src={ImageDesktop}
              alt="Illustration form page"
              w="220px"
              mt="4vh"
              mb="5vh"
              opacity="85%"
            />
          )}
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
            <ToggleSwitch
              options={["Login", "Sign up"]}
              setSwitchOption={setSwitchOption}
              switchOption={switchOption}
            />
          </Box>

          {formOption === "Sign up" && (
            <>
              <SignupForm />
              <Text mt="12px" fontSize="16px" mb="2em">
                Already have an account?{" "}
                <Link
                  onClick={() => setFormOption("login")}
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
                  onClick={() => setFormOption("signup")}
                  color="red.500"
                  textDecoration="underline"
                >
                  Sign Up
                </Link>
              </Text>
            </>
          )}
        </Box>
      </Center>
    </Flex>
  );
};
