import { useDisclosure } from "@chakra-ui/core";
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
  Flex,
  VStack,
  Text, HStack, Textarea
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToggleSwitch } from "../ToggleSwitch";

interface EventData {
  name: string;
  address: string;
  contact: string;
  time: string;
  date: string;
  description: string;
  picture_url?: string;
  voluntaries: {
    name: string
    id:string
  }[]
  lat?:string
  lgn?:string
}

export const EventModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options=["Event","Wast Point"]
  const eventSchema = yup.object().shape({
    name: yup.string().required("Event name required"),
    address: yup.string().required("Eventa address required"),
    contact: yup.string().required("Email or cellphone required"),
    time: yup.string().required("Event time required"),
    date: yup.string().required("Event date required"),
    description: yup.string().required("Event description required"),
    picture_url: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const eventSubmit = (data:EventData) => {
    console.log(data)
  }
  return (
    <>
    <Button onClick={onOpen}>Open Modal</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="green.70"/>
      <ModalContent bg={"white"} mb={"0px"} alignSelf={"flex-end"} h="80%">
        <ModalCloseButton w="32px" alignSelf="flex-end" bg="transparent" outline="none" border="none" size="sm"/>
        <ModalHeader display="flex" justifyContent="center">
          <ToggleSwitch options={options} />
        </ModalHeader>
        <ModalBody>
          <Flex as="form" justifyContent="center" onSubmit={handleSubmit(eventSubmit)}>
            <VStack>
              <Text as="p">Create a new Event</Text>
              <input placeholder="Aguardadno imput component"></input>
              <input placeholder="Aguardadno imput component"></input>
              <input placeholder="Aguardadno imput component"></input>
              <HStack>
                <input placeholder="Aguardadno imput component"></input>
                <input placeholder="Aguardadno imput component"></input>
              </HStack>
              <Textarea as="textarea" placeholder="Description..."></Textarea>
              <input placeholder="Aguardadno imput component"></input>
            </VStack>
          </Flex>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button type="submit">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
};
