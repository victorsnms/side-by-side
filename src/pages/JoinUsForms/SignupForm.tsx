import { Input } from "../../components/Input";
import { ButtonForms } from "../../components/ButtonForms";
import { Center, Box, VStack } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { userDefaultData } from "../../utils/userDefaultData";

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

export const SignupForm = () => {
  const { badges, experience, image_url, my_events, places } = userDefaultData;

  const formSchema = yup.object().shape({
    name: yup.string().required("Required field"),
    email: yup.string().required("Required field").email("Invalid email"),
    password: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignUp = (data: IFormValues) => {
    const { name, email, password } = data;
    api
      .post("/register", {
        email,
        password,
        name,
        badges,
        experience,
        image_url,
        my_events,
        places,
      })
      .then((response) => console.log(response));
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
        <ButtonForms children={"Sign up"} width={["262px"]} type="submit" />
      </Box>
    </Center>
  );
};
