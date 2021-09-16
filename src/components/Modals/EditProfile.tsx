import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  Flex,
  VStack,
  Avatar,
  DrawerFooter,
  useBoolean,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../../providers/AuthContext";
import { useUser } from "../../providers/UserContext";
import { ButtonAdd } from "../ButtomAdd";
import { useEffect } from "react";
import { Input } from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaImage, FaUser } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { api } from "../../services/api";
import { ButtonForms } from "../ButtonForms";
import { ModalSuccess } from "./ModalSuccess";
import { ModalError } from "./ModalError";
import { theme } from "../../styles/theme";

interface Data {
  name: string;
  image_url: string;
}

export const EditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = window.innerWidth < 768;
  const position = isMobile ? "bottom" : "left";
  const { accessToken, id } = useAuth();
  const { getUser, userData } = useUser();
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

  useEffect(() => {
    getUser(id, accessToken);
  }, []);

  const { name, image_url } = userData;

  const eventSchema = yup.object().shape({
    name: yup.string(),
    image_url: yup.string().matches(/^(http?s)/, "Url invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const onSubmitFunction = (data: Data) => {
    setIsLoading.on();
    const { image_url: image_url_form, name: name_form } = data;
    const newData = {
      name: name_form === "" ? name : name_form,
      image_url: image_url_form === "" ? image_url : image_url_form,
    };
    api
      .patch(`/users/${id}`, newData, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        setIsLoading.off();
        onSuccessOpen();
      })
      .catch((_) => {
        setIsLoading.off();
        onErrorOpen();
      });
  };

  return (
    <>
      <Flex
        position="absolute"
        borderRadius="100%"
        w="100%"
        h="100%"
        _hover={{ "& > button": { display: "block" } }}
      >
        <Button
          onClick={onOpen}
          display="none"
          alignSelf="flex-end"
          justifySelf="center"
          w="100%"
          h="35%"
          children="Edit profile"
          bg="transparent"
          transition="ease-in .2s all"
          _hover={{ bgColor: "green.70" }}
          pb="6px"
          fontSize={[".7rem", ".7 rem", "1rem", "1rem"]}
        />
      </Flex>
      <ModalSuccess
        isOpen={isSuccessOpen}
        message="Cool. Your data has been updated."
        onClose={onSuccessClose}
      />
      <ModalError
        isOpen={isErrorOpen}
        onClose={onErrorClose}
        message="Something weird happened.
        Keep calm and try again"
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={position}
        trapFocus={false}
      >
        <DrawerOverlay bg="green.70" />
        <DrawerContent
          minW={["80%", "80%", "350px", "350px"]}
          h={["90%", "90%", "100%", "100%"]}
          borderTopRadius={["12px", "0"]}
          bg="linear-gradient(to bottom, #73C0B0 20%, white 0% )"
        >
          <DrawerCloseButton />
          <DrawerHeader alignSelf="center"></DrawerHeader>

          <DrawerBody
            as="form"
            display="flex"
            flexDirection="column"
            h="100%"
            onSubmit={handleSubmit(onSubmitFunction)}
          >
            <Flex
              justifyContent="center"
              onSubmit={handleSubmit(onSubmitFunction)}
            >
              <VStack spacing="5" h="100%">
                <Avatar
                  w={["103px", "103px", "176px", "176px"]}
                  h={["103px", "103px", "176px", "176px"]}
                  src={image_url}
                  borderRadius="50%"
                />
                <Input
                  icon={AiOutlineUser}
                  placeholder={name}
                  {...register("name")}
                  error={errors.name}
                />
                <Input
                  icon={FaImage}
                  placeholder={image_url}
                  {...register("image_url")}
                  error={errors.image_url}
                />
              </VStack>
            </Flex>
            <DrawerFooter flex="1" pr="0px">
              <Flex alignSelf="flex-end">
                <ButtonForms
                  children="Cancel"
                  type="button"
                  width={["auto"]}
                  bg="blue.500"
                  mr="16px"
                />
                <ButtonForms
                  children="Update"
                  type="submit"
                  width={["auto"]}
                  isLoading={isLoading}
                />
              </Flex>
            </DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
