import { Input } from "../../components/Input";
import { ButtonForms } from "../../components/ButtonForms";
import { Center, Box, VStack, Text, Link } from "@chakra-ui/react";
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

export const SignupForm = () => {
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
        <ButtonForms children={"Signup"} width={["262px"]} type="submit" />
        <Text mt="12px" fontSize="16px">
          Already have an account?{" "}
          <Link href="/login" color="red.500" textDecoration="underline">
            Login
          </Link>
        </Text>
      </Box>
    </Center>
  );
};
