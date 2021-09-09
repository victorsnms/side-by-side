import { Input } from "../../components/Input";
import { ButtonForms } from "../../components/ButtonForms";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import ImageLogin from "../../assets/images/image-login-signup.svg";
import { Flex, Center, Box, Image, VStack, Text, Link } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

export const Signup = () => {
  return (
    <Flex flexDirection={["column", "row"]}>
      <Center>
        <Box>
          <Image
            src={ImageLogin}
            alt="Illustration signup"
            boxSize={[170, 200, 200, 450, 610]}
          />
        </Box>
      </Center>
      <Center>
        <Box>
          <ToggleSwitch children={["Login", "Signup"]} />

          <VStack spacing="14px" mt="30px">
            <Input
              icon={AiOutlineUser}
              name="name"
              placeholder="Name"
              w={["262px", "438px"]}
            />
            <Input
              icon={AiOutlineMail}
              name="email"
              placeholder="Email"
              w={["262px", "438px"]}
            />
            <Input
              type="password"
              icon={RiLockPasswordLine}
              name="password"
              placeholder="Password"
              w={["262px", "438px"]}
            />
          </VStack>

          <Box mt="40px">
            <ButtonForms
              children={"Signup"}
              handleClick={() => ""}
              width={["262px", "438px"]}
            />
            <Text textAlign="center" mt="12px" fontSize="16px">
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
