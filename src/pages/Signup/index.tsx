import { Input } from "../../components/Input";
import { ButtonForms } from "../../components/ButtonForms";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import ImageLogin from "../../assets/images/image-login-signup.svg";
import { Flex, Center, Box, Image, VStack, Text, Link } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

export const Signup = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Required field"),
    email: yup.string().required("Required field").email("Invalid email"),
    password: yup
      .string()
      .required("Required field")
      .matches(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g,
        "Invalid password"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignUp = (data: IFormValues) => {
    console.log(data);
  };

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

          <Center
            as="form"
            flexDirection="column"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <VStack spacing="14px" mt={["30px", "30px", "30px", "60px"]}>
              <Input
                icon={AiOutlineUser}
                placeholder="Name"
                w={["262px", "350px"]}
                error={errors.name}
                {...register("name")}
              />
              <Input
                icon={AiOutlineMail}
                placeholder="Email"
                w={["262px", "350px"]}
                error={errors.email}
                {...register("email")}
              />
              <Input
                type="password"
                icon={RiLockPasswordLine}
                placeholder="Password"
                w={["262px", "350px"]}
                error={errors.password}
                {...register("password")}
              />
            </VStack>

            <Box mt={["40px", "40px", "40px", "50px"]} textAlign="center">
              <ButtonForms
                children={"Signup"}
                width={["262px"]}
                type="submit"
              />
              <Text mt="12px" fontSize="16px">
                Already have an account?{" "}
                <Link href="/login" color="red.500" textDecoration="underline">
                  Login
                </Link>
              </Text>
            </Box>
          </Center>
        </Box>
      </Center>
    </Flex>
  );
};
