import { Input } from "../../components/Input";
import { ButtonForms } from "../../components/ButtonForms";
import {
  Center,
  Box,
  VStack,
  useDisclosure,
  useBoolean,
} from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { userDefaultData } from "../../utils/userDefaultData";
import { ModalSuccess } from "../../components/Modals/ModalSuccess";
import { useModal } from "../../providers/ModalProviders";
import { ModalError } from "../../components/Modals/ModalError";

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

export const SignupForm = () => {
  const { badges, experience, image_url, my_events, places } = userDefaultData;
  const [isLoading, setIsLoading] = useBoolean();
  const {
    isOpen: isSuccessOpen,
    onClose: onSuccessClose,
    onOpen: onSuccessOpen,
  } = useDisclosure();
  const {
    isOpen: isErrorOpen,
    onClose: onErrorClose,
    onOpen: onErrorOpen,
  } = useDisclosure();

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
    setIsLoading.on();
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
      .then((_) => {
        setIsLoading.off();
        onSuccessOpen();
      })
      .catch((_) => {
        onErrorOpen();
        setIsLoading.off();
      });
  };

  return (
    <>
      <ModalSuccess
        isOpen={isSuccessOpen}
        message="Are you ready. Let's save the planet together"
        onClose={onSuccessClose}
      />
      <ModalError
        isOpen={isErrorOpen}
        message="Something weird happened.
        Keep calm and try again"
        onClose={onErrorClose}
      />
      <Center
        as="form"
        flexDirection="column"
        onSubmit={handleSubmit(handleSignUp)}
        flex={["0", "0", "1"]}
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
            children={"Sign up"}
            width={["262px"]}
            type="submit"
            isLoading={isLoading}
          />
        </Box>
      </Center>
    </>
  );
};
