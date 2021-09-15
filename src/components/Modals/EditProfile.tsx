import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  Flex, VStack
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

  useEffect(() => {
    getUser(id, accessToken);
  }, []);

  const {name,image_url} = userData

  const eventSchema = yup.object().shape({
    name: yup.string().required("Event name required"),
    image_url: yup.string().url("Url image invalid").required("Image required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const onSubmitFunction = (data:Data) => {
      api.patch(`/users/${id}`, data,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
       ).then((response) => console.log(response.data)).catch((_) => console.log("modal de error"))
  };

  return (
    <>
      <ButtonAdd onClick={onOpen} />
      

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
        >
          <DrawerCloseButton />
          <DrawerHeader alignSelf="center"></DrawerHeader>
          <DrawerBody>
          <Flex
      as="form"
      justifyContent="center"
      onSubmit={handleSubmit(onSubmitFunction)}
    >
      <VStack spacing="5" h="100%">
            <Input
              icon={AiOutlineUser}
              placeholder="Name"
              {...register("name")}
              error={errors.name}
              value={name}
            />
             <Input
              icon={FaImage}
              placeholder="Your image"
              {...register("image_url")}
              error={errors.image_url}
              value={image_url}
            />
</VStack>
           </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
