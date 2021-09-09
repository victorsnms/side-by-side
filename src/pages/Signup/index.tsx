import { Input } from "../../components/Input";
import { ButtonForms } from "../../components/ButtonForms";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import ImageLogin from "../../assets/images/image-login-signup.svg";
import { Flex, Center, Box, Image, VStack, Text, Link } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

export const Signup = () => {
  return (
    <Flex
      direction={["column", "column", "column", "row"]}
      justify="center"
      align="center"
      h={{ lg: "100vh"}}
    >
      <Center alignSelf={{lg: "flex-end"}}>
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
          <Center>
            <VStack spacing="14px" mt={["30px", "30px", "30px", "60px"]}>
              <Input
                icon={AiOutlineUser}
                name="name"
                placeholder="Name"
                w={["262px", "350px"]}
              />
              <Input
                icon={AiOutlineMail}
                name="email"
                placeholder="Email"
                w={["262px", "350px"]}
              />
              <Input
                type="password"
                icon={RiLockPasswordLine}
                name="password"
                placeholder="Password"
                w={["262px", "350px"]}
              />
            </VStack>
          </Center>

          <Box mt={["40px", "40px", "40px", "50px"]} textAlign="center">
            <ButtonForms
              children={"Signup"}
              handleClick={() => ""}
              width={["262px"]}
            />
            <Text mt="12px" fontSize="16px">
              Already have an account?{" "}
              <Link href="/login" color="red.500" textDecoration="underline">
                Login
              </Link>
            </Text>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
};
