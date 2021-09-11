import { Input } from "../../components/Input";
import { ButtonForms } from "../../components/ButtonForms";
import { Center, Box, VStack } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

interface IFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const formSchema = yup.object().shape({
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
    axios
      .post("https://capstone-group2.herokuapp.com/register", data)
      .then((_) => console.log("Registration completed successfully!"))
      .catch((_) => console.log("Failed to register"));
  };

  return (
    <Center
      as="form"
      flexDirection="column"
      onSubmit={handleSubmit(handleSignUp)}
    >
      <VStack spacing="14px" mt={["30px", "30px", "30px", "60px"]}>
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
        <ButtonForms children={"Login"} width={["262px"]} type="submit" />
      </Box>
    </Center>
  );
};